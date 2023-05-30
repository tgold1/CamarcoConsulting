const { Invoice, Project, User } = require('../models')

const resolvers = {
    Query: {
        Projects: async () => {
            return await user.findOne({_id}).populate('projects')
        },
        Invoices: async ()=>{
            return await User.findOne({_id}).populate('invoices')
        },
    },

    Mutation:{
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
    }
};

module.exports = resolvers;