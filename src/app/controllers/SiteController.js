const Course = require('../model/Courses');

class SiteController{
    //[GET] /home
    index(req, res) {
        Course.find({}) .then(courses => {res.json(courses)}) .catch(err => {res.status(400).json({error: "ERROR..!!!"})})    
        // res.render('home');
    }
    //[GET] /search
    
    search(req,res){
        res.render('search');
    }
}
module.exports = new SiteController;