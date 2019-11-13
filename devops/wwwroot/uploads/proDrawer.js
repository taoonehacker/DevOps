// 设备描述处理程序
module.exports = function (callback,codeJson,objectIdentifyArray) {
    
    var drawerDescription =getJSONData("1.3.6.1.2.1.43.8.2.1.18",objectIdentifyArray);
    var largestAmount =getJSONData("1.3.6.1.2.1.43.8.2.1.9",objectIdentifyArray);
    var remainingAmount =getJSONData("1.3.6.1.2.1.43.8.2.1.10",objectIdentifyArray);
    
    var proCollectionData = function () {
        var fieldValue ={tray1:0,tray2:0,tray3:0};
        for(var i=0;i<drawerDescription.oidValues.length;i++){
            var drawerName = drawerDescription.oidValues[i].value;
            var largestAmountValue=parseInt(largestAmount.oidValues[i].value,10);
            var remainingAmountValue=parseInt(remainingAmount.oidValues[i].value,10);
            var value =Math.round((remainingAmountValue/largestAmountValue.toFixed(2)) *100);
            fieldValue[drawerName] =value;
            if(drawerName.trim().toLowerCase().indexOf("tray 1")!==-1)
                fieldValue.tray1=value;
            else if(drawerName.trim().toLowerCase().indexOf("tray 2")!==-1)
                fieldValue.tray2=value;
            else if(drawerName.trim().toLowerCase().indexOf("tray 3")!==-1)
                fieldValue.tray3=value;
            // else
            //     fieldValue[drawerName]=value;
        }
        var string = JSON.stringify(fieldValue);
        return {value: string};
    };

    callback(null, proCollectionData());

    function getJSONData(key, json){
        for(var i=0;i<json.length;i++){
            if(json[i].oid==key)
                return json[i];
        }
    }
    
};