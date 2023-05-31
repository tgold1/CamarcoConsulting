const db = require('../config/connection');
const {User, Project, Invoice}=require('../models')
const userSeeds = require('./userSeeds.json');
const projectSeeds = require('./')