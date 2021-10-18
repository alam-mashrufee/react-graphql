const { ApolloServer, gql } = require('apollo-server');
const {mainCards, animals, categories} = require('./DB');
const typeDefs = require('./schema');
const Query = require('./resolvers/query');
const Mutation = require('./resolvers/Mutation');
const Category = require('./resolvers/Category');
const Animal = require('./resolvers/Animal');

  
  // The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ 
  typeDefs, 
  resolvers: {
    Query,
    Mutation,
    Category,
    Animal,
  },
  context: {
    mainCards,
    animals,
    categories
  }
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
