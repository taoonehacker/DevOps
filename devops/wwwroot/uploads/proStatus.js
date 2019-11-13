var common = require('./common.js');
var jsonHelper = require('./jsonHelper');



// var json =[
//         {
//             "oid":"1.3.6.1.2.1.25.3.5.1.1.1",
//             "oidValues":[{"key":"1.3.6.1.2.1.25.3.5.1.1.1","value":"1","type":"2"}]
//         },
//
//             {
//                 "oid":"1.3.6.1.2.1.25.3.5.1.2.1",
//                 "oidValues":[{"key":"1.3.6.1.2.1.25.3.5.1.2.1","value":"00","Type":"4"}]
//             },
//
//             {
//                 "oid":"1.3.6.1.2.1.43.18.1.1",
//                 "oidValues":
//                     [{"key":"1.3.6.1.2.1.43.18.1.1.2.1.55","value":"1","type":"2"},
//                         {"key":"1.3.6.1.2.1.43.18.1.1.3.1.55","value":"3","type":"2"},
//                         {"key":"1.3.6.1.2.1.43.18.1.1.4.1.55","value":"5","type":"2"},
//                         {"key":"1.3.6.1.2.1.43.18.1.1.5.1.55","value":"-1","type":"2"},
//                         {"key":"1.3.6.1.2.1.43.18.1.1.6.1.55","value":"35078","type":"2"},
//                         {"key":"1.3.6.1.2.1.43.18.1.1.7.1.55","value":"23","type":"2"},
//                         {"key":"1.3.6.1.2.1.43.18.1.1.8.1.55","value":"E5 90 AF E7 94 A8 E7 9D A1 E7 9C A0 E6 A8 A1 E5 BC 8F","type":"4"},
//                         {"key":"1.3.6.1.2.1.43.18.1.1.9.1.55","value":"0","type":"2"}]},
//
//     {
//         "oid": "1.3.6.1.2.1.2.2.1.6.2",
//         "oidValues": [{"key": "1.3.6.1.2.1.2.2.1.6.2", "value": "B0 5A DA C0 B3 3E", "type": "4"}]
//     }
// ];
//
//
// var statusCode =jsonHelper.getJSONData("1.3.6.1.2.1.25.3.5.1.1.1",json);
// var errorCode =jsonHelper.getJSONData("1.3.6.1.2.1.25.3.5.1.2.1",json);
// var alarmCode =jsonHelper.getJSONData("1.3.6.1.2.1.43.18.1.1",json);
//
// var statusValue=0,errorValue=0;
//
// console.log(jsonHelper.isEmptyObject(statusCode));
//
// if(!jsonHelper.isEmptyObject(statusCode)) {
//     statusValue = parseInt(statusCode.oidValues[0].value);
// }
//
// if(!jsonHelper.isEmptyObject(errorCode)) {
//         errorValue = parseInt(errorCode.oidValues[0].value,16);
// }
//
//
// console.log(common.getDeviceStatus(statusValue,errorValue,alarmCode));



module.exports = function (callback,codeJson,objectIdentifyArray) {
    
    var statusCode =jsonHelper.getJSONData("1.3.6.1.2.1.25.3.5.1.1.1",objectIdentifyArray);
    var errorCode =jsonHelper.getJSONData("1.3.6.1.2.1.25.3.5.1.2.1",objectIdentifyArray);
    var alarmCode =jsonHelper.getJSONData("1.3.6.1.2.1.43.18.1.1",objectIdentifyArray);
    
    var proCollectionData = function () {
        
        var statusValue=0,errorValue=0;

        if(!jsonHelper.isEmptyObject(statusCode)) {
            statusValue = parseInt(statusCode.oidValues[0].value);
        }

        if(!jsonHelper.isEmptyObject(errorCode)) {

            if(statusValue===1&&errorCode.oidValues[0].value.toLowerCase()==="0x81"){
                
                var result ={};
                result.status=3;
                result.code=errorCode.oidValues[0].value.toLowerCase();
                result.description="纸盒拉出/缺纸";
                var str = JSON.stringify(result);
                return {value: str};
            }
            
            switch (parseInt(errorCode.oidValues[0].type)) {
                case 2:
                    errorValue = parseInt(errorCode.oidValues[0].value);
                case 4:
                    errorValue = parseInt(errorCode.oidValues[0].value,16);
                    break;
            }
        }
        
        
        
        
        var status = common.getDeviceStatus(statusValue,errorValue,alarmCode);
        var string = JSON.stringify(status);
        return {value: string};
    };
    
    callback(null, proCollectionData());


};