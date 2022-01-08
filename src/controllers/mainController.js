module.exports = {
    index : (req, res) => res.render('index'),
    login : (req, res) => res.render('login'),
    contact : (req, res) => res.render('contact'),
    about: (req, res) => res.render('about'),
    music: (req, res) => res.render('music'),
    admin : (req, res) => res.render('admin', {user: req.query.user})
}