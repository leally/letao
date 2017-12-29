$(function(){

    // 打开页面的时候渲染页面
    setHistoryList();

    // 搜索按钮的点击事件
    $("#main button").on("click",function(){
        var word = $("#main input").val();
        if(word){
            $("#main input").val("");
            setHistoryData(word);
        }else {
            // alert("大兄弟，请输入内容！");
            return;
        }
        setHistoryList();
    })

    // 清空记录的点击事件
    $("#main .searchHistory a").on("click",function(){
        emptyHistory();
        var history = getHistoryData();
        setHistoryList(history);
    })

    // 点击删除按钮删除对应的历史记录
    $("#main ul").on("click","i",function(e){      
        var word = $(this).data("word");
        // console.log(word);
        deleteHistory(word);
    })
})

// 获取本地存储数据
function getHistoryData(){
    var history = localStorage.getItem('history');   
    if(history){
        history = JSON.parse(history);
    }else {
        history = [];
    }
    return history;
}

// 渲染历史记录页面
function setHistoryList(){ 
    var history = getHistoryData(); 
    history = history.reverse(); 
    //将获取到的数据渲染到页面上
    var html = template("historyTmp",{history});
    $("#main .mui-table-view").html(html);
}

// 将输入框的数据存放到本地存储中
function setHistoryData(word){
    var history = getHistoryData();
    //当点击搜索后，将获取input的值存储到本地  
    if(history.indexOf(word+"")==-1){
        // history = history.reverse();
        history.push(word+"");       
        // history = history.reverse();
        history = JSON.stringify(history);
        localStorage.setItem("history",history);       
        //渲染页面后将数据存储到本地中
        setHistoryList();
    }else {
        return;
    }
}

// 清空本地存储
function emptyHistory(){
    localStorage.setItem("history","");
}

// 删除对应的历史记录
function deleteHistory(word){
    var history = getHistoryData()
    //获取此元素的下标
    var key = history.indexOf(key+"");
    history.splice(key,1);
    history = JSON.stringify(history);
    localStorage.setItem("history",history);
    setHistoryList();
}

