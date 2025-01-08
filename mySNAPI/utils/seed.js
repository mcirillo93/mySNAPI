const connection = require('../config/connection');
const { User, Thought, Reaction } = require('../models');

const users = [
    {
        username: 'Wayne',
        email: 'Thegreatone99@nhl.com',
    },
    {
        username: 'Alex',
        email: 'TheGR8@nhl.com'
    },
    {
        username: 'Matthews',
        email: 'Desserthockey34@nhl.com'
    },
    {
        username: 'Sydney',
        email: 'TheKid87@nhl.com'
    },
    {
        username: 'Connor',
        email: 'McJesus@nhl.com'
    },
    {
        username: 'Gary',
        email: 'Boothisman@nhl.com'
    },
    {
        username: 'Stanley',
        email: 'allforthecup@nhl.com'
    },
    {
        username: 'John',
        email: 'NotafanofLongIsland@nhl.com'
    },
    {
        username: 'Nathan',
        email: 'Macdog29@nhl.com'
    },
    {
        username: 'Matthew',
        email: 'mouthguardassassin@nhl.com'
    },
    {
        username: 'Joe',
        email: 'Jumbo@nhl.com'
    },
  ]

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');
    await Thought.deleteMany({});
    await User.deleteMany({});
  
    await User.collection.insertMany(users);

    console.info('Seeding success');
    process.exit(0);
  });
  