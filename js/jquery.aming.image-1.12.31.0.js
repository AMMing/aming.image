/**
* $.amingimage
* @extends jquery.1.7.1
* @fileOverview 预加载图片后显示
* @author 阿命
* @email y2443@163.com
* @site wwww.y2443.com
* @version 1.12.31.0
* @date 2012-12-31
* Copyright (c) 2012-2013 AMing
* @example
*    $("a").amingimage();
*/
(function ($) {
    $.extend($.fn, {
        amingimage: function (setting, callback) {//默认值
            var sdata = $.extend({
                /**显示的时间*/
                time: 800,
                /**图片加载完后的触发的方法*/
                loaded: {}
            }, setting);
            var renderTo = $(this);
            renderTo.hide();

            renderTo.bind("load", function () {
                jQuery(this).fadeIn(sdata.time, callback);
                if (sdata.loaded && (sdata.loaded instanceof Function)) {
                    sdata.loaded();
                }
            });

            return this;
        }
    });
})(jQuery)