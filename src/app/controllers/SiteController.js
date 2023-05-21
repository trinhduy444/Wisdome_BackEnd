const Courses = require('../models/Course');

class SiteController {
  // [GET] /news
  async index(req, res) {

    // res.json({
    //     name: 'test'
    // })
    res.send('sdfsdf')
    // try {
    //   const courses = await Courses.find({});

    //   console.log(courses);
    //   res.json(courses);

    // } catch (error) {
    //   res.status(400).json({ error: 'ERROR' });
    // }
  }
}

module.exports = new SiteController();
