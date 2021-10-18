const {v4} = require("uuid");
const { animal } = require("./query");
const Mutation = {
    addAnimal: (parent, {
        title,
        image,
        rating,
        price,
        description,
        slug,
        stock,
        onSale,
        category,
    }, {animals}) => {
        let newAnimal = {
            id: v4(),
            title,
            image,
            rating,
            price,
            description,
            slug,
            stock,
            onSale,
            category, 
        }
        animals.push(newAnimal);
        return newAnimal;
    },

    removeAnimal: (parent, {id}, {animals}) => {
        let index = animals.findIndex((animal) => {
            return animal.id === id
        })
        animals.splice(index, 1);
        return true
    }
}
module.exports = Mutation