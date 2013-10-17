var localstorage = window.localStorage;

var urls = [];
var websites = [];
var activeTimes = [];

/*
 *      读取数据
 */
function readData(){
    var records = JSON.parse(localstorage.getItem("records"));
    for(var i=0; i<records.length; i++){
        urls.push(records[i].url);
        websites.push(records[i].website);
        activeTimes.push(records[i].activeTime);
    }
}

/**
 *      分析数据，目前只对website进行计数以及对每个website的时间进行统计,这里只列出前五名
 */
function analyseData(){
    var website_url = [];
    var website_times = [];
    var website_active = [];
    for (var i=0; i<websites.length; i++){
        if (website_url.length == 0){
            website_url.push(websites[i]);
            website_times.push(0);
            website_active.push(activeTimes[i]);
        }
        for (var j=0; j<website_times.length; j++){
            if(websites[i] !=  website_url[j]){
                website_url.push(websites[i]);
                website_times.push(0);
                website_active.push(activeTimes[i]);
            }
            else{
                website_times[j] = website_times[j] + 1;
                website_active[j] = website_active[j] + activeTimes[i];
            }
        }
    }
    alert(website_url[0] +":" +website_times[0]);
}

readData();
analyseData();
