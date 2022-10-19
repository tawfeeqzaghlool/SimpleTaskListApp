import { gql } from 'apollo-server'

export const typeDefs = gql`

type Query {
    users: [User!]!
    user(id: ID!): User
    getalltasks: [Task!]
    gettask(id: ID!): Task
    getalllists: [List!]!
    getlist(id: ID!): List
  }
  
    type User {
    id: ID!
    username: String!
  }

  type Task {
    id: ID!
    title: String!
    description: String!
    lists: List!
    status: StatusType!
    updatedAt: String
    createdAt: String
  }
  
  type List {
    id: ID!
    titlelist: String!
    tasks: [Task]
    updatedAt: String
    createdAt: String
  }

  input CreateUserInput {
    username: String!
    password: String!
  }

  input UpdateUserInput {
    username: String
  }

  input CreateTaskInput{
    title: String!
    description: String!
  }
  input UpdateTaskInput{
    title: String!
    status: StatusType!
  }
  input CreateListInput{
    titlelist: String!
  }   
  type MutationResult {
    success: Boolean!
  }

type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUser(id: ID!, input: UpdateUserInput!): User
    deleteUser(id: ID!): MutationResult!
    createTask(data: CreateTaskInput!): Task!
    updateTask(id: ID!, data: UpdateTaskInput!): Task
    deleteTask(id: ID!): MutationResult!
    createList(data: CreateListInput!): List!
    deleteList(id: ID!): MutationResult!

  }

enum StatusType {
    NOT_COMPLETED
    ON_PROGRESS
    COMPLETED
  }
  ` 
  module.exports = {
      typeDefs,
  }


