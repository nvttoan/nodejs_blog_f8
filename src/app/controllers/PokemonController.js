const Course = require('../model/Courses');
const { mongooseToObject } = require('../../util/mongoose')

class PokemonController{
    
    //[GET] /pokemon/:slug
    show(req,res, next){
        Course.findOne({slug: req.params.slug})
        .then((pokemon)=>
            res.render('courses/show', {pokemon: mongooseToObject(pokemon)})
        )
        .catch(next);
    }
    //[GET] /pokemon/create
    create(req,res, next){
        res.render('courses/create');
    }
    //[POST] /pokemon/store
    store(req,res, next){
        const formData = req.body;
        const course = new Course(formData);//tạo đốitượng body mới
        course.save()//và lưu vào db
            .then(()=> res.redirect('/'))
            .catch(error => {
                
            })
    }
    //[GET] /pokemon/edit
    edit(req,res, next){
        Course.findById(req.params.id)
            .then(course =>res.render('courses/edit',{
                course: mongooseToObject(course)
            }))
            .catch(next);
    }
    //[PUT ] /pokemon/:id
    update(req,res, next){
        Course.updateOne({_id:req.params.id},req.body)
            .then(()=>res.redirect('/me/stored/courses'))
            .catch(next);
    }
}
module.exports = new PokemonController;