/* colors.js — RedSea v2.0 */
const SEAMARK_COLORS = {
    '0x0100':'#fbbf24','0x0101':'#fcd34d','0x0102':'#fde68a','0x0103':'#16a34a','0x0104':'#15803d','0x0105':'#dc2626','0x0106':'#eab308',
    '0x0400':'#7c2d12','0x0401':'#991b1b','0x0402':'#b91c1c','0x0403':'#dc2626','0x0404':'#7c2d12','0x0405':'#a16207','0x0406':'#525252','0x040a':'#dc2626','0x040b':'#b91c1c','0x040c':'#dc2626','0x040d':'#7c2d12','0x040e':'#a16207',
    '0x0500':'#1e3a8a','0x0501':'#1e40af','0x0502':'#1d4ed8','0x0503':'#991b1b','0x0504':'#7f1d1d','0x0505':'#6366f1','0x0506':'#0891b2',
    '0x0700':'#0f172a','0x0701':'#1e293b','0x0702':'#334155',
    '0x1000':'#1e40af','0x1001':'#0284c7','0x1002':'#166534','0x1003':'#a16207','0x1004':'#78716c',
    '0x0a00':'#7c3aed','0x0a01':'#8b5cf6','0x0a02':'#0891b2','0x0a03':'#57534e','0x0a04':'#0ea5e9','0x0a05':'#0891b2','0x0a06':'#7c3aed',
    '0x2000':'#a855f7','0x2001':'#6366f1','0x2002':'#4f46e5','0x2003':'#9333ea','0x2004':'#a855f7','0x2005':'#8b5cf6',
    '0x2500':'#57534e','0x2501':'#78716c','0x2502':'#a8a29e',
    '0x2600':'#ea580c','0x2601':'#c2410c','0x2602':'#9a3412',
    'rock':'#dc2626','wreck':'#7c2d12','obstruction':'#b91c1c','depth':'#0f172a',
    'light_major':'#fbbf24','light_minor':'#fcd34d','light_vessel':'#f59e0b','light_float':'#fbbf24','light_moire':'#fde68a',
    'buoy_lateral':'#16a34a','buoy_cardinal':'#eab308','buoy_safe_water':'#dc2626','buoy_special_purpose':'#eab308','buoy_isolated_danger':'#000000','buoy_installation':'#0891b2','buoy_mooring':'#0891b2',
    'beacon_lateral':'#15803d','beacon_cardinal':'#ca8a04','beacon_safe_water':'#dc2626','beacon_special_purpose':'#eab308','beacon_isolated_danger':'#000000',
    'mooring':'#0891b2','anchorage':'#0ea5e9','harbour':'#7c3aed','marina':'#8b5cf6','berth':'#0891b2','dock':'#0891b2',
    'landmark':'#be185d','tower':'#db2777','lighthouse':'#fbbf24',
    'pipeline':'#57534e','cable_area':'#78716c','cable_submarine':'#a8a29e',
    'platform':'#ea580c','production_area':'#c2410c',
    'restricted_area':'#991b1b','military_area':'#7f1d1d','caution_area':'#f97316',
    'seabed_area':'#0d9488','silt':'#a16207','mud':'#a16207','sand':'#a16207','gravel':'#a16207','coral':'#f97316','stone':'#78716c','rock_area':'#dc2626',
    'recommended_track':'#a855f7','fairway':'#6366f1','channel':'#6366f1','ferry_route':'#4f46e5','separation_boundary':'#9333ea','separation_lane':'#a855f7','two-way_route':'#8b5cf6',
    'topmark':'#000000','daymark':'#dc2626','notice':'#0891b2','small_craft_facility':'#0891b2','dam':'#78350f','weir':'#78350f','shoreline':'#1e40af','coastline':'#1e40af','water_level':'#0284c7','tide':'#0369a1','distance_mark':'#0d9488'
};

const GEOJSON_COLORS = {
    'landuse:land':'#8b7355','landuse:forest':'#166534','landuse:wood':'#166534','landuse:grass':'#4ade80','landuse:meadow':'#84cc16','landuse:farmland':'#ca8a04','landuse:residential':'#94a3b8','landuse:industrial':'#64748b','landuse:commercial':'#a78bfa','landuse:retail':'#c084fc','landuse:military':'#dc2626','landuse:cemetery':'#525252','landuse:quarry':'#a8a29e','landuse:orchard':'#65a30d','landuse:vineyard':'#7c2d12','landuse:recreation_ground':'#86efac','landuse:construction':'#facc15',
    'natural:wood':'#166534','natural:scrub':'#65a30d','natural:grassland':'#4ade80','natural:heath':'#a3a3a3','natural:sand':'#fcd34d','natural:beach':'#fbbf24','natural:rock':'#78716c','natural:bare_rock':'#a8a29e','natural:scree':'#9ca3af','natural:wetland':'#0d9488','natural:marsh':'#14b8a6','natural:water':'#0ea5e9','natural:bay':'#38bdf8','natural:coastline':'#1e40af','natural:reef':'#f97316','natural:shoal':'#fb923c','natural:cliff':'#57534e','natural:valley':'#a16207','natural:peak':'#7c3aed','natural:spring':'#06b6d4','natural:cave_entrance':'#292524',
    'building:yes':'#475569','building:house':'#78350f','building:residential':'#94a3b8','building:commercial':'#6366f1','building:industrial':'#374151','building:church':'#a16207','building:mosque':'#15803d','building:hospital':'#ef4444','building:school':'#f59e0b','building:warehouse':'#525252','building:garage':'#64748b','building:roof':'#78716c','building:hut':'#92400e','building:construction':'#facc15',
    'waterway:river':'#0284c7','waterway:stream':'#38bdf8','waterway:canal':'#0369a1','waterway:drain':'#64748b','waterway:ditch':'#94a3b8','waterway:riverbank':'#0ea5e9','waterway:dam':'#78350f','waterway:weir':'#a16207',
    'man_made:pier':'#78350f','man_made:breakwater':'#57534e','man_made:groyne':'#78716c','man_made:lighthouse':'#fbbf24','man_made:tower':'#db2777','man_made:water_tower':'#0ea5e9','man_made:windmill':'#a3a3a3','man_made:mast':'#7c3aed','man_made:storage_tank':'#64748b','man_made:pipeline':'#57534e','man_made:crane':'#ea580c',
    'highway:motorway':'#dc2626','highway:trunk':'#ea580c','highway:primary':'#f97316','highway:secondary':'#eab308','highway:tertiary':'#facc15','highway:residential':'#a3a3a3','highway:service':'#d4d4d4','highway:track':'#a16207','highway:footway':'#78716c','highway:path':'#92400e','highway:cycleway':'#16a34a','highway:pedestrian':'#84cc16',
    'railway:rail':'#1f2937','railway:light_rail':'#4b5563','railway:station':'#dc2626',
    'leisure:park':'#22c55e','leisure:garden':'#4ade80','leisure:playground':'#facc15','leisure:pitch':'#16a34a','leisure:marina':'#8b5cf6','leisure:fishing':'#0891b2',
    'amenity:hospital':'#ef4444','amenity:school':'#f59e0b','amenity:mosque':'#15803d','amenity:parking':'#6366f1','amenity:fuel':'#ea580c','amenity:bank':'#a78bfa','amenity:restaurant':'#f97316','amenity:police':'#1e40af','amenity:fire_station':'#dc2626',
    'boundary:administrative':'#9333ea','boundary:national_park':'#16a34a','boundary:protected_area':'#15803d',
    'place:island':'#166534','place:islet':'#22c55e','place:city':'#dc2626','place:town':'#ea580c','place:village':'#f59e0b','place:hamlet':'#fbbf24'
};

const MP_ICONS = {
    '0x0100':'💡','0x0101':'💡','0x0102':'💡','0x0103':'🌊','0x0104':'🚩','0x0105':'🌊','0x0106':'🌊',
    '0x0400':'⚠️','0x0401':'*','0x0402':'*','0x0403':'*','0x0404':'☠️','0x0405':'☠️','0x0406':'☠️','0x040a':'*','0x040b':'*','0x040c':'🌊','0x040d':'☠️','0x040e':'☠️',
    '0x0500':'⚓','0x0501':'⚓','0x0502':'⛔','0x0503':'🚫','0x0504':'⚠️','0x0505':'🛢️','0x0506':'⚓',
    '0x0700':'depth','0x0701':'depth','0x0702':'depth',
    '0x1000':'🌊','0x1001':'🌊','0x1002':'🏝️','0x1003':'🏖️','0x1004':'🪨',
    '0x0a00':'🏭','0x0a01':'⛵','0x0a02':'⚓','0x0a03':'🧱','0x0a04':'⚓','0x0a05':'⚓','0x0a06':'🏭',
    '0x2000':'➡️','0x2001':'➡️','0x2002':'⛴️','0x2003':'➡️','0x2004':'➡️','0x2005':'↔️',
    '0x2500':'〰️','0x2501':'〰️','0x2502':'〰️','0x2600':'🛢️','0x2601':'🛢️','0x2602':'🛢️'
};

const SEAMARK_ICONS = {
    'rock':'*','wreck':'☠️','obstruction':'⚠️','depth':'depth',
    'light_major':'💡','light_minor':'💡','light_vessel':'💡','light_float':'💡','light_moire':'💡',
    'buoy_lateral':'🌊','buoy_cardinal':'🌊','buoy_safe_water':'🌊','buoy_special_purpose':'🌊','buoy_isolated_danger':'🌊','buoy_installation':'🌊','buoy_mooring':'⚓',
    'beacon_lateral':'🚩','beacon_cardinal':'🚩','beacon_safe_water':'🚩','beacon_special_purpose':'🚩','beacon_isolated_danger':'🚩',
    'mooring':'⚓','anchorage':'⚓','harbour':'🏭','marina':'⛵','berth':'⚓','dock':'⚓',
    'landmark':'🗼','tower':'🗼','lighthouse':'💡',
    'pipeline':'〰️','cable_area':'〰️','cable_submarine':'〰️',
    'platform':'🛢️','production_area':'🛢️',
    'restricted_area':'⛔','military_area':'🚫','caution_area':'⚠️',
    'seabed_area':'〰️','silt':'〰️','mud':'〰️','sand':'〰️','gravel':'〰️','coral':'🪸','stone':'🪨','rock_area':'*',
    'recommended_track':'➡️','fairway':'➡️','channel':'➡️','ferry_route':'⛴️','separation_boundary':'➡️','separation_lane':'➡️','two-way_route':'↔️',
    'topmark':'▲','daymark':'▪','notice':'📢','small_craft_facility':'📢','dam':'▬','weir':'▬',
    'shoreline':'🌊','coastline':'🌊','water_level':'〰️','tide':'〰️','distance_mark':'📏'
};

const MP_LABELS = {
    '0x0100':'منارة رئيسية','0x0101':'ضوء ثانوي','0x0102':'ضوء صغير','0x0103':'عوامة جانبية','0x0104':'علامة جانبية','0x0105':'عوامة خطر','0x0106':'عوامة اتجاهية',
    '0x0400':'عائق / حطام','0x0401':'صخرة ظاهرة','0x0402':'صخرة مغمورة خطرة','0x0403':'صخرة مغمورة','0x0404':'حطام خطير','0x0405':'حطام','0x0406':'منطقة حطام','0x040a':'صخور','0x040b':'صخور مغمورة','0x040c':'شعبة / صخرة مغمورة','0x040d':'حطام خطير','0x040e':'حطام',
    '0x0500':'منطقة بحرية / مرسى','0x0501':'منطقة بحرية','0x0502':'منطقة محظورة','0x0503':'منطقة عسكرية','0x0504':'منطقة خطرة','0x0505':'منطقة إنتاج','0x0506':'منطقة رسو',
    '0x0700':'نقطة عمق','0x0701':'عمق خطير','0x0702':'عمق ضحل',
    '0x1000':'خط ساحلي','0x1001':'خط مياه','0x1002':'يابسة / جزيرة','0x1003':'رمل / شاطئ','0x1004':'صخور ساحلية',
    '0x0a00':'ميناء','0x0a01':'مارينا','0x0a02':'رصيف','0x0a03':'كاسر أمواج','0x0a04':'رصيف عائم','0x0a05':'مرسى','0x0a06':'ميناء رئيسي',
    '0x2000':'مسار موصى به','0x2001':'قناة ملاحية','0x2002':'خط عبّارة','0x2003':'حدود فصل','0x2004':'ممر فصل','0x2005':'مسار ثنائي الاتجاه',
    '0x2500':'أنبوب نفط','0x2501':'منطقة كابلات','0x2502':'كابل بحري','0x2600':'منصة نفط','0x2601':'منطقة إنتاج','0x2602':'بئر نفط'
};

function autoColorFromString(str) {
    let h = 0;
    const s = String(str || 'default');
    for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
    const palette = ['#e6194b','#3cb44b','#4363d8','#f58231','#911eb4','#f032e6','#469990','#9a6324','#42d4f4','#dcbeff','#000075','#800000'];
    return palette[h % palette.length];
}
function getSeamarkColor(code) {
    if (!code) return null;
    const k = String(code).toLowerCase().replace(/^seamark:/, '').trim();
    return SEAMARK_COLORS[k] || null;
}
function getSeamarkIcon(code) {
    if (!code) return null;
    const k = String(code).toLowerCase().replace(/^seamark:/, '').trim();
    return MP_ICONS[k] || SEAMARK_ICONS[k] || null;
}
function getSeamarkLabel(code) {
    if (!code) return '';
    const k = String(code).toLowerCase().trim();
    return MP_LABELS[k] || k;
}
function getGeoJSONColor(props) {
    if (!props) return '#fbbf24';
    const mp = String(props.mp_type || props.MP_TYPE || '').toLowerCase();
    if (mp && SEAMARK_COLORS[mp]) return SEAMARK_COLORS[mp];
    const sm = String(props['seamark:type'] || props.seamark_type || '').toLowerCase();
    if (sm && SEAMARK_COLORS[sm]) return SEAMARK_COLORS[sm];
    const tp = String(props.type || props.Type || '').toLowerCase();
    if (tp && SEAMARK_COLORS[tp]) return SEAMARK_COLORS[tp];
    const ordered = ['landuse','natural','building','waterway','man_made','leisure','amenity','highway','railway','boundary','place'];
    for (const k of ordered) {
        if (props[k] && GEOJSON_COLORS[`${k}:${props[k]}`]) return GEOJSON_COLORS[`${k}:${props[k]}`];
    }
    return autoColorFromString(JSON.stringify(props).slice(0, 40));
}
function getFillOpacity(props) {
    if (!props) return 0.5;
    const isLand = !!(props.landuse || props.building || props.natural === 'wood' || props.natural === 'sand' || props.natural === 'beach');
    const isWater = props.natural === 'water' || props.waterway;
    if (isWater) return 0.6;
    if (isLand) return 0.35;
    return 0.5;
}