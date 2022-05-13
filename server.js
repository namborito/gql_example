const {ApolloServer, gql} = require('apollo-server');

// The GraphQL schema
const typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: Identity!
  }

  interface Identity {
    age: Int!
  }

  interface Unit implements Identity {
    age: Int!
    name: String!
  }

  type Foo implements Identity & Unit {
    age: Int!
    name: String!
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: () => {
      return {
        __typename: "Foo",
        age: 4,
        name: "Nasty",
      }
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({url}) => {
  console.log(`🚀 Server ready at ${url}`);
});
