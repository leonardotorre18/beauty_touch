const controller = {}

controller.home = (req, res) => {
    res.render('home', { jumbotron: true, owlcarousel: true})
}

controller.about = (req, res) => {
    res.render('about')
}
controller.personal = (req, res) => {
    res.render('about_personal')
}
controller.central = (req, res) => {
    res.render('about_central', { owlcarousel: true })
}
controller.error404 = (req, res) => {
    res.render('404')
}
module.exports = controller;