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
            if(json[i].key===key)
                return json[i];
        }
    }
    return undefined;
}

function getJSONBaseValue(value, json){
    if(json!==undefined)
    {
        for(var i=0;i<json.length;i++){
            if(json[i].value===value)
                return json[i];
        }
    }
    return undefined;
}

function isEmptyObject(obj){
    for(var key in obj){
        return false;
        break;
    };
    return true;
}

module.exports = {
    getJSONData,
    getJSONValue,
    getJSONBaseValue,
    isEmptyObject
};