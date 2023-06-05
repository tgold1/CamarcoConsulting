const { gql } = require('apollo-server-express');

const typeDefs=gql`
type User{
    _id: ID
    username: String
    password: String
    email: String
    userRole: Boolean
    company: String
    projects: [Project]!
    invoices:[Invoice]!
}
type Invoice{
    _id: ID
    amount: Float
    currency: String
    dueDate: String
    paid: Boolean
    stripePaymentIntentId: String
    employee: [User]!
    company: String
}
type Project{
    _id: ID
    company: String
    title: String
    description: String
    startDate: String
    endDate: String
    customer: [User]!
}
type Auth{
    token: ID!
    user: User
}
type Query{
   Projects: [User] 
   Invoices: [User]
   Users: [User]
   me: User
}
type Mutation{
    addUser(username: String!, email: String!,  company: String!, password: String!): Auth
    login( email: String!, password: String!): Auth
    addProject(title: String!, company: String!, description: String!, startDate: String!, endDate: String!): Project
    addInvoice(project: ID, company: String!, amount: Float!, currency: String!, dueDate: String!, paid: Boolean!): Invoice
    removeProject(projectId: ID!): Project
    updateInvoice( amount: Float!, company: String!, currency: String!, dueDate: String!, paid: Boolean!): Invoice
    updateUser(role: Boolean!): User
}
`

module.exports=typeDefs