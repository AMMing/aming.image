/**
 * $.amingimage
 * @extends jquery.1.7.1
 * @fileOverview 预加载图片后显示
 * @author 阿命
 * @email y2443@163.com
 * @site wwww.y2443.com
 * @version 1.01.04.1
 * @date 2014-01-26
 * Copyright (c) 2012-2014 AMing
 * @example
 *    $("img").aimg();
 */
(function($) {
    $.extend($.fn, {
        aimg: function(setting, callback) { //默认值
            var sdata = $.extend({
                /**显示的时间*/
                time: 800,
                /**图片加载完后的触发的方法*/
                loaded: {},
            }, setting);

            var renderTo = jQuery(this);
            var img = new Image();
            var osrc = renderTo.data('osrc');

            img.onload = function() {
                renderTo.attr('src', osrc);
            }
            img.src = osrc;

            return this;
        }
    });
})(jQuery)