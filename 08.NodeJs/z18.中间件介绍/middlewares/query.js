module.exports = function (req, res) {
    let urlObj = url.parse(req.url, true);
    req.query = urlObj.query;
}