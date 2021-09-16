const { gql } = require('apollo-server-express');
const typeDefs = gql`
 type Reactions {
   _id: ID
   reactionBody: String
   username: String
   createdAt: Date
   default: Date.now
 }
  type Agencies {
    _id: ID
    name: String
  }
  type Realtor {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    agencies: Agencies
  }
  type Order {
    _id: ID
    purchaseDate: String
    realtors: [Realtor]
  }
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
  }
  type Auth {
    token: ID
    user: User
  }
  type Query {
    agencies: [Agencies]
    realtors(agencies: ID, name: String): [Realtor]
    realtor(_id: ID!): Realtor
    user: User
    order(_id: ID!): Order
    checkout(realtors: [ID]!): Checkout
  }
  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(realtors: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateRealtor(_id: ID!, quantity: Int!): Realtor
    login(email: String!, password: String!): Auth
    reaction(_id: ID!, realtors: [ID]!, users: [ID]!, reactionBody: boolean!): User
  }
  type Checkout {
    session: ID
  }
`;
module.exports = typeDefs;