/*
    路由处理模块
    处理请求路径与操作
*/

const fs = require('fs');
const express = require('express');
const Students = require('./students')

const router = express.Router();

router.get('/', (req, res) => {
    setTimeout(() => {
        res.redirect('/students');
    }, 500)
})

router.get('/students', (req, res) => {
    // // 模板数据准备
    // let levels = [{
    //     name: "Management"
    // }, {
    //     name: "Students"
    // }, {
    //     name: "Teachers"
    // }, {
    //     name: "Workers"
    // }]
    // fs.readFile('./db.json', 'utf8', (err, data) => {
    //     if (err) {
    //         return res.status(505).send('Server error');
    //     }
    //     let students = JSON.parse(data).students;
    //     res.render('index.html', {
    //         levels,
    //         students
    //     })
    // })
    Students.find((err, students) => {
        if (err) {
            return res.status(505).send('Server error');
        }
        res.render('index.html', {
            levels: [{
                name: "Management"
            }, {
                name: "Students"
            }, {
                name: "Teachers"
            }, {
                name: "Workers"
            }],
            students
        })
    })
})
router.get('/students/new', (req, res) => {
    res.render('new.html');
})
router.post('/students/new', (req, res) => {
    console.log(req.body);
    Students.save(req.body, (err) => {
        if (err) {
            return res.status(505).send('Server error');
        }
        res.redirect('/students');
    })
})
router.get('/students/edit', (req, res) => {
    Students.findById(req.query.id, (err, oldstudent) => {
        if (err) {
            return res.status(505).send('Server error');
        }
        res.render('edit.html', {
            student: oldstudent
        })
    })
})
router.post('/students/edit', (req, res) => {
    Students.updateById(req.body, (err) => {
        if (err) {
            return res.status(505).send('Server error');
        }
        res.redirect('/students');
    })
})
router.get('/students/delete', (req, res) => {
    Students.deleteById(req.query.id, (err) => {
        if (err) {
            return res.status(505).send('Server error');
        }
        res.redirect('/students');
    })
})

// 导出
module.exports = router;