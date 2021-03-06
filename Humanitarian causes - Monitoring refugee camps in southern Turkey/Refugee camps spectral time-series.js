////// 00_REFUGEE CAMPS SPECTRAL TIME-SERIES \\\\\\
///// ALL GEOMETRIES WERE IMPORTED FROM OSM:
//   ID     
//   1->   Altınözü 1 refugee camp, 	 	          Tepehan, Altınözü, Hatay, Mediterranean Region, Turkey
//   2->   Sarıçam refugee camp, 		              Adana-Şanlıurfa Otoyolu, Cumhuriyet Mh., Buruk, Sarıçam, Adana, Mediterranean Region, Turkey
//   3 ->  Beydağı refugee camp, 		              Malatya-Kahramanmaraş yolu, Duruldu, Yeşilyurt, Malatya, Eastern Anatolia Region, Turkey
//   4 ->  Karkamış refugee camp, 		            Yurtbağı, Karkamış, Gaziantep, Southeastern Anatolia Region, Turkey
//   5 ->  Viranşehir refugee camp, 		          Viranşehir-Ceylanpınar yolu, Ceylanpınar, Şanlıurfa, Southeastern Anatolia Region, Turkey
//   6 ->  Yayladağı 1 refugee camp, 		          Yayladağı, Hatay, Mediterranean Region, Turkey
//   7 ->  Yayladağı 2 refugee camp, 		          Yayladağı, Hatay, Mediterranean Region, Turkey
//   8 ->  Altinozu 2 (Boynuyoğun) refugee camp,  Boşin, Antakya (merkez), Hatay, Mediterranean Region, Turkey
//   9 ->  Nizip 1 refugee camp, 		              Nizip, Gaziantep, Southeastern Anatolia Region, Turkey
//  10 ->  Kahramanmaraş-Merkez refugee camp,	    Dulkadiroğlu, Kahramanmaraş, Mediterranean Region, 46100, Turkey
//  11 ->  Midyat refugee camp, 		              Midyat, Mardin, Southeastern Anatolia Region, Turkey
//  12 ->  Apaydın refugee camp, 		              Demirköprü, Antakya (merkez), Hatay, Mediterranean Region, Turkey
//  13 ->  Nizip 2 refugee camp, 		              Belkis, Nizip, Gaziantep, Southeastern Anatolia Region, Turkey
//  14 ->  İslahiye refugee camp, 		            Kırıkçalı, İslahiye, Gaziantep, Southeastern Anatolia Region, Turkey
//  15 ->  Cevdetiye refugee camp, 		            Mağaraönü, Cevdetiye, Osmaniye (merkez), Osmaniye, Mediterranean Region, Turkey
//  16 ->  Düziçi refugee camp,			              Çitli, Düziçi, Osmaniye, Mediterranean Region, Turkey
//  17 ->  Adıyaman-Merkez refugee camp, 	        mezra, Adıyaman merkez, Adıyaman, Southeastern Anatolia Region, Turkey
//  18 ->  Elbeyli refugee camp, 		              mmahalle ?, Beşiriye, Elbeyli, Kilis, Southeastern Anatolia Region, Turkey
//  19 ->  Öncüpınar refugee camp, 		            Kilis-Suriye yolu, Kilis, Kilis (merkez), Kilis, Southeastern Anatolia Region, Turkey
//  20 ->  Akçakale refugee camp, 		            Gülveren, Akçakale, Şanlıurfa, Southeastern Anatolia Region, Turkey
//  21 ->  Ceylanpınar refugee camp, 	          	Ceylanpınar, Şanlıurfa, Southeastern Anatolia Region, Turkey
//  22 ->  Harran refugee camp, 			            Kökenli, Akçakale, Şanlıurfa, Southeastern Anatolia Region, Turkey

//  PARAMETERS:
///////////////////////////////////////////
var camp = 15;                        ///// -> select the ID above. TENT camps(2, 4, 5, 6, 7, 8, 9, 10, 11, 14, 15, 17, 20, 21) ; CONTAINER camps(3, 12, 13, 16, 18, 19, 22)
var reducer = ee.Reducer.variance();  ///// max(), mean(), median(), min(), mode(), or(), product(), sum(), stdDev()
var sensor = 'L7_L1T_TOA';            /////
var start_date = '2011-01-01';        /////
var end_date = '2014-11-01';          /////
///////////////////////////////////////////
//
// Select an image collection and filter by date and boundary.

var studyarea = ee.FeatureCollection('ft:1JKHpV-f6WwnCHe5zK1bOiFlQsf7XHpJSaE8KkIF8')
                .filterMetadata('OBJECTID', 'equals', 1);

var ref_camps = ee.FeatureCollection('ft:1BUImj3LYs3we9OhqkT0spSnSJ3X0Kkv8JYqf30Z6')
                .filterMetadata('ObjectID', 'equals', camp);
            var ref_camp =  ref_camps.geometry();
             


var rc_point = ref_camp.centroid();
var teste3 = ee.FeatureCollection(rc_point);
////// 00_REFUGEE CAMPS SPECTRAL TIME-SERIES \\\\\\
///// ALL GEOMETRIES WERE IMPORTED FROM OSM:
//   ID     
//   1->   Altınözü 1 refugee camp, 	 	          Tepehan, Altınözü, Hatay, Mediterranean Region, Turkey
//   2->   Sarıçam refugee camp, 		              Adana-Şanlıurfa Otoyolu, Cumhuriyet Mh., Buruk, Sarıçam, Adana, Mediterranean Region, Turkey
//   3 ->  Beydağı refugee camp, 		              Malatya-Kahramanmaraş yolu, Duruldu, Yeşilyurt, Malatya, Eastern Anatolia Region, Turkey
//   4 ->  Karkamış refugee camp, 		            Yurtbağı, Karkamış, Gaziantep, Southeastern Anatolia Region, Turkey
//   5 ->  Viranşehir refugee camp, 		          Viranşehir-Ceylanpınar yolu, Ceylanpınar, Şanlıurfa, Southeastern Anatolia Region, Turkey
//   6 ->  Yayladağı 1 refugee camp, 		          Yayladağı, Hatay, Mediterranean Region, Turkey
//   7 ->  Yayladağı 2 refugee camp, 		          Yayladağı, Hatay, Mediterranean Region, Turkey
//   8 ->  Altinozu 2 (Boynuyoğun) refugee camp,  Boşin, Antakya (merkez), Hatay, Mediterranean Region, Turkey
//   9 ->  Nizip 1 refugee camp, 		              Nizip, Gaziantep, Southeastern Anatolia Region, Turkey
//  10 ->  Kahramanmaraş-Merkez refugee camp,	    Dulkadiroğlu, Kahramanmaraş, Mediterranean Region, 46100, Turkey
//  11 ->  Midyat refugee camp, 		              Midyat, Mardin, Southeastern Anatolia Region, Turkey
//  12 ->  Apaydın refugee camp, 		              Demirköprü, Antakya (merkez), Hatay, Mediterranean Region, Turkey
//  13 ->  Nizip 2 refugee camp, 		              Belkis, Nizip, Gaziantep, Southeastern Anatolia Region, Turkey
//  14 ->  İslahiye refugee camp, 		            Kırıkçalı, İslahiye, Gaziantep, Southeastern Anatolia Region, Turkey
//  15 ->  Cevdetiye refugee camp, 		            Mağaraönü, Cevdetiye, Osmaniye (merkez), Osmaniye, Mediterranean Region, Turkey
//  16 ->  Düziçi refugee camp,			              Çitli, Düziçi, Osmaniye, Mediterranean Region, Turkey
//  17 ->  Adıyaman-Merkez refugee camp, 	        mezra, Adıyaman merkez, Adıyaman, Southeastern Anatolia Region, Turkey
//  18 ->  Elbeyli refugee camp, 		              mmahalle ?, Beşiriye, Elbeyli, Kilis, Southeastern Anatolia Region, Turkey
//  19 ->  Öncüpınar refugee camp, 		            Kilis-Suriye yolu, Kilis, Kilis (merkez), Kilis, Southeastern Anatolia Region, Turkey
//  20 ->  Akçakale refugee camp, 		            Gülveren, Akçakale, Şanlıurfa, Southeastern Anatolia Region, Turkey
//  21 ->  Ceylanpınar refugee camp, 	          	Ceylanpınar, Şanlıurfa, Southeastern Anatolia Region, Turkey
//  22 ->  Harran refugee camp, 			            Kökenli, Akçakale, Şanlıurfa, Southeastern Anatolia Region, Turkey

//  PARAMETERS:
///////////////////////////////////////////
var camp = 15;                        ///// -> select the ID above. TENT camps(2, 4, 5, 6, 7, 8, 9, 10, 11, 14, 15, 17, 20, 21) ; CONTAINER camps(3, 12, 13, 16, 18, 19, 22)
var reducer = ee.Reducer.variance();  ///// max(), mean(), median(), min(), mode(), or(), product(), sum(), stdDev()
var sensor = 'L7_L1T_TOA';            /////
var start_date = '2011-01-01';        /////
var end_date = '2014-11-01';          /////
///////////////////////////////////////////
//
// Select an image collection and filter by date and boundary.

var studyarea = ee.FeatureCollection('ft:1JKHpV-f6WwnCHe5zK1bOiFlQsf7XHpJSaE8KkIF8')
                .filterMetadata('OBJECTID', 'equals', 1);

var ref_camps = ee.FeatureCollection('ft:1BUImj3LYs3we9OhqkT0spSnSJ3X0Kkv8JYqf30Z6')
                .filterMetadata('ObjectID', 'equals', camp);
            var ref_camp =  ref_camps.geometry();
             


var rc_point = ref_camp.centroid();
var teste3 = ee.FeatureCollection(rc_point);

var buffer = function(feature) {
  return feature.buffer(100).bounds();
};

var bufferedSubway = teste3.map(buffer);

Map.centerObject(ref_camp);

////// IMAGE COLLECTION TO EXTRACT DATA \\\\\\
var teste3 = ee.Feature(ref_camp);

var collection = ee.ImageCollection(sensor)
    .filterDate(start_date, end_date)
    .filterBounds(ref_camps)
    .filterMetadata('CLOUD_COVER', 'less_than', 30)
    .select('10', '30')
    ;
    
print(collection);

////// IMAGE COLLECTION TO DISPLAY\\\\\\

var mosaic = ee.ImageCollection('L7_L1T_32DAY_TOA') // -> only to display
    .filterDate('2011-01-01','2014-11-01')
    .filterBounds(ref_camps)
    ;


Map.addLayer(mosaic, {'bands': ['50', '40', '30']}, 'composite', false);


// Apply the quality mosaic operator and define its arguments.
//var mosaic = collection.qualityMosaic('80');

var TimeSeries =
    Chart.image.series(collection, ref_camp, reducer, 30);
print(TimeSeries);

Map.addLayer(ref_camp, {color: 'FF0000'}, 'Refugee Camps');


Map.addLayer(ref_camp, {color: 'FF0000'}, 'Refugee Camps');
