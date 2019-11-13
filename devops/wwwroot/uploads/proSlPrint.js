var jsonHelper = require('./jsonHelper');

// codeJson = [{
//     "oid":"1.3.6.1.2.1.43.10.2.1.4.1.1",
//     "oidValues": [
//         {
//             "key": "1.3.6.1.2.1.43.10.2.1.4.1.1",
//             "value":"100"
//         }]
// },{
//     "oid":"1.3.6.1.4.1.253.8.53.13.2.1.6.1.20.33",
//     "oidValues": [
//         {
//             "key": "1.3.6.1.4.1.253.8.53.13.2.1.6.1.20.33",
//             "value":"8"
//         }]
// },{
//     "oid":"1.3.6.1.4.1.253.8.53.13.2.1.6.1.20.34",
//     "oidValues": [
//         {
//             "key": "1.3.6.1.4.1.253.8.53.13.2.1.6.1.20.34",
//             "value":"42"
//         }
//     ]
// }];
//
//
// var totalPages =jsonHelper.getJSONData("1.3.6.1.2.1.43.10.2.1.4.1.1",codeJson);
// var monoPages =jsonHelper.getJSONData("1.3.6.1.4.1.253.8.53.13.2.1.6.1.20.33",codeJson);
// var colourPages =jsonHelper.getJSONData("1.3.6.1.4.1.253.8.53.13.2.1.6.1.20.34",codeJson);
//
//
//
// var totalPage = 0;
// var monoPage=0;
// var colourPage=0;
//
// totalPage=parseInt(totalPages.oidValues[0].value,10);
// monoPage=parseInt(monoPages.oidValues[0].value,10);
// colourPage=parseInt(colourPages.oidValues[0].value,10);
//
//
//
//
// console.log(totalPage);
// console.log(monoPage);
// console.log(colourPage);


module.exports = function (callback,codeJson,objectIdentifyArray) {
    
    var proCollectionData = function (objectIdentifyArray) {

        var fieldValue ={bwVolume:0,colorVolume:0,a3Volume:0,a4Volume:0,totalVolume:0};
        
        var totalPages =jsonHelper.getJSONData("1.3.6.1.2.1.43.10.2.1.4.1.1",objectIdentifyArray);
        var colourPages =jsonHelper.getJSONData("1.3.6.1.4.1.253.8.53.13.2.1.6.1.20.33",objectIdentifyArray);
        var monoPages =jsonHelper.getJSONData("1.3.6.1.4.1.253.8.53.13.2.1.6.1.20.34",objectIdentifyArray);

        var totalPage = 0;
        var monoPage=0;
        var colourPage=0;

        totalPage=parseInt(totalPages.oidValues[0].value);
        monoPage=parseInt(monoPages.oidValues[0].value);
        colourPage=parseInt(colourPages.oidValues[0].value);
        
        fieldValue.bwVolume=monoPage;
        fieldValue.colorVolume=colourPage;
        fieldValue.totalVolume = totalPage;
        var string = JSON.stringify(fieldValue);
        return {value: string};
    };
    
    callback(null, proCollectionData(objectIdentifyArray));
};