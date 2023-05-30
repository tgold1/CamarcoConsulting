const { Invoice, Project, User } = require('../models')

const resolvers = {
    Query: {
        Projects: async () => {
            return await Project.find({})
        }
    }
};

module.exports = resolvers;