/*
 * http://love.hackerzhou.me
 */

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 30);
		});
		return this;
	};
})(jQuery);

function timeElapse(date){
	var current = new Date();
	var target = new Date(date);
	
	var oneDay = 1000 * 60 * 60 * 24;
	var currentDate = new Date(current.getFullYear(), current.getMonth(), current.getDate());
	var targetDate = new Date(target.getFullYear(), target.getMonth(), target.getDate());
	
	var diffDays = Math.round((currentDate.getTime() - targetDate.getTime()) / oneDay);
	var days = diffDays + 1;
	
	var hours = current.getHours();
	var minutes = current.getMinutes();
	var seconds = current.getSeconds();
	
	if (hours < 10) hours = "0" + hours;
	if (minutes < 10) minutes = "0" + minutes;
	if (seconds < 10) seconds = "0" + seconds;
	
	var result = "第 <span class=\"digit\">" + days + "</span> 天 <span class=\"digit\">" + hours + "</span> 小时 <span class=\"digit\">" + minutes + "</span> 分钟 <span class=\"digit\">" + seconds + "</span> 秒"; 
	$("#clock").html(result);
}
