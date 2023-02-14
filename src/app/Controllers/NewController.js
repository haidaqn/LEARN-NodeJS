class NewController {

    index(req, res) {
        res.render('news');
    }

    show(req, res) {
        res.send('Dùng slug');
    }

}

module.exports = new NewController;