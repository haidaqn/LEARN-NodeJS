const newRouter = require('./news')

function route(app) {

    app.use('/news', newRouter);

    app.use('/', (req, res) => {
        res.render('home');
    })

}

module.exports = route;