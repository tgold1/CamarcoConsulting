const { gql } = require('apollo-server-express');

const typeDefs=gql`
type User{
    _id: ID
    username: String
    password: String
    email: String
    userRole: Boolean
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
}
type Project{
    _id: ID
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
}
type Mutation{
    addUser(username: String!, email: String!, password: String!): Auth
    login( email: String!, password: String!): Auth
    addProject(title: String!, description: String!, startDate: String!, endDate: String!): Project
    addInvoice(project: ID, amount: Float!, currency: String!, dueDate: String!, paid: Boolean!,  ): Invoice
    removeProject(projectId: ID!): Project
    updateInvoice( amount: Float!, currency: String!, dueDate: String!, paid: Boolean!): Invoice
    updateUser(role: Boolean!): User
}
`

module.exports=typeDefs