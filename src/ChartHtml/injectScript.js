

var myChart = echarts.init(document.getElementById('chart')),_eventNames = [];

function bindEvents(eventNames){
    var diff = arrayDiff(_eventNames, eventNames);
    diff.dels.map(function(eventName){myChart.off(eventName)});
    diff.adds.map(function(eventName){myChart.on(eventName, function(event){
        var params = {};
        //过滤掉无法转换的字段
        Object.keys(event).forEach(function(key){
            if(!/^[$]/.test(key) && key != 'event'){
                params[key] = event[key];
            }
        });
        window.postMessage(JSON.stringify(params));
    })});
    _eventNames = eventNames;
}

window.onresize = function(){
    myChart.resize();
};

function arrayDiff(arr1, arr2){

    var merged = {};

    arr1.forEach(function (a) {
        merged[a] = merged[a] || 1;
    });

    arr2.forEach(function (a) {
        merged[a] = merged[a] ? (merged[a] + 2) : 2;
    });

    return {
        dels : Object.keys(merged).filter(function (a) {
            return merged[a] === 1;
        }),
        adds : Object.keys(merged).filter(function (a) {
            return merged[a] === 2;
        })
    }
}
