
class NewsController{

    // [GET] /news
    index(req,res){
        res.render('news');
    }
    detail(req,res){
        res.render('newsChild');
    }
}


module.exports = new NewsController;