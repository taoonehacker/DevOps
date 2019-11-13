var common = require('./common.js');
var jsonHelper = require('./jsonHelper');

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

            if(statusValue===1&&errorCode.oidValues[0].value.toLowerCase()==="0b"){

                var result ={};
                result.status=3;
                result.code="0b";
                result.description="纸盒拉出";
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