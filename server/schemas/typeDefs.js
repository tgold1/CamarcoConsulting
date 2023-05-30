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
    amount: Number
    currency: String
    dueDate: Date
    paid: Boolean
    stripePaymentIntentId: String
    employee: [User]!
}
type Project{
    _id: ID
    title: String
    description: String
    startDate: Date
    endDate: Date
    customer: [User]!
}
`

module.exports=typeDefs