const db = require('../config/connection');
const { User, Project, Invoice } = require('../models')
// const userSeeds = require('./userSeeds.json');
// const projectSeeds = require('./')

db.once('open', async () => {
    await User.deleteMany();

    const users = await User.insertMany([
        {
            username: "Admin",
            email: "mickey@camarcoconsulting.com",
            password: "PassWord1234",
            userRole: 'true'
        },
        {
            username: "ETDinc",
            email: "ETDinc.com",
            password: "PassWord4567",
            userRole: 'false'
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
            company: users[1]._id
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
            paid:'false',
            employee: users[0]._id
        }
    ])

    console.log('invoices seeded')

    process.exit()


})