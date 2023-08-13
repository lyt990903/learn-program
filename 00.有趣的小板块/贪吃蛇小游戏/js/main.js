var map = document.querySelector(".map");
var game = new Game(map);
game.render();

$(document).ready(function () {
    $("#Btn").click(function () {
        if ($(this).text() == "暂停") {
            game.stop();
            $(this).text("开始");
        } else if ($(this).text() == "开始") {
            game.start(map);
            $("#Btn").text("暂停");
        }
    });
    $("#restart").click(function () {
        window.location.reload();
    });
});