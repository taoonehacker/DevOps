var jsonHelper = require('./jsonHelper');

module.exports = function (callback,codeJson,objectIdentifyArray) {

    
    var proCollectionData = function (objectIdentifyArray) {
        
        var fieldValue ={bwVolume:0,colorVolume:0,a3Volume:0,a4Volume:0,totalVolume:0};

        var totalPages =jsonHelper.getJSONData("1.3.6.1.2.1.43.10.2.1.4.1.1",objectIdentifyArray);
        var monoPages =jsonHelper.getJSONData("1.3.6.1.4.1.11.2.3.9.4.2.1.4.1.2.6.0",objectIdentifyArray);
        var colourPages =jsonHelper.getJSONData("1.3.6.1.4.1.11.2.3.9.4.2.1.4.1.2.7.0",objectIdentifyArray);

        var totalPage = 0;
        var monoPage=0;
        var colourPage=0;
        
        totalPage=parseInt(totalPages.oidValues[0].value,10);
        monoPage=parseInt(monoPages.oidValues[0].value,10);
        if(!jsonHelper.isEmptyObject(colourPages)) {
            colourPage=parseInt(colourPages.oidValues[0].value,10);
        }
        
        fieldValue.bwVolume=monoPage;
        fieldValue.colorVolume=colourPage;
        fieldValue.totalVolume = totalPage;
        
        var string = JSON.stringify(fieldValue);
        return {value: string};
    };
    
    callback(null, proCollectionData(objectIdentifyArray));
    
    function getJSONData(key, json){
        for(var i=0;i<json.length;i++){
            if(json[i].oid===key)
                return json[i];
        }
    }

    function getJSONValue(key, json){
        if(json!==undefined)
        {
            for(var i=0;i<json.length;i++){
                if(json[i].key==key)
                    return json[i];
            }
        }
        return undefined;
    }
};