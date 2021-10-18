const Category = {
    animals: (parent, args, {animals}) => {
      console.log(parent);
      return animals.filter(animal => {
        return animal.category === parent.id;
      })
    }
  }
  module.exports = Category