var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KL_Wards_1 = new ol.format.GeoJSON();
var features_KL_Wards_1 = format_KL_Wards_1.readFeatures(json_KL_Wards_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KL_Wards_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KL_Wards_1.addFeatures(features_KL_Wards_1);
var lyr_KL_Wards_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KL_Wards_1, 
                style: style_KL_Wards_1,
                popuplayertitle: "KL_Wards",
                interactive: true,
    title: 'KL_Wards<br />\
    <img src="styles/legend/KL_Wards_1_0.png" /> ALAMPOTTA<br />\
    <img src="styles/legend/KL_Wards_1_1.png" /> ALUMMOODU<br />\
    <img src="styles/legend/KL_Wards_1_2.png" /> AMARAVILA<br />\
    <img src="styles/legend/KL_Wards_1_3.png" /> ARALUMMOODU<br />\
    <img src="styles/legend/KL_Wards_1_4.png" /> ATHAZHAMANGALAM<br />\
    <img src="styles/legend/KL_Wards_1_5.png" /> ATHIYANNOOR<br />\
    <img src="styles/legend/KL_Wards_1_6.png" /> BRAHMAMKODU<br />\
    <img src="styles/legend/KL_Wards_1_7.png" /> CHAIKOTTUKONAM<br />\
    <img src="styles/legend/KL_Wards_1_8.png" /> CHEMMANTHATT<br />\
    <img src="styles/legend/KL_Wards_1_9.png" /> CHUNDAVILA<br />\
    <img src="styles/legend/KL_Wards_1_10.png" /> ELAVANIKKARA<br />\
    <img src="styles/legend/KL_Wards_1_11.png" /> FORT<br />\
    <img src="styles/legend/KL_Wards_1_12.png" /> IRUMPIL<br />\
    <img src="styles/legend/KL_Wards_1_13.png" /> KALATHUVILA<br />\
    <img src="styles/legend/KL_Wards_1_14.png" /> KAVALAKULAM<br />\
    <img src="styles/legend/KL_Wards_1_15.png" /> KOLLAVAMVILA<br />\
    <img src="styles/legend/KL_Wards_1_16.png" /> KOOTTAPPANA<br />\
    <img src="styles/legend/KL_Wards_1_17.png" /> KRISHNAPURAM<br />\
    <img src="styles/legend/KL_Wards_1_18.png" /> KULATHAMAL<br />\
    <img src="styles/legend/KL_Wards_1_19.png" /> MAMPAZHAKKARA<br />\
    <img src="styles/legend/KL_Wards_1_20.png" /> MANALOOR<br />\
    <img src="styles/legend/KL_Wards_1_21.png" /> MARUTHATHOOR<br />\
    <img src="styles/legend/KL_Wards_1_22.png" /> MOONNUKALLINMOODU<br />\
    <img src="styles/legend/KL_Wards_1_23.png" /> MULLARAVILA<br />\
    <img src="styles/legend/KL_Wards_1_24.png" /> MUTTAKKADU<br />\
    <img src="styles/legend/KL_Wards_1_25.png" /> NARAYANAPURAM<br />\
    <img src="styles/legend/KL_Wards_1_26.png" /> NILAMEL<br />\
    <img src="styles/legend/KL_Wards_1_27.png" /> OLATHANNI<br />\
    <img src="styles/legend/KL_Wards_1_28.png" /> OORUTTUKALA<br />\
    <img src="styles/legend/KL_Wards_1_29.png" /> PALLIVILAKAM<br />\
    <img src="styles/legend/KL_Wards_1_30.png" /> PANAGATTUKARI<br />\
    <img src="styles/legend/KL_Wards_1_31.png" /> PERUMPAZHUTHOOR<br />\
    <img src="styles/legend/KL_Wards_1_32.png" /> PIRAYUMMOODU<br />\
    <img src="styles/legend/KL_Wards_1_33.png" /> PLAVILA<br />\
    <img src="styles/legend/KL_Wards_1_34.png" /> PULLAMALA<br />\
    <img src="styles/legend/KL_Wards_1_35.png" /> PUNNAKKADU<br />\
    <img src="styles/legend/KL_Wards_1_36.png" /> PUTHANAMBALAM<br />\
    <img src="styles/legend/KL_Wards_1_37.png" /> RAMESWARAM<br />\
    <img src="styles/legend/KL_Wards_1_38.png" /> THAVARAVILA<br />\
    <img src="styles/legend/KL_Wards_1_39.png" /> THERANNOOR<br />\
    <img src="styles/legend/KL_Wards_1_40.png" /> THOZHUKKAL<br />\
    <img src="styles/legend/KL_Wards_1_41.png" /> TOWN<br />\
    <img src="styles/legend/KL_Wards_1_42.png" /> VADAKODU<br />\
    <img src="styles/legend/KL_Wards_1_43.png" /> VAZHIMUKKU<br />\
    <img src="styles/legend/KL_Wards_1_44.png" /> VAZHUTHOOR<br />\
    <img src="styles/legend/KL_Wards_1_45.png" /> VLANGAMURI<br />\
    <img src="styles/legend/KL_Wards_1_46.png" /> <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_KL_Wards_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_KL_Wards_1];
lyr_KL_Wards_1.set('fieldAliases', {'gml_parent': 'gml_parent', 'gml_pare_1': 'gml_pare_1', 'gml_id': 'gml_id', 'geom': 'geom', 'District': 'District', 'LSGD': 'LSGD', 'Ward_Name': 'Ward_Name', 'Ward_No': 'Ward_No', 'Lsgd_Type': 'Lsgd_Type', 'Created_Da': 'Created_Da', 'Surveyor': 'Surveyor', 'Mob_No': 'Mob_No', 'Remarks': 'Remarks', '_distLsgd': '_distLsgd', 'OBJECTID': 'OBJECTID', '_result': '_result', '_ulid': '_ulid', '_distLsgd2': '_distLsgd2', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_KL_Wards_1.set('fieldImages', {'gml_parent': 'TextEdit', 'gml_pare_1': 'TextEdit', 'gml_id': 'TextEdit', 'geom': 'TextEdit', 'District': 'TextEdit', 'LSGD': 'TextEdit', 'Ward_Name': 'TextEdit', 'Ward_No': 'TextEdit', 'Lsgd_Type': 'TextEdit', 'Created_Da': 'TextEdit', 'Surveyor': 'TextEdit', 'Mob_No': 'TextEdit', 'Remarks': 'TextEdit', '_distLsgd': 'TextEdit', 'OBJECTID': 'TextEdit', '_result': 'TextEdit', '_ulid': 'TextEdit', '_distLsgd2': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_KL_Wards_1.set('fieldLabels', {'gml_parent': 'no label', 'gml_pare_1': 'no label', 'gml_id': 'no label', 'geom': 'no label', 'District': 'inline label - always visible', 'LSGD': 'inline label - always visible', 'Ward_Name': 'inline label - always visible', 'Ward_No': 'inline label - always visible', 'Lsgd_Type': 'no label', 'Created_Da': 'no label', 'Surveyor': 'no label', 'Mob_No': 'no label', 'Remarks': 'no label', '_distLsgd': 'no label', 'OBJECTID': 'no label', '_result': 'no label', '_ulid': 'no label', '_distLsgd2': 'no label', });
lyr_KL_Wards_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});