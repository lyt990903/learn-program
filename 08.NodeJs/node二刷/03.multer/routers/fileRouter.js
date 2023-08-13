const express = require('express');
const multer = require('multer');

const router = express.Router();

// 存储设置
var storage = multer.diskStorage({
  // 设置上传后文件路径，uploads文件夹会自动创建
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  // 给上传文件重命名，获取添加后缀名
  filename: function (req, file, cb) {
    var fileFormat = (file.originalname).split(".");
    // 给图片加上时间戳格式防止重名
    // 比如把abc.jpg图片切割为数组{abc,jpg}，然后获取后缀名
    cb(null, file.fieldname + '-' + Date.now() + '.' + fileFormat[fileFormat.length - 1]);
  }
})

// 文件上传限制
const limits = {
  fields: 10, //非文件字段的数量
  fileSize: 500 * 1024, //文件大小 单位 b
  files: 1 //文件数量
}

// 文件格式限制
const fileFilter = function (req, file, cb) {
  // 限制文件上传类型，仅可上传png格式图片
  const types = ['jpg', 'jpeg', 'png', 'gif'];
  const tmpType = file.mimetype.split('/')[1];
  if (types.indexOf(tmpType) != -1) {
    cb(null, true)
  } else {
    cb(null, false)
  }
}
const upload = multer({
  storage,
  limits,
  fileFilter
})

router.post('/upload', upload.single('imgKey'), (req, res) => {
  console.log(req.file);
  let {
    size,
    mimetype,
    path
  } = req.file;
  // 规定允许的文件格式
  let types = ['jpg', 'jpeg', 'png', 'gif'];
  // 获取当前文件格式
  let tmpType = mimetype.split('/')[1];
  if (types.indexOf(tmpType) == -1) { // 文件要符合格式要求
    return  res.send({
      err: -1,
      msg: '文件格式错误'
    })
  } else if (size > 500000) { // 文件不能大于500kb
    return  res.send({
      err: -2,
      msg: '图片大小过大'
    })
  } else {
    return  res.send({
      err: 0,
      msg: '上传成功'
    })
  }
})

module.exports = router;