const db = require('./connection');
const { User, Realtor, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  //change this to agencies.
  const categories = await Category.insertMany([
    { name: 'Food' },
    { name: 'Household Supplies' },
    { name: 'Electronics' },
    { name: 'Books' },
    { name: 'Toys' }
  ]);

  console.log('categories seeded');

  await Realtor.deleteMany();

  const realtors = await Realtor.insertMany([
    {
      name: 'John Doe',
      description:
        'The best Realtor in the tristate.',
      image: 'cookie-tin.jpg',
      category: categories[0]._id,
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
