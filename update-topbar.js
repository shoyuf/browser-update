(function () {
  if (document.cookie.indexOf("shoyuf_unspt") !== -1) return;
  var styleText = ".shoyuf-unspt{position:fixed;top:0;left:0;right:0;line-height:50px;padding:0 4%;color:#8a6d3b;background-color:#fcf8e3;border-color:#332F28;transition:all 1s;}.shoyuf-unspt a{color:#8a6d3b;}.shoyuf-unspt button{-webkit-appearance:none;border:none;padding:0;width:16px;height:16px;line-height:18px;background-color:transparent;font-size:24px;position:absolute;right:2%;bottom:35%;color:#8a6d3b;}.shoyuf-unspt button:hover{color:#3a3a3a;cursor:pointer;}@media (max-width:780px){.shoyuf-unspt button{bottom:10px;right:4%;}}"
  var htmlText = "<span> 😞 尊敬的用户，您现在使用的 Internet Explore 浏览器版本过低，为了保障您的浏览体验，请尽快升级到 <a href=\"http://support.microsoft.com/zh-cn/help/17621/internet-explorer-downloads\" target=\"_blank\">最新版本</a> Internet Explore 浏览器 或使用 <a href=\"http://www.google.cn/intl/zh-CN/chrome/browser/\" target=\"_blank\">Google Chrome</a> 或 <a href=\"http://www.mozilla.org/zh-CN/firefox/new/\" target=\"_blank\">Mozilla FireFox</a> 等现代浏览器！</span><button onclick=\"closeUnspt()\" title=\"一天内再不显示\">×</button>"
  var styleEl = document.createElement("style");
  styleEl.type = 'text/css'
  if (styleEl.styleSheet) {
    styleEl.styleSheet.cssText = styleText;
  } else {
    styleEl.innerHTML = styleText;
  }
  document.getElementsByTagName("head")[0].appendChild(styleEl);
  var htmlEl = document.createElement("div");
  htmlEl.className = "shoyuf-unspt";
  htmlEl.innerHTML = htmlText;
  document.body.appendChild(htmlEl);
  closeUnspt = function () {
    document.getElementsByTagName("head")[0].removeChild(styleEl);
    document.body.removeChild(htmlEl);
    var d = new Date();
    d.setDate(d.getDate() + 1);
    document.cookie = "shoyuf_unspt=true; " + "expires=" + d.toGMTString();
  };
})()