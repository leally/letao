$(function(){
    getCateName();
    //给左边的li标签添加点击事件
    $(".category-left .left-ul").on("click","a",function(e){  
        var id = $(e.target).data("id");
        // console.log(id);
        getCategoryContent(id);
    });
    getCategoryContent(1);

    mui('.mui-scroll-wrapper').scroll({
        scrollY: true, //是否竖向滚动
        scrollX: false, //是否横向滚动
        startX: 0, //初始化时滚动至x
        startY: 0, //初始化时滚动至y
        indicators: false, //是否显示滚动条
        deceleration:0.001, //阻尼系数,系数越小滑动越灵敏
        bounce: true //是否启用回弹
    });
})

//获取分类页面一级分类数据
function getCateName(){
    $.ajax({
        url: "/category/queryTopCategory",
        success:function(data){
            // console.log(data);
            var html = template("categoryName",data);
            // console.log(html);
            $(".category-left .left-ul").html(html);
        }
    })
}

//获取分类页面二级分类数据
function getCategoryContent(id){
    $.ajax({
        url: "/category/querySecondCategory",
        data: {'id':id},
        success:function(data){
            // console.log(data);
            if(!data.total){
                $(".category-right .mui-row").html('<p>没有数据哦~</p>');
            }else {
                var html = template("categoryContent",data);
                $(".category-right .mui-row").html(html);
            }
        }
    })
}
