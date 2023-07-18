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

p.save();

//create a nothers persons
Person.create([
    {
        Name: 'Raznati Radjabou',
        Age:29,
        favoriteFoods :['Manioc', 'samboussa']
    },
    
    {
        Name: 'Zayane Hassane',
        Age:2,
        favoriteFoods :['Lait', 'céréales']
    },
    {
        Name: 'Namir Mistoihi',
        Age:3,
        favoriteFoods :['Jus', 'Burger']
    },
    {
        Name: 'Milane Mounir',
        Age:1,
        favoriteFoods :['Fruits', 'légumes']
    },
]
);

//use model.find() ton search your database (all person having a giver name)


//Use model.findOne() to Return a Single Matching Document from the Database
Person.findOne({favoriteFoods:'samboussa'})


//Use model.findById() to Search Your Database By _id
Person.findById({}) 

//Updates by Running Find, Edit, then Save

