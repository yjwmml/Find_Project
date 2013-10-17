$(function(){
    if (window.localStorage){
        var urls = new Array();
        var localstorage = window.localStorage;
        if (!localstorage.username) {
            localstorage.setItem("username", "default");
        }
        $("#username").val(localstorage.getItem("username"));
        if (localstorage.userFilterList) {
            urls = JSON.parse(localstorage.getItem("userFilterList"));
            for (var i = 0; i < urls.length; i++) {
                var $li = $("<li>URL:<input type='text' class='url'/><span class='delete'>删除<span/></li>");
                $li.find("input").val(urls[i].url);
                $li.appendTo("#userFilterList");
            }
        }
        $("#addUrl").click(function () {
            if ($("#userFilterList").children("li").size() >= 5) {
                alert("已超过URL数量上限");
            } else {
                $("#userFilterList").append("<li>URL:<input type='text' class='url'/><span class='delete'>删除<span/></li>");
            }
        });
        $("#saveUserFilterList").click(function () {
            urls.splice(0, urls.length);
            var len = $("#userFilterList").children("li").size();
            for (var i = 0; i < len; i++) {
                var url = new Object();
                url.url = $("#userFilterList li .url")[i].value;
                urls.push(url);
            }
			localstorage.setItem("username", $("#username").val());
            localstorage.setItem("userFilterList", JSON.stringify(urls));
        });
        $("#userFilterList").on("click", ".delete", function () {
            $(this).parent().remove();
        });
    }
    else {
        alert("Your browser don't support localStorage");
    }
});
