const { Invoice, Project, User } = require('../models')

const resolvers = {
    Query: {
        Projects: async () => {
            return await user.find({_id}).populate('projects')
        },
        Invoices: async ()=>{
            return await User.findOne({_id}).populate('invoices')
        },
    },

    Mutation:{
        
    }
};

module.exports = resolvers;