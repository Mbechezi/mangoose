const mongoose = require('mongoose')

require('dotenv').config();  // confidentials datas


//Connexion to the database
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

//creation of the prototype
const Prototyp = new mongoose.Schema({
    Name: {
        type: String, require: true
    },
    Age: Number,
    favoriteFoods: [String],
}
)

//Create and Save a Record of a Model. Create also a Person constructor
const Person = mongoose.model('Person', Prototyp)

const p = new Person({
    Name: 'Youssouf Mbechezi',
    Age: 63,
    favoriteFoods: ['couscouma', 'mataba', 'riz']
}
)


