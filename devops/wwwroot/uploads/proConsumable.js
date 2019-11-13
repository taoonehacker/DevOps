var jsonHelper = require('./jsonHelper');

module.exports = function (callback,codeJson,objectIdentifyArray) {
    
    var colorDescription =jsonHelper.getJSONData("1.3.6.1.2.1.43.12.1.1.4.1",objectIdentifyArray);
    var largestAmount =jsonHelper.getJSONData("1.3.6.1.2.1.43.11.1.1.8.1",objectIdentifyArray);
    var remainingAmount =jsonHelper.getJSONData("1.3.6.1.2.1.43.11.1.1.9.1",objectIdentifyArray);
    
    var proCollectionData = function () {
        var fieldValue = {cyan:0,magenta:0,yellow:0,black:0,other:0};
        if(!jsonHelper.isEmptyObject(colorDescription))
        {
            for(var i=0;i<colorDescription.oidValues.length;i++){
                var colorName = colorDescription.oidValues[i].value;
                if(colorName.indexOf('\u0000')>0)
                    colorName = colorName.substr(0,colorName.indexOf('\u0000'));
                var largestAmountValue=parseInt(largestAmount.oidValues[i].value,10);
                var remainingAmountValue=parseInt(remainingAmount.oidValues[i].value,10);
                var value =Math.round((remainingAmountValue/largestAmountValue.toFixed(2)) *100);

                if(colorName.trim().toLowerCase().indexOf("cyan")!==-1)
                    fieldValue.cyan=value;
                else if(colorName.trim().toLowerCase().indexOf("magenta")!==-1)
                    fieldValue.magenta=value;
                else if(colorName.trim().toLowerCase().indexOf("yellow")!==-1)
                    fieldValue.yellow=value;
                else if(colorName.trim().toLowerCase().indexOf("black")!==-1)
                    fieldValue.black=value;
                else if(colorName.trim().toLowerCase().indexOf("other")!==-1)
                    fieldValue.other=value;
                // else
                //     fieldValue[colorName]=value;
            }
        }
        var string = JSON.stringify(fieldValue);
        return {value: string};
    };
    callback(null, proCollectionData());
};