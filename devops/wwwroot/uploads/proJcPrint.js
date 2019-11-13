var jsonHelper = require('./jsonHelper');

// codeJson = [{
//     "oid":"1.3.6.1.4.1.1347.42.2.1.1.1.6.1.1",
//     "oidValues": [
//         {
//             "key": "1.3.6.1.4.1.1347.42.2.1.1.1.6.1.1",
//             "value":"50"
//         },{
//             "key": "1.3.6.1.4.1.1347.42.2.1.1.1.6.1.2",
//             "value":"0"
//         },{
//             "key": "1.3.6.1.4.1.1347.42.2.1.1.1.6.1.3",
//             "value":"232"
//         },{
//             "key": "1.3.6.1.4.1.1347.42.2.1.1.1.6.1.4",
//             "value":"0"
//         },{
//             "key": "1.3.6.1.4.1.1347.42.2.1.1.1.6.1.5",
//             "value":"0"
//         },{
//             "key": "1.3.6.1.4.1.1347.42.2.1.1.1.6.1.6",
//             "value":"0"
//         },{
//             "key": "1.3.6.1.4.1.1347.42.2.1.1.1.6.1.7",
//             "value":"0"
//         },{
//             "key": "1.3.6.1.4.1.1347.42.2.1.1.1.6.1.8",
//             "value":"0"
//         },{
//             "key": "1.3.6.1.4.1.1347.42.2.1.1.1.6.1.9",
//             "value":"0"
//         },{
//             "key": "1.3.6.1.4.1.1347.42.2.1.1.1.6.1.10",
//             "value":"0"
//         },{
//             "key": "1.3.6.1.4.1.1347.42.2.1.1.1.6.1.11",
//             "value":"0"
//         },{
//             "key": "1.3.6.1.4.1.1347.42.2.1.1.1.6.1.12",
//             "value":"0"
//         }]
// },{
//     "oid":"1.3.6.1.4.1.1347.42.2.1.1.1.7.1.1",
//     "oidValues": [
//         {
//             "key": "1.3.6.1.4.1.1347.42.2.1.1.1.7.1.1",
//             "value":"8"
//         },{
//             "key": "1.3.6.1.4.1.1347.42.2.1.1.1.7.1.2",
//             "value":"0"
//         },{
//             "key": "1.3.6.1.4.1.1347.42.2.1.1.1.7.1.3",
//             "value":"24"
//         },{
//             "key": "1.3.6.1.4.1.1347.42.2.1.1.1.7.1.4",
//             "value":"0"
//         },{
//             "key": "1.3.6.1.4.1.1347.42.2.1.1.1.7.1.5",
//             "value":"0"
//         },{
//             "key": "1.3.6.1.4.1.1347.42.2.1.1.1.7.1.6",
//             "value":"0"
//         },{
//             "key": "1.3.6.1.4.1.1347.42.2.1.1.1.7.1.7",
//             "value":"0"
//         },{
//             "key": "1.3.6.1.4.1.1347.42.2.1.1.1.7.1.8",
//             "value":"0"
//         },{
//             "key": "1.3.6.1.4.1.1347.42.2.1.1.1.7.1.9",
//             "value":"0"
//         },{
//             "key": "1.3.6.1.4.1.1347.42.2.1.1.1.7.1.10",
//             "value":"0"
//         },{
//             "key": "1.3.6.1.4.1.1347.42.2.1.1.1.7.1.11",
//             "value":"0"
//         },{
//             "key": "1.3.6.1.4.1.1347.42.2.1.1.1.7.1.12",
//             "value":"0"
//         }]
// },{
//     "oid":"1.3.6.1.4.1.1347.42.2.1.1.1.8.1.1",
//     "oidValues": [
//         {
//             "key": "1.3.6.1.4.1.1347.42.2.1.1.1.8.1.1",
//             "value":"42"
//         },{
//             "key": "1.3.6.1.4.1.1347.42.2.1.1.1.8.1.2",
//             "value":"0"
//         },{
//             "key": "1.3.6.1.4.1.1347.42.2.1.1.1.8.1.3",
//             "value":"208"
//         },{
//             "key": "1.3.6.1.4.1.1347.42.2.1.1.1.8.1.4",
//             "value":"0"
//         },{
//             "key": "1.3.6.1.4.1.1347.42.2.1.1.1.8.1.5",
//             "value":"0"
//         },{
//             "key": "1.3.6.1.4.1.1347.42.2.1.1.1.8.1.6",
//             "value":"0"
//         },{
//             "key": "1.3.6.1.4.1.1347.42.2.1.1.1.8.1.7",
//             "value":"0"
//         },{
//             "key": "1.3.6.1.4.1.1347.42.2.1.1.1.8.1.8",
//             "value":"0"
//         },{
//             "key": "1.3.6.1.4.1.1347.42.2.1.1.1.8.1.9",
//             "value":"0"
//         },{
//             "key": "1.3.6.1.4.1.1347.42.2.1.1.1.8.1.10",
//             "value":"0"
//         },{
//             "key": "1.3.6.1.4.1.1347.42.2.1.1.1.8.1.11",
//             "value":"0"
//         },{
//             "key": "1.3.6.1.4.1.1347.42.2.1.1.1.8.1.12",
//             "value":"0"
//         }
//     ]
// }];
//
//
//
// var totalPages =jsonHelper.getJSONData("1.3.6.1.4.1.1347.42.2.1.1.1.6.1.1",codeJson);
// var monoPages =jsonHelper.getJSONData("1.3.6.1.4.1.1347.42.2.1.1.1.7.1.1",codeJson);
// var colourPages =jsonHelper.getJSONData("1.3.6.1.4.1.1347.42.2.1.1.1.8.1.1",codeJson);
//
//
//
// var totalPage = 0;
// var monoPage=0;
// var colourPage=0;
//
// var a3Volume=0;
//
// var a4Volume=0;
//
// for(var i=0;i<totalPages.oidValues.length;i++){
//     totalPage+=parseInt(totalPages.oidValues[i].value,10);
//     if(i===0)
//         a3Volume=parseInt(totalPages.oidValues[i].value,10);
//     if(i===2)
//         a4Volume=parseInt(totalPages.oidValues[i].value,10);
// }
//
// for(var j=0;j<monoPages.oidValues.length;j++){
//     monoPage+=parseInt(monoPages.oidValues[j].value,10);
// }
//
// for(var k=0;k<colourPages.oidValues.length;k++){
//     colourPage+=parseInt(colourPages.oidValues[k].value,10);
// }
//
//
// console.log(totalPage);
// console.log(monoPage);
// console.log(colourPage);
//
// console.log(a3Volume);
// console.log(a4Volume);





module.exports = function (callback,codeJson,objectIdentifyArray) {
    
    var proCollectionData = function (objectIdentifyArray) {

        var totalPages = jsonHelper.getJSONData("1.3.6.1.4.1.1347.42.2.1.1.1.6.1",objectIdentifyArray);
        var monoPages =  jsonHelper.getJSONData("1.3.6.1.4.1.1347.42.2.1.1.1.7.1",objectIdentifyArray);
        var colourPages =jsonHelper.getJSONData("1.3.6.1.4.1.1347.42.2.1.1.1.8.1",objectIdentifyArray);

        var totalPage = 0;
        var monoPage=0;
        var colourPage=0;
        
        var fieldValue ={bwVolume:0,colorVolume:0,a3Volume:0,a4Volume:0,totalVolume:0};
        
        
        for(var i=0;i<totalPages.oidValues.length;i++){
            totalPage+=parseInt(totalPages.oidValues[i].value);
            if(i===0)
                fieldValue.a3Volume=parseInt(totalPages.oidValues[i].value);
            if(i===2)
                fieldValue.a4Volume=parseInt(totalPages.oidValues[i].value);
        }

        for(var j=0;j<monoPages.oidValues.length;j++){
            monoPage+=parseInt(monoPages.oidValues[j].value);
        }

        if(!jsonHelper.isEmptyObject(colourPages)){
            for(var k=0;k<colourPages.oidValues.length;k++){
                colourPage+=parseInt(colourPages.oidValues[k].value);
            }
        }
        
        fieldValue.bwVolume=monoPage;
        fieldValue.colorVolume=colourPage;
        fieldValue.totalVolume = totalPage;
        
        var string = JSON.stringify(fieldValue);
        return {value: string};
    };
    
    callback(null, proCollectionData(objectIdentifyArray));
};