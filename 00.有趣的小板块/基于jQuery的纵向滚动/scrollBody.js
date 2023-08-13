scrollBody = {
    // 页码
    indexNum: null,
    // 页面高度
    pageHeight: null,
    // 开始高度
    startHeight: null,
    // 停止高度
    overHeight: null,

    // 监听滚动事件的标签，滚动事件子标签的class名
    init: function (boxName, contentListClass) {
        this.indexNum = 1;
        this.pageHeight = window.innerHeight;
        $(boxName).attr('style', `height:${this.pageHeight}px;overflow-y:hidden;`);
        $(contentListClass).each((index, element) => {
            let str = $(element).attr("style");
            if (str) {
                str += `height:${this.pageHeight}px;width:100vw;`;
            } else {
                str = `height:${this.pageHeight}px;width:100vw;`;
            }
            $(element).attr('style', str);
        })
    },

    // 监听滚动事件的标签，滚动标签的id名，滚动子标签的class名，触发页面滚动事件的范围
    scroll: function (boxName, contentBoxId, contentListClass, sumNumber = 20) {
        $(boxName).off("mousedown").on("mousedown", (e) => {
            this.startHeight = e.clientY;
        })
        $(boxName).off("mouseup").on("mouseup", (e) => {
            this.overHeight = e.clientY;
        })

        if (this.startHeight > this.overHeight && this.startHeight - this.overHeight >= sumNumber && $(contentListClass).length > this.indexNum) {
            $(contentBoxId).attr('style', `top:-${this.pageHeight*this.indexNum}px;`);
            this.indexNum++;
        } else if (this.startHeight < this.overHeight && this.overHeight - this.startHeight > sumNumber && this.indexNum > 1) {
            $(contentBoxId).attr('style', `top:-${this.pageHeight*this.indexNum - this.pageHeight}px;`);
            this.indexNum--;
        }else{
            console.log("error");
        }
    }
}