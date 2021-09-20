const db = require('./connection');
const { User, Realtor, Agencies } = require('../models');

db.once('open', async () => {
  await Agencies.deleteMany();

  //change this to agencies.
  const agencies = await Agencies.insertMany([
    { name: 'Century21' },
    { name: 'YoMommasHouse' },
    { name: 'ReMax' },
    { name: 'YogurtBoysShacks' },
    { name: 'TatertotsHouses' }
  ]);

  console.log('agencies seeded');

  await Realtor.deleteMany();

  const realtors = await Realtor.insertMany([
    {
      name: 'John Doe',
      description:
        'The best Realtor in the tristate.',
      image: 'cookie-tin.jpg',
      agencies: agencies[0]._id,
    },
    {
      name: 'John Moe',
      description:
        'The best Realtor in the tristate and more.',
      image: 'cookie-tin.jpg',
      agencies: agencies[0]._id,
    },
    
  ]);

  console.log('realtors seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Cris ',
    lastName: 'Spector',
    email: 'highstakes22@gmail.com',
    password: 'test1'
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
