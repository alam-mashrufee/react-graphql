const { ApolloServer, gql } = require('apollo-server');
const {mainCards, animals} = require('./DB');

// schema
const typeDefs = gql`
  type Animal {
    title: String!
    image: String!
    rating: Float
    price: String!
    description: [String!]!
    stock: Int!
    onSale: Boolean
  }

  type MainCard {
        title: String!
        image: String!
    }

# Query
  type Query {
    mainCards: [MainCard]
    animals: [Animal]
  }
`;

  // resolver
const resolvers = {
    Query: {
      mainCards: () => mainCards,
      animals: () => animals,
    },
  };
  
  // The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
