/*
* @Author: Administrator
* @Date:   2017-12-26 15:07:37
* @Last Modified by:   Administrator
* @Last Modified time: 2017-12-26 15:21:27
*/

$(function(){
    mui('.mui-slider').slider({
        interval:5000//自动轮播周期，若为0则不自动播放，默认为0；
    });
});
// 以上为自动轮播图的初始化代码

mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.01 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});
// 以上为区域块的滑动代码