var wms_layers = [];


        var lyr_GoogleMapsRoadmap_0 = new ol.layer.Tile({
            'title': 'Google Maps (Roadmap)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_TectonicLineaments_1 = new ol.format.GeoJSON();
var features_TectonicLineaments_1 = format_TectonicLineaments_1.readFeatures(json_TectonicLineaments_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TectonicLineaments_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TectonicLineaments_1.addFeatures(features_TectonicLineaments_1);
var lyr_TectonicLineaments_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TectonicLineaments_1, 
                style: style_TectonicLineaments_1,
                popuplayertitle: 'Tectonic Lineaments',
                interactive: true,
                title: '<img src="styles/legend/TectonicLineaments_1.png" /> Tectonic Lineaments'
            });
var format_Earthquakes_2 = new ol.format.GeoJSON();
var features_Earthquakes_2 = format_Earthquakes_2.readFeatures(json_Earthquakes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Earthquakes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Earthquakes_2.addFeatures(features_Earthquakes_2);
var lyr_Earthquakes_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Earthquakes_2, 
                style: style_Earthquakes_2,
                popuplayertitle: 'Earthquakes',
                interactive: true,
    title: 'Earthquakes<br />\
    <img src="styles/legend/Earthquakes_2_0.png" /> 3.4 - 4.01<br />\
    <img src="styles/legend/Earthquakes_2_1.png" /> 4.01 - 4.63<br />\
    <img src="styles/legend/Earthquakes_2_2.png" /> 4.63 - 5.24<br />\
    <img src="styles/legend/Earthquakes_2_3.png" /> 5.24 - 5.86<br />\
    <img src="styles/legend/Earthquakes_2_4.png" /> 5.86 - 6.47<br />\
    <img src="styles/legend/Earthquakes_2_5.png" /> 6.47 - 7.09<br />\
    <img src="styles/legend/Earthquakes_2_6.png" /> 7.09 - 7.7<br />' });

lyr_GoogleMapsRoadmap_0.setVisible(true);lyr_TectonicLineaments_1.setVisible(true);lyr_Earthquakes_2.setVisible(true);
var layersList = [lyr_GoogleMapsRoadmap_0,lyr_TectonicLineaments_1,lyr_Earthquakes_2];
lyr_TectonicLineaments_1.set('fieldAliases', {'ID': 'ID', 'CODE': 'CODE', 'NAME': 'NAME', 'SEGMENT': 'SEGMENT', 'TYPE_DESCR': 'TYPE_DESCR', });
lyr_Earthquakes_2.set('fieldAliases', {'id': 'id', 'mag': 'mag', 'place': 'place', 'time': 'time', 'updated': 'updated', 'tz': 'tz', 'url': 'url', 'detail': 'detail', 'felt': 'felt', 'cdi': 'cdi', 'mmi': 'mmi', 'alert': 'alert', 'status': 'status', 'tsunami': 'tsunami', 'sig': 'sig', 'net': 'net', 'code': 'code', 'ids': 'ids', 'sources': 'sources', 'types': 'types', 'nst': 'nst', 'dmin': 'dmin', 'rms': 'rms', 'gap': 'gap', 'magType': 'magType', 'type': 'type', 'title': 'title', });
lyr_TectonicLineaments_1.set('fieldImages', {'ID': 'TextEdit', 'CODE': 'TextEdit', 'NAME': 'TextEdit', 'SEGMENT': 'TextEdit', 'TYPE_DESCR': 'TextEdit', });
lyr_Earthquakes_2.set('fieldImages', {'id': 'TextEdit', 'mag': 'TextEdit', 'place': 'TextEdit', 'time': 'TextEdit', 'updated': 'TextEdit', 'tz': 'TextEdit', 'url': 'TextEdit', 'detail': 'TextEdit', 'felt': 'Range', 'cdi': 'TextEdit', 'mmi': 'TextEdit', 'alert': 'TextEdit', 'status': 'TextEdit', 'tsunami': 'Range', 'sig': 'Range', 'net': 'TextEdit', 'code': 'TextEdit', 'ids': 'TextEdit', 'sources': 'TextEdit', 'types': 'TextEdit', 'nst': 'Range', 'dmin': 'TextEdit', 'rms': 'TextEdit', 'gap': 'Range', 'magType': 'TextEdit', 'type': 'TextEdit', 'title': 'TextEdit', });
lyr_TectonicLineaments_1.set('fieldLabels', {'ID': 'no label', 'CODE': 'no label', 'NAME': 'no label', 'SEGMENT': 'no label', 'TYPE_DESCR': 'no label', });
lyr_Earthquakes_2.set('fieldLabels', {'id': 'no label', 'mag': 'no label', 'place': 'no label', 'time': 'no label', 'updated': 'no label', 'tz': 'no label', 'url': 'no label', 'detail': 'no label', 'felt': 'no label', 'cdi': 'no label', 'mmi': 'no label', 'alert': 'no label', 'status': 'no label', 'tsunami': 'no label', 'sig': 'no label', 'net': 'no label', 'code': 'no label', 'ids': 'no label', 'sources': 'no label', 'types': 'no label', 'nst': 'no label', 'dmin': 'no label', 'rms': 'no label', 'gap': 'no label', 'magType': 'no label', 'type': 'no label', 'title': 'no label', });
lyr_Earthquakes_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});