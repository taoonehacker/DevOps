var jsonHelper = require('./jsonHelper');

function add(key,value){
    this.dataStore[key]=value;
}

function show(){
    for(var key in this.dataStore){
        console.log(key+":"+this.dataStore[key]);
    }
}

function find(key){
    return this.dataStore[key];
}
function remove(key){
    delete this.dataStore[key];
}

function count(){
    var n = 0;
    for(var key in Object.keys(this.dataStore)){
        ++n;
    }
    return n;
}

function kSort(){
    var dic = this.dataStore;
    var res = Object.keys(dic).sort();
    for(var key in res){
        console.log(res[key]+":"+dic[res[key]]);
    }
}

function vSort(){
    var dic = this.dataStore;
    var res = Object.keys(dic).sort(function(a,b){
        return dic[a]-dic[b];
    });
    
    for(var key in res){
        console.log(res[key]+":"+dic[res[key]]);
    }
}

function clear(){
    for(var key in this.dataStore){
        delete this.dataStore[key];
    }
}

function setDataStore(dataStore){
    this.dataStore=dataStore;
}

function Dictionary(){
    this.dataStore = []; // 定义一个数组，保存字典元素
    this.add = add;               // 添加字典内容(key:value)
    this.show = show;             // 显示字典中的键值
    this.find = find;             // 根据键(key)查找并返回对应的值(value)
    this.remove = remove;         // 删掉相对应的键值
    this.count = count;           // 计算字典中的元素的个数
    this.kSort = kSort;           // 按键(key)排序
    this.vSort = vSort;           // 按值(value)排序
    this.clear = clear;           // 清空字典内容
    this.setDataStore = setDataStore;
}

var alarmLevel={
  Other:1,
  Critical:3,
  Warn:4  
};

var deviceStatus={
    Normal:1,
    Alarm:2,
    Fault:3,
    Offline:4
};

//common device status code
var statusCode={
    Other:1,
    Unkown:2,
    Idle:3,
    Printing:4,
    Warmup:5,
    Wakeup:101,
    Hibernation:102,// 休眠
    Error:201,//错误：warn，fatal
    Offline:256  // 获取不到反馈包，这个是自定义的
};

function getStatusDescription(){
    var dic = new Dictionary();
    dic.add(statusCode.Other,"其他");
    dic.add(statusCode.Unkown,"未知");
    dic.add(statusCode.Idle,"设备就绪");
    dic.add(statusCode.Printing,"正在打印");
    dic.add(statusCode.Warmup,"正在预热");
    dic.add(statusCode.Wakeup,"唤醒");
    dic.add(statusCode.Hibernation,"休眠");
    dic.add(statusCode.Error,"错误");
    dic.add(statusCode.Offline,"离线");
    return dic;
}

//common device error code
var   errorCode = {
    ServiceRequested:0x01,
    Offline:0x02,
    Jammed:0x04,
    DoorOpen:0x08,
    NoToner:0x10,
    LowToner:0x20,
    NoPaper:0x40,
    LowPaper:0x80,
    OverduePreventMaint:0x0100,
    InputTrayEmpty:0x0200,
    OutputFull:0x0400,
    OutputNearFull:0x0800,
    MarkerSupplyMissing:0x1000,
    OutputTrayMissing:0x2000,
    InputTrayMissing:0x4000
};


function getErrorDescription(){
    var dic = new Dictionary();
    dic.add(errorCode.ServiceRequested,"需要服务");
    dic.add(errorCode.Offline,"离线");
    dic.add(errorCode.Jammed,"卡纸");
    dic.add(errorCode.DoorOpen,"舱门打开");
    dic.add(errorCode.NoToner,"墨粉已用完");
    dic.add(errorCode.LowToner,"低墨粉");
    dic.add(errorCode.NoPaper,"没纸");
    dic.add(errorCode.LowPaper,"纸盒拉出/缺纸");
    dic.add(errorCode.OverduePreventMaint,"过期的预防性维护");
    dic.add(errorCode.InputTrayEmpty,"进纸盒空");
    dic.add(errorCode.OutputFull,"出纸盒满");
    dic.add(errorCode.OutputNearFull,"出纸盒将满");
    dic.add(errorCode.MarkerSupplyMissing,"供粉设备缺失");
    dic.add(errorCode.OutputTrayMissing,"出纸盒缺失");
    dic.add(errorCode.InputTrayMissing,"进纸盒缺失");
    return dic;
}


//common device alert code
var alarmCode={
    other:1,
    unknown:2,
    coverOpen:3,
    coverClosed:4,
    interlockOpen:5,
    interlockClosed:6,
    configurationChange:7,
    jam:8,
    subunitMissing:9,
    subunitAlmostEmpty:12,
    subunitEmpty:13,
    subunitPowerSaver:23,
    dooropen:501,
    doorClosed:502,
    powerUp:503,
    powerDown:504,
    inputMediaTrayMissing:801,
    inputMediaSizeChange:802,
    inputMediaWeightChange:803,
    inputMediaTypeChange:804,
    inputMediaColorCHange:805,
    inputMediaFormPartsChange:806,
    inputMediaSupplyLow:807,
    inputMediaSupplyEMpty:808,
    outputMediaTrayMissing:901,
    outputMediaTrayAlmostFull:902,
    outputMediaTrayFull:903,
    markerFuserUnderTemperature:1001,
    markerFuserOverTemperature:1002,
    markerTonerEmpty:1101,
    markerInkEmpty:1102,
    markerPrintRibbonEmpty:1103,
    markerTonerAlmostEmpty:1104,
    markerInkAlmostEmpty:1105,
    markerPrintRibbonAlmsotEmpty:1106,
    markerWasteTonerReceptacleAlmostFull:1107,
    markerWasteInkReceptacleAlmostFull:1108,
    markerWasteTonerRecepatcleFull:1109,
    markerWasteInkReceptacleFull:1110,// 这个原文档是1101，但是与前面的冲突。暂时修改为1110。 2015-12-01
    markerOpcLifeAlmostOver:1111,
    markerOpcLifeOver:1112,
    markerDeveloperAlmostEmpty:1113,
    markerDeveloperEmpty:1114,
    mediaPathMediaTrayMissing:1301,
    mediaPathMediatrayAlmostFull:1302,
    mediaPathMediatrayFull:1303,
    interpreterMemoryincrease:1501,
    interpretermemoryDecrease:1502,
    interpreterCartridgeAddedd:1503,
    interpretercartridgeDeleted:1504,
    interpreterResourceAdded:1505,
    interpreterResourceDeleted:1506
};

//common deivce alarm description
function getAlarmDescription(){
    var dic = new Dictionary();
    dic.add(alarmCode.other,"其他");
    dic.add(alarmCode.unknown,"未知");
    dic.add(alarmCode.coverOpen,"盖子打开");
    dic.add(alarmCode.coverClosed,"盖子关闭");
    dic.add(alarmCode.interlockOpen,"内部锁打开");
    dic.add(alarmCode.configurationChange,"配置改变");
    dic.add(alarmCode.jam,"卡纸");
    dic.add(alarmCode.subunitMissing,"subunitMissing");
    dic.add(alarmCode.subunitAlmostEmpty,"subunitAlmostEmpty");
    dic.add(alarmCode.subunitEmpty,"subunitEmpty");
    dic.add(alarmCode.subunitPowerSaver,"subunitPowerSaver");
    dic.add(alarmCode.dooropen,"舱门打开");
    dic.add(alarmCode.doorClosed,"舱门关闭");
    dic.add(alarmCode.powerUp,"开机");
    dic.add(alarmCode.powerDown,"关机");
    dic.add(alarmCode.inputMediaTrayMissing,"inputMediaTrayMissing");
    dic.add(alarmCode.inputMediaSizeChange,"inputMediaSizeChange");
    dic.add(alarmCode.inputMediaWeightChange,"inputMediaWeightChange");
    dic.add(alarmCode.inputMediaTypeChange,"inputMediaTypeChange");
    dic.add(alarmCode.inputMediaColorCHange,"inputMediaColorCHange");
    dic.add(alarmCode.inputMediaFormPartsChange,"inputMediaFormPartsChange");


    dic.add(alarmCode.inputMediaSupplyLow,"inputMediaSupplyLow");
    dic.add(alarmCode.inputMediaSupplyEMpty,"inputMediaSupplyEMpty");
    dic.add(alarmCode.outputMediaTrayMissing,"outputMediaTrayMissing");
    dic.add(alarmCode.outputMediaTrayAlmostFull,"outputMediaTrayAlmostFull");
    dic.add(alarmCode.outputMediaTrayFull,"outputMediaTrayFull");
    dic.add(alarmCode.markerFuserUnderTemperature,"markerFuserUnderTemperature");


    dic.add(alarmCode.markerFuserOverTemperature,"markerFuserOverTemperature");
    dic.add(alarmCode.markerTonerEmpty,"墨粉不足");
    dic.add(alarmCode.markerInkEmpty,"墨粉/墨水不足");
    dic.add(alarmCode.markerPrintRibbonEmpty,"色带不足");
    dic.add(alarmCode.markerTonerAlmostEmpty,"墨粉将不足");
    dic.add(alarmCode.markerPrintRibbonAlmsotEmpty,"色带不足");

    dic.add(alarmCode.markerWasteTonerReceptacleAlmostFull,"废粉盒将满");
    dic.add(alarmCode.markerWasteTonerRecepatcleFull,"废粉盒已满");
    dic.add(alarmCode.markerWasteInkReceptacleFull,"废粉盒已满");
    dic.add(alarmCode.markerOpcLifeAlmostOver,"需更换OPC");
    dic.add(alarmCode.markerOpcLifeOver,"需更换OPC");

    dic.add(alarmCode.markerDeveloperAlmostEmpty,"markerDeveloperAlmostEmpty 1113");
    dic.add(alarmCode.markerDeveloperEmpty,"markerDeveloperEmpty 1114");
    dic.add(alarmCode.mediaPathMediaTrayMissing,"mediaPathMediaTrayMissing 1301");
    dic.add(alarmCode.mediaPathMediatrayAlmostFull,"mediaPathMediatrayAlmostFull 1302");
    dic.add(alarmCode.mediaPathMediatrayFull,"mediaPathMediatrayFull 1303");
    dic.add(alarmCode.interpreterMemoryincrease,"interpreterMemoryincrease 1501");

    dic.add(alarmCode.interpretermemoryDecrease,"interpretermemoryDecrease 1502");
    dic.add(alarmCode.interpreterCartridgeAddedd,"interpreterCartridgeAddedd 1503");
    dic.add(alarmCode.interpretercartridgeDeleted,"interpretercartridgeDeleted 1504");
    dic.add(alarmCode.interpreterResourceAdded,"interpreterResourceAdded 1505");
    dic.add(alarmCode.interpreterResourceDeleted,"interpreterResourceDeleted 1505");
    
    return dic;
};

function getStatusCode(){
    var dic = new Dictionary();
    dic.setDataStore(statusCode);
    return dic;
}


function getErrorCode(){
    var dic = new Dictionary();
    dic.setDataStore(errorCode);
    return dic;
}

function getAlarmCode(){
    var dic = new Dictionary();
    dic.setDataStore(alarmCode);
    return dic;
}



var deviceStatusDescription =getStatusDescription();
var deviceErrorDescription =getErrorDescription();
var deviceAlarmDescription =getAlarmDescription();

var deviceStatusDic = getStatusCode();
var deviceErrorDic = getErrorCode();
var deviceAlarmDic = getAlarmCode();

var alarmCount=0;
var errorCount=0;

var status ={status:deviceStatus.Normal,description:"设备正常"};

function getDeviceStatusBy(currentStatusValue){
    
    switch (parseInt(currentStatusValue)) {
        
        case statusCode.Printing:
        case statusCode.Warmup:
        case statusCode.Hibernation:
            status.status=deviceStatus.Normal;
            status.description = deviceStatusDescription.find(currentStatusValue);
            break;
        case statusCode.Idle:
        case statusCode.Other:
        case statusCode.Unkown:
        case statusCode.Error:
            status.status=deviceStatus.Alarm;
            status.description = deviceStatusDescription.find(currentStatusValue);
            break;
            
    }
}

function getDeviceErrorBy(currentErrorValue){
    
    // if(parseInt(currentErrorCode,16) & parseInt(errorCode.ServiceRequested) >0)
    //     errorCount++;
    // if(parseInt(currentErrorCode,16) & parseInt(errorCode.Offline) >0)
    //     errorCount++;

    // alarmCount=0;
    // errorCount=0;
    
    if(parseInt(currentErrorValue)===0)
    {
        status.status=deviceStatus.Normal;
        status.description="设备就绪";
    }
    else{
        if(currentErrorValue>0)
            status.description="";

        for(var key in errorCode)
        {
            var value = deviceErrorDic.find(key);

            switch (value) {
                case errorCode.Jammed:
                case errorCode.DoorOpen:
                case errorCode.NoToner:
                case errorCode.OverduePreventMaint:
                case errorCode.MarkerSupplyMissing:
                case errorCode.OutputTrayMissing:
                case errorCode.InputTrayMissing:
                case errorCode.NoPaper:
                case errorCode.LowPaper:
                    if((currentErrorValue & value) > 0){
                        errorCount++;
                        status.description+=deviceErrorDescription.find(value)+"/";
                    }
                    break;
                case errorCode.LowToner:
                case errorCode.InputTrayEmpty:
                case errorCode.OutputFull:
                    if((currentErrorValue & value) > 0){
                        alarmCount++;
                        status.description+=deviceErrorDescription.find(value)+"/";
                    }
                    break;
            }
        }
    }
}

function getDeviceAlarmBy(currentAlarmJson){
    
    if(!jsonHelper.isEmptyObject(currentAlarmJson))
    {
        var oid = currentAlarmJson.oid;

        var levelArray =[];
        var codeArray =[];
        var descriptionArray=[];
        
        
        for(var i=0;i<currentAlarmJson.oidValues.length;i++){
            
            //level
            if(currentAlarmJson.oidValues[i].key.indexOf(oid+".2")!==-1)
            {
                levelArray.push(currentAlarmJson.oidValues[i].value);
            }
                
            //code
            if(currentAlarmJson.oidValues[i].key.indexOf(oid+".7")!==-1)
            {
                codeArray.push(currentAlarmJson.oidValues[i].value);
            }
                
            //description
            if(currentAlarmJson.oidValues[i].key.indexOf(oid+".8")!==-1)
            {
                var des =""+currentAlarmJson.oidValues[i].value+"";
                descriptionArray.push(des.trim());
            }
        }
        
        //level
        switch (parseInt(levelArray[0])) {
            case alarmLevel.Other:
            case alarmLevel.Critical:
            case alarmLevel.Warn:
                //alarmCount++;
                break;
        }
        
        for(var i =0;i<codeArray.length;i++){
            var str = descriptionArray[i].replace(/\s/g,"");
            status.description +=byteToString(Hexstring2btye(str))+" ";
        }
        
    }
}

function  Hexstring2btye(str){
    var pos = 0;
    var len = str.length;
    if (len % 2 != 0) {
        return null;
    }
    len /= 2;
    var hexA = new Array();
    for (var i = 0; i < len; i++) {
        var s = str.substr(pos, 2);
        var v = parseInt(s, 16);
        hexA.push(v);
        pos += 2;
    }
    return hexA;   
    
}


function byteToString(arr) {
    if (typeof arr === 'string') {
        return arr;
    }
    var str = '',
        _arr = arr;
    for (var i = 0; i < _arr.length; i++) {
        var one = _arr[i].toString(2),
            v = one.match(/^1+?(?=0)/);
        if (v && one.length == 8) {
            var bytesLength = v[0].length;
            var store = _arr[i].toString(2).slice(7 - bytesLength);
            for (var st = 1; st < bytesLength; st++) {
                store += _arr[st + i].toString(2).slice(2);
            }
            str += String.fromCharCode(parseInt(store, 2));
            i += bytesLength - 1;
        } else {
            str += String.fromCharCode(_arr[i]);
        }
    }
    return str;
}

function hexCharCodeToStr(hexCharCodeStr) {
    console.log(123);
    var trimedStr = hexCharCodeStr.trim();
    
    var rawStr =
        trimedStr.substr(0,2).toLowerCase() === "0x"
            ?
            trimedStr.substr(2)
            :
            trimedStr;

    console.log(trimedStr);
    var len = rawStr.length;
    if(len % 2 !== 0) {
        alert("Illegal Format ASCII Code!");
        return "";
    }
    var curCharCode;
    var resultStr = [];
    for(var i = 0; i < len;i = i + 2) {
        curCharCode = parseInt(rawStr.substr(i, 2), 16); // ASCII Code Value
        resultStr.push(String.fromCharCode(curCharCode));
    }
    return resultStr.join("");
}


function getDeviceStatus(currentStatusValue,currentErrorValue,currentAlarmJson){
    
    alarmCount=0;
    errorCount=0;

    status ={status:deviceStatus.Normal,description:"设备正常"};
    
    var fieldValue = {status:0,code:"",description:""};
    
    getDeviceStatusBy(currentStatusValue);
    
    if(status.status!==deviceStatus.Normal)
    {
        getDeviceErrorBy(currentErrorValue);

        //getDeviceAlarmBy(currentAlarmJson);
    }
    
    if(errorCount>0)
        status.status = deviceStatus.Fault;
    else if(alarmCount>0)
        status.status = deviceStatus.Alarm;
    else
        status.status = deviceStatus.Normal;
    
    if(status.description.length>0&&status.description.indexOf('/')!==-1)
        status.description=status.description.substr(0,status.description.length-1);

    fieldValue.status=status.status;
    fieldValue.code=currentErrorValue;
    fieldValue.description=decode(status.description);
    
    return fieldValue;
}

function decode(s) {
    return unescape(s.replace(/\\(u[0-9a-fA-F]{4})/gm, '%$1'));
}

// function test(){
//     getDeviceStatus( parseInt("4") ,parseInt("00",16),0);
//     console.log(status);
// }
// test();

module.exports = {
    getDeviceStatus
};