"use strict";

const { ApolloServer, gql } = require('apollo-server-lambda');

let fs = require("fs");
const typeDefs = gql` ${fs.readFileSync("./schema.gql").toString("utf-8")}`;
const resolvers = {
  Query: {
    mysql_getCustomer: require("./Resolvers/Queries/mysql_getCustomer").func,
  },
  Mutation: {
    mysql_createCustomer: require("./Resolvers/Mutations/mysql_createCustomer").func,
  },
};
const lambda = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
});
exports.handler = lambda.createHandler();
// exports.server = lambda.graphqlHandler;
//exports.playground = lambda.playgroundHandler;