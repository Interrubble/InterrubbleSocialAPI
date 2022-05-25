const connection = require('../config/connection');
const {User, Thought, Reaction} = require('../models/index')

const users = [
    {
        username: 'Deli',
        email: 'delagarzachris@icloud.com',
    },
    {
        username: 'MQT',
        email: 'delagarzaboyce@icloud.com',
    },
    {
        username: 'Knight4Hire',
        email: 'roxasthe13th@hotmail.com'
    },
];

connection.on('error', (err)=>err);
connection.once('open', async () => {
    console.log('You are connected');
    await Thought.deleteMany({});
    await User.deleteMany({});

    await User.collection.insertMany(users);

    console.info('Seeding complete');
    process.exit(0);
});