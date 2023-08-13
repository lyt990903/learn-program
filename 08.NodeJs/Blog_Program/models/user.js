const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    emial: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: Number,
        // -1:保密  0：男   1：女
        enum: [-1, 0, 1],
        default: -1
    },
    created_time: {
        type: Date,
        default: Date.now
    },
    last_modified_time: {
        type: Date,
        default: Date.now
    },
    avatar: {
        type: String,
        default: '/public/img/'
    },
    status: {
        type: Number,
        /*
            0:拥有所有权限
            1：无法评论
            2：无法登录
        */
        enum: [0, 1, 2],
        default: 0
    }
})

module.exports = mongoose.model('User', userSchema);