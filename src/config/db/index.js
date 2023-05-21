const mongoose = require('mongoose');
async function connect(){
    try {
        await mongoose.connect('', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    } catch (error) {
        
    }
    
}


module.exports = {connect};