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
        addProject: async (parent,{Project.body}, context) => {
            if (context.user){
                const project = await Project.create({
                    project.body,
                });
                await User.findOneAndUpdate(
                    {_id:context.user._id},
                    {$addToSet:{projects: project._id}}
                )
            }
        }

    }
};

module.exports = resolvers;