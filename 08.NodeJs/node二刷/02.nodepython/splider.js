/**
 * 1. 请求网络数据
 * 2. 将数据保存本地文件
 */

const http = require('http');
const https = require('https');
const fs = require('fs');
const cheerio = require('cheerio');

let url = 'https://www.bootcss.com/';
https.get(url, (res) => {

  // 判断返回数据的正确性
  const {
    statusCode
  } = res;
  const contentType = res.headers['content-type'];

  let error = null;
  if (statusCode != 200) {
    error = new Error('数据状态码错误');
  } else if (!/^text\/html/.test(contentType)) {
    error = new Error('数据类型错误');
  }
  if (error) {
    console.log(error);
    res.resume(); // 重置缓存
    return false;
  }

  let rowData = '';

  // 数据分段，只要接受数据就会触发data事件，chunk每次接受的数据片段
  res.on('data', (chunk) => {
    rowData += chunk.toString('utf-8');
  })
  // 数据流传输完毕
  res.on('end', () => {
    console.log('传输完毕');
    const $ = cheerio.load(rowData);
    $('img').each((index, el) => {
      // console.log($(el).attr('src'));
      let urlString = $(el).attr('src').split('/');
      let imgName = urlString[urlString.length - 1];
      let imgUrl = $(el).attr('src');
      https.get(imgUrl, (res) => {
        res.setEncoding("binary");
        let imgData = "";
        res.on('data', (chunk) => {
          imgData += chunk;
        })
        res.on('end', () => {
          fs.writeFile(`./images/${imgName}`, imgData, 'binary', (err) => {
            if (err) {
              console.log(err);
            }
          })
        })
      })
    })
  })
}).on('error', (err) => {
  console.log('请求错误');
})