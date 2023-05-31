const { Invoice, Project, User } = require('../models')
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        Projects: async () => {
            return await user.findOne({ _id }).populate('projects')
        },
        Invoices: async () => {
            return await User.findOne({ _id }).populate('invoices')
        },
        Users: async () => {
            return await User.find({})
        }
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No user found with this email address');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        },
        addProject: async (parent, { title, description, stateDate, endDate,}, context) => {
            if (context.user){
                const project = await Project.create({
                    title, 
                    description, 
                    stateDate, 
                    endDate, 
                    company: context.user.company,
                });
                await User.findOneAndUpdate(
                    {_id:context.user._id},
                    {$addToSet:{projects: project._id}}
                )
                return project
            }
            throw new AuthenticationError('you need to be logged in!')
        },
        addInvoice: async (parent, {project, amount, currency, dueDate, Paid,}, context) => {
            if (context.user){
                const invoice = await Invoice.create({
                    project, 
                    amount, 
                    currency, 
                    dueDate, 
                    Paid, 
                    employee: context.user.employee
                });
                await User.findOneAndUpdate(
                    {_id:context.user._id},
                    {$addToSet:{invoices: invoice._id}}
                )
                return invoice
            }
            throw new AuthenticationError('you need to be logged in!')
        }

    }
};

module.exports = resolvers;