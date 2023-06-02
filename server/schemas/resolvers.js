const { Invoice, Project, User } = require('../models')
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        Projects: async (context) => {
            return await User.findOne({ _id: context.user._id }).populate('projects')
        },
        Invoices: async (context) => {
            return await User.findOne({ _id: context.user._id }).populate('invoices')
        },
        Users: async () => {
            return await User.find({})
        },
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');

                return userData;
            }

            throw new AuthenticationError('Not logged in');
        },
    },

    Mutation: {
        addUser: async (parent, { username, email, password, company }) => {
            const user = await User.create({ username, email, password, company });
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
        addProject: async (parent, { title, description, stateDate, endDate, }, context) => {
            if (context.user) {
                const project = await Project.create({
                    title,
                    description,
                    stateDate,
                    endDate,
                    company: context.user.company
                });
                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { projects: project._id } }
                )
                return project
            }
            throw new AuthenticationError('you need to be logged in!')
        },
        addInvoice: async (parent, { project, amount, currency, dueDate, Paid }, context) => {
            if (context.user && context.user.userRole) {
                const invoice = await Invoice.create({
                    project: project.title,
                    amount,
                    currency,
                    dueDate,
                    Paid,
                    company: context.user.company,
                    employee: context.user.employee
                });
                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { invoices: invoice._id } }
                )
                await Project.findOneAndUpdate(
                    { _id: project._id },
                    { $addToSet: { invoices: invoice._id } }
                )
                return invoice
            }
            throw new AuthenticationError('you need to be logged in!')
        },
        removeProject: async (parent, { projectId }, context) => {
            if (context.user) {
                const project = await Project.findOneAndDelete({
                    _id: projectId,
                    company: context.user._id
                });
                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { projects: project._id } }
                )
                return project
            }
            throw new AuthenticationError('You need to be logged in!')
        },
        updateInvoice: async (parent, { id, amount, currency, dueDate, paid }, context) => {
            if (context.user && context.user.userRole) {
                return await Invoice.findOneAndUpdate(
                    { _id: id },
                    { amount },
                    { currency },
                    { dueDate },
                    { paid },
                    { new: true }

                )
            }
        },
        updateUser: async (parent, { id, userRole }) => {
            if (context.user && context.user.userRole) {
                return await User.findOneAndUpdate(
                    { _id: id },
                    { userRole },
                    { new: true }
                )
            }
        }


    }
};

module.exports = resolvers;