const { gql } = require('apollo-server');

const typeDefs = gql`
  type Task {
    id: ID!
    name: String!
    startDate: String!
    endDate: String!
    dependencies: [String!]
  }

  type Query {
    tasks: [Task]
  }

  type Mutation {
    addTask(name: String!, startDate: String!, endDate: String!, dependencies: [String!]): Task
    updateTask(id: ID!, name: String, startDate: String, endDate: String, dependencies: [String]): Task
    removeTask(id: ID!): Task
  }
`;

module.exports = typeDefs;
