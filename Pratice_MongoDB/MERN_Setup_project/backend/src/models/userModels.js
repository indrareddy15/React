const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const userShema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
})

userShema.statics.signUp = async function (email, password) {
    
    const emailExist = await this.findOne({ email })

    if (emailExist) {
        throw Error('Email already exists')
    }

    const hidePassword = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, hidePassword)

    const user = await this.create({ email, password: hashPassword })
    return user
}
module.exports = mongoose.model('Users', userShema);