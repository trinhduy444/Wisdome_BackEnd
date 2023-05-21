// const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');


const CourseSchema = mongoose.Schema(
    {
        name: {
            type: String
        },
        discription:{
            type: String
        }
    },
    {
        timestamps:true
    }
)


const Course = mongoose.model('Course', CourseSchema);

module.exports = Course;