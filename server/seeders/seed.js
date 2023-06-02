const db = require('../config/connection');
const { User, Project, Invoice } = require('../models')
// const userSeeds = require('./userSeeds.json');
// const projectSeeds = require('./')

db.once('open', async () => {
    await User.deleteMany();

    const users = await User.create([
        {
            username: "Admin",
            email: "mickey@camarcoconsulting.com",
            password: "PassWord1234",
            userRole: 'true',
            company: "Camarco Consulting",
            projects: [],
            invoices: []

        },
        {
            username: "ETDinc",
            email: "ETDinc@yahoo.com",
            password: "PassWord4567",
            userRole: 'false',
            company: "ETDinc",
            projects: [],
            invoices: []
        },
        {
            username: "fngEmploy",
            email: "fngEmploy@yahoo.com",
            password: "PassWord2345",
            userRole: 'false',
            company: "Camarco Consulting",
            projects: [],
            invoices: []
        }
    ])

    console.log('users seeded')

    await Project.deleteMany();

    const projects = await Project.create([
        {
            title: "test website",
            description: "test website to safely test future applications",
            startDate: "2023-06-06",
            endDate: "2023-07-24",
            customer: users[1]._id,
            company: users[1].company,
            invoices: []
        },
        {
            title: "Project Meteor",
            description: "to free the Space Colonies",
            startDate: "2023-06-06",
            endDate: "2023-09-24",
            customer: users[1]._id,
            company: users[1].company,
            invoices: [] 
        }
    ])

    console.log('projects seeded')

    await Invoice.deleteMany()

    const invoices = await Invoice.create([
        {
            project: projects[0]._id,
            amount: 3600,
            currency: 'USD',
            dueDate: '2023-07-24',
            paid: 'false',
            employee: users[0]._id,
        },
        {
            project: projects[0]._id,
            amount: 8000,
            currency: 'USD',
            dueDate: '2023-09-24',
            paid: 'false',
            employee: users[0]._id,
        }
    ])

    console.log('invoices seeded')

    process.exit()


})