import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Tural',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Ali',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'LuquiMoly',
      slug: 'LuquiMoly',
      category: 'Oil',
      image: '/images/liquimoly.jpg', // 679px × 829px
      price: 120,
      countInStock: 10,
      brand: 'Liqui',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality',
    },
    {
      // _id: '2',
      name: 'LuquiMoly',
      slug: 'LuquiMoly',
      category: 'Oil',
      image: '/images/liquimoly.jpg',
      price: 250,
      countInStock: 0,
      brand: 'Liqui',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      // _id: '3',
      name: 'Castrol',
      slug: 'Castrol',
      category: 'Oil',
      image: '/images/castrol.jpeg',
      price: 25,
      countInStock: 15,
      brand: 'Castrol',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      // _id: '4',
      name: 'Castrol',
      slug: 'Castrol',
      category: 'Oil',
      image: '/images/amsoil.jpeg',
      price: 65,
      countInStock: 5,
      brand: 'Castrol',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
  ],
};
export default data;
