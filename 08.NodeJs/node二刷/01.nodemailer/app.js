"use strict";
const nodemailer = require("nodemailer");

// 创建发送邮件的对象
let transporter = nodemailer.createTransport({
  host: "smtp.qq.com", // 发送发邮箱类型
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: '761476102@qq.com', // 发送方邮箱地址
    pass: 'oimaaoqnzjvlbdaj' // mtp验证码
  }
});

// 邮件信息
// let mailObj = {
//   from: '"Fred Foo 👻" <761476102@qq.com>', // sender address
//   to: "76176102@qq.com", // list of receivers
//   subject: "Hello", // Subject line
//   text: "Hello world?", // plain text body
//   html: "<b>Hello world?</b>" // html body
// }
const str = '你好张可爱';
let mailObj = {
  from: '"Fred Foo 👻" <761476102@qq.com>', // sender address
  to: "1030521986@qq.com", // list of receivers
  subject: "Hello", // Subject line
  text: "", // plain text body
}
let ind = 0;
let interval = setInterval(function () {
  if (ind < str.length) {
    mailObj.text = str[ind];
    // 发送邮件
    transporter.sendMail(mailObj);
    ind++;
  } else {
    clearInterval(interval);
  }
}, 1000)