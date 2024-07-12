var is_copy = false;
var pageUrl = window.location.href;
if (!copyText) {
    var copyText = "暑假作业资料已更新，点击领取~\n" + pageUrl;
}

var ua = navigator.userAgent.toLowerCase();
if (ua.indexOf("miniprogram") < 1) {
    if (!is_copy && temp_id != "25") {
        var clipboard = new ClipboardJS('html', {
            text: function () {
                if (typeof ntzgo === 'function') {
                    ntzgo();
                }
                if (typeof checkAudio === 'function') {
                    checkAudio();
                }
                return copyText;
            }
        });
        is_copy = true;
        $("html").click(function () {
            clipboard.destroy();
        })
        console.log(copyText);
    }
}