module.exports = function (req, res) {
    req.session = {
        isLogin: true
    }
}