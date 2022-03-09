const controller = {}

controller.home = (req, res) => {
    res.render('home')
}
controller.about = (req, res) => {
    res.render('about')
}
controller.personal = (req, res) => {
    res.render('about_personal')
}
controller.central = (req, res) => {
    res.render('about_central')
}
module.exports = controller;