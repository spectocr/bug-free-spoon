const db = require('./connection');
const { User, Product, Category, Reactions } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'North Jersey' },
    { name: 'Central Jersey' },
    { name: 'South Jersey' },
    { name: 'NYC' },
    { name: 'Greater Philadelphia Area' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Royale Titas',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      image: 'test.jpg',
      category: categories[0]._id,
      price: 5.00,
      quantity: 500
    },
    {
      name: 'Thandeka Rustam',
      description:
        'Morbi ac metus augue. Pellentesque ac dolor et magna ultrices dapibus fermentum eget odio.',
      image: 'test2.jpg',
      category: categories[0]._id,
      price: 2.50,
      quantity: 500
    },
    {
      name: 'Charlotte Osborne',
      category: categories[1]._id,
      description:
        'Vivamus sem velit, elementum ac eleifend ut, viverra id sem.',
      image: 'test3.jpg',
      price: 10.00,
      quantity: 20
    },
    {
      name: 'The Warrior',
      category: categories[1]._id,
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      image: 'warrior.jpg',
      price: 5.00,
      quantity: 50
    },
    {
      name: 'Ric Flair',
      category: categories[1]._id,
      description:
        'Ut id justo eros. In hac habitasse platea dictumst.',
      image: 'ric-flair.jpg',
      price: 19.99,
      quantity: 100
    },
    {
      name: 'Hulk Hogan',
      category: categories[2]._id,
      description:
        'Fusce elementum dapibus feugiat. Curabitur congue dictum mi.',
      image: 'hulk.jpg',
      price: 250.00,
      quantity: 30
    },
    {
      name: 'Andre the Giant',
      category: categories[2]._id,
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: 'Andre_the_Giant.jpg',
      price: 25.00,
      quantity: 30
    },
    {
      name: 'The Rock',
      category: categories[3]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'the-rock.jpg',
      price: 10.00,
      quantity: 100
    },
    {
      name: 'John Cena',
      category: categories[4]._id,
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: 'john-cena.jpg',
      price: 15.00,
      quantity: 1000
    },
    {
      name: 'Amanda Nunes',
      category: categories[4]._id,
      description:
        'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
      image: 'nunes.jpg',
      price: 3.00,
      quantity: 1000
    },
    {
      name: 'Teddy Bear',
      category: categories[4]._id,
      description:
        'Sed sed sem finibus, sagittis justo nec, posuere nunc.',
      image: 'teddy-bear.jpg',
      price: 20.00,
      quantity: 100
    },
    {
      name: 'Chyna',
      category: categories[4]._id,
      description:
        'Proin sed orci ut enim venenatis ullamcorper. Aliquam consequat id metus vel viverra.',
      image: 'chyna.jpg',
      price: 10.00,
      quantity: 600
    }
  ]);

  console.log('realtors seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Alexander',
    lastName: 'Hamilton',
    email: 'ahamilton@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Aaron',
    lastName: 'Burr',
    email: 'aburr@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  await Reactions.deleteMany();
  
  await Reactions.create({
    reactionBody: true,
    email: 'eholt@testmail.com'
  }); 
  console.log('reactions seeded')

  process.exit();
});
