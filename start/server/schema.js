const { gql } = require('apollo-server');

// schema
const typeDefs = gql`
  type Animal {
    id: ID!
    title: String!
    image: String!
    rating: Float
    price: String!
    description: [String!]!
    slug: String!
    stock: Int!
    onSale: Boolean
    category: Category!
  }

  type MainCard {
        title: String!
        image: String!
    }
  
  type Category {
    id: ID!
    image: String!
    category: String!
    slug: String!
    animals: [Animal!]!
  }

# Query
  type Query {
    mainCards: [MainCard]
    animals: [Animal]
    animal(slug: String!): Animal
    categories: [Category!]!
    category(slug: String!): Category
  }

# Mutation
type Mutation {
    addAnimal(
        title: String!
        image: String!
        rating: Float
        price: String!
        description: [String!]!
        slug: String!
        stock: Int!
        onSale: Boolean
        category: String!
    ): Animal
    removeAnimal(id: ID!): Boolean!
}
`;
module.exports = typeDefs