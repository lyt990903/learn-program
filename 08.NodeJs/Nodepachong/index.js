/*---------------------------------- 模块引用 ---------------------------------- */
const http = require('http');
const cheerio = require('cheerio');
const fs = require('fs');
let url = "http://www.zhuna.cn/flight/airtime_pek/";

/*---------------------------------- 根据url获取页面方法 ---------------------------------- */
getByUrl = (url) => {
  return new Promise((solve, reject) => {
    http.get(url, res => {
      let html = '';
      res.on("data", data => {
        html += data;
      });
      res.on('end', async () => {
        // console.log(html);
        solve(html);
      });
      res.on('error', () => {
        console.error("error");
        reject('err');
      })
    })
  })
}

/*---------------------------------- 获取某地到某地所有航班页面的href ---------------------------------- */
getHrefs = (html) => {
  const $ = cheerio.load(html);
  let chapters = [...$('.fly_letter a')];
  chapters = chapters.map(item => {
    let fromTo = item.children[0].data;
    return {
      fromTo: fromTo,
      href: `http://www.zhuna.cn${item.attribs.href}`,
    }
  }); // 航班页面组
  return chapters;
}
/*---------------------------------- 获取某地到某地所有航班信息 ---------------------------------- */
getHBList = (html, fromTo) => {
  const $ = cheerio.load(html);
  let chapters = $('.flighttimelist tr');
  let hbList = [];
  for (let i = 1; i < (chapters.length > 5 ? chapters.length / 2 : chapters.length); i++) {
    let hangbanInfo = {};
    let node = $(chapters[i]).children();
    hangbanInfo.numb = node.eq(1).text().replace(/[\r\n]/g, ""); // 航班号
    let times = node.eq(2).text().split('\n');
    hangbanInfo.startTime = times[0]; // 出发时间
    hangbanInfo.endTime = times[1]; // 到达时间
    let airports = node.eq(3).text().split('\n');
    hangbanInfo.fromAirport = airports[0]; // 出发机场
    hangbanInfo.toAirport = airports[1]; // 到达机场
    hangbanInfo.from = fromTo[0]; // 出发地
    hangbanInfo.to = fromTo[1]; // 到达地
    hangbanInfo.type = node.eq(4).text(); // 机型
    hangbanInfo.schedule = []; // 计划表
    node.eq(5).children().each(item => {
      hangbanInfo.schedule.push(parseInt(item.toString()));
    })
    hangbanInfo.onTimeRate = node.eq(7).text(); // 准时率
    hbList.push(hangbanInfo);
  }
  return hbList;
}

/*---------------------------------- 启动入口 ---------------------------------- */
let list = [];
getByUrl(url).then(data => {
  return new Promise((solve, reject) => {
    if (data) {
      let jichangList = getHrefs(data);
      solve(jichangList);
    }
  })
}).then(async data => {
  let fromToName = data[0].fromTo;
  for (let v of data) {
    let listNode;
    await getByUrl(v.href).then(data => {
      let fromTo = v.fromTo.split('-');
      listNode = getHBList(data, fromTo);
    })
    list = [...list, ...listNode];
  }
  // console.log(list);
  // list = list.map(item => JSON.stringify(item));
  // console.log(list);
  let newList = {
    list: list
  }
  let content = JSON.stringify(newList,null,'\t');
  fs.writeFile(`${fromToName}.json`, content, err => {
    if (err) throw new Error('写入文件失败！', err);
    console.log('成功！');
  })
})
/*
list:[
  {
    numb: text,
    startTime: text,
    endTime: text,
    from: text,
    to: text,
    fromAirport: text,
    toAirport: text,
    type: text,
    schedule: [],
    onTimeRate: text
  },
  ...
]
*/