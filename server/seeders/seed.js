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
            company: "test1"
        },
        {
            username: "ETDinc",
            email: "ETDinc@yahoo.com",
            password: "PassWord4567",
            userRole: 'false',
            company: "2"
        },
        {
            username: "fngEmploy",
            email: "fngEmploy@yahoo.com",
            password: "PassWord2345",
            userRole: 'false',
            company: "test3"
        }
    ])

    console.log('users seeded')

    await Project.deleteMany();

    const projects = await Project.insertMany([
        {
            title: "test website",
            description: "test website to safely test future applications",
            startDate: "2023-06-06",
            endDate: "2023-07-24",
            customer: users[1]._id,
            company: "1"
        },
        {
            title: "Project Meteor",
            description: "to free the Space Colonies",
            startDate: "2023-06-06",
            endDate: "2023-09-24",
            customer: users[1]._id,
            company: "2" 
        }
    ])

    console.log('projects seeded')

    await Invoice.deleteMany()

    const invoices = await Invoice.insertMany([
        {
            project: projects[0]._id,
            amount: 3600,
            currency: 'USD',
            dueDate: '2023-07-24',
            paid: 'false',
            employee: users[0]._id,
            company: "1"
        },
        {
            project: projects[0]._id,
            amount: 8000,
            currency: 'USD',
            dueDate: '2023-09-24',
            paid: 'false',
            employee: users[0]._id,
            company: "12"
        }
    ])

    console.log('invoices seeded')

    process.exit()


})