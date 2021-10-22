const { User } = require('../models');

const userData = [{
        username: 'Kenny',
        password: 'ken'

    },
    {
        username: 'Jimmy',
        password: 'jim'
    },
    {
        username: 'Nolan',
        password: 'Nol'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;