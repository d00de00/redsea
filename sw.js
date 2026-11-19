async readSqliteFile(file) {
    this.showToast('⏳ جاري تهيئة قاعدة البيانات...');
    try {
        const SQL = await initSqlJs({
            locateFile: f => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/${f}`
        });

        const buffer = await file.arrayBuffer();
        const db = new SQL.Database(new Uint8Array(buffer));

        // التحقق من وجود جدول tiles
        const tableCheck = db.exec("SELECT name FROM sqlite_master WHERE type='table' AND name='tiles'");
        if (!tableCheck.length || !tableCheck[0].values.length) {
            this.showToast('⚠️ الملف لا يحتوي على جدول tiles المتوافق مع MBTiles');
            return;
        }

        // قراءة بيانات metadata إن وجدت (bounds, minzoom, maxzoom)
        let minZoom = 0;
        let maxZoom = 18;
        let bounds = null;
        try {
            const metaRes = db.exec("SELECT name, value FROM metadata");
            if (metaRes.length) {
                const meta = {};
                metaRes[0].values.forEach(([k, v]) => { meta[k] = v; });
                if (meta.minzoom != null && !isNaN(Number(meta.minzoom))) minZoom = Number(meta.minzoom);
                if (meta.maxzoom != null && !isNaN(Number(meta.maxzoom))) maxZoom = Number(meta.maxzoom);
                if (meta.bounds) {
                    const parts = String(meta.bounds).split(',').map(Number);
                    if (parts.length === 4 && parts.every(n => !isNaN(n))) {
                        // MBTiles bounds format: west,south,east,north
                        bounds = L.latLngBounds([parts[1], parts[0]], [parts[3], parts[2]]);
                    }
                }
            }
        } catch (_) {}

        const queryTile = (z, x, y) => {
            const stmt = db.prepare('SELECT tile_data FROM tiles WHERE zoom_level = :z AND tile_column = :x AND tile_row = :y LIMIT 1');
            const row = stmt.getAsObject({ ':z': z, ':x': x, ':y': y });
            stmt.free();
            return row && row.tile_data ? row.tile_data : null;
        };

        const SqliteTileLayer = L.TileLayer.extend({
            createTile: function(coords, done) {
                const tile = document.createElement('img');
                tile.alt = '';
                tile.setAttribute('role', 'presentation');
                let blobUrl = null;
                try {
                    const tmsY = (1 << coords.z) - 1 - coords.y;
                    let data = queryTile(coords.z, coords.x, tmsY);
                    if (!data) {
                        data = queryTile(coords.z, coords.x, coords.y);
                    }
                    if (data && data.length) {
                        // تجاهل البلاطات المتجهة (PBF/GZIP: 0x1f 0x8b) لأن وسم img يعرض الصور فقط
                        const isGzip = data[0] === 0x1F && data[1] === 0x8B;
                        if (!isGzip) {
                            const isJpg = data[0] === 0xFF && data[1] === 0xD8;
                            blobUrl = URL.createObjectURL(new Blob([data], { type: isJpg ? 'image/jpeg' : 'image/png' }));
                        }
                    }
                } catch (_) {
                    blobUrl = null;
                }
                if (!blobUrl) {
                    setTimeout(() => done(null, tile), 0);
                    return tile;
                }
                tile.onload = () => { URL.revokeObjectURL(blobUrl); done(null, tile); };
                tile.onerror = () => { URL.revokeObjectURL(blobUrl); done(null, tile); };
                tile.src = blobUrl;
                return tile;
            }
        });

        const offlineLayer = new SqliteTileLayer('', { minZoom, maxZoom });
        if (bounds) {
            offlineLayer.getBounds = () => bounds;
        }
        offlineLayer.addTo(this.map);
        this.addUploadedMap(file.name, offlineLayer);
        if (bounds && bounds.isValid()) {
            this.map.fitBounds(bounds, { padding: [30, 30] });
        }
        this.showToast('🗺️ تم تحميل خريطة MBTiles بنجاح');
    } catch (err) {
        console.error(err);
        this.showToast('⚠️ تعذر قراءة ملف MBTiles. تأكد من صحة الملف والاتصال.');
    }
}