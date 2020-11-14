import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Basir',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
    products: [
      {
     
        name: 'Nike Slim Shirt',
        category: 'Shirts',
        image: '/images/onion.jpg',
        price: 120,
        countInStock: 10,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
      {
 
        name: 'Adidas Fit Shirt',
        category: 'Shirts',
        image: '/images/brocoli.jpg',
        price: 100,
        countInStock: 18,
        brand: 'Adidas',
        rating: 4.0,
        numReviews: 10,
        description: 'high quality product',
      },
      {
 
        name: 'Lacoste Free Shirt',
        category: 'Shirts',
        image: '/images/carrot.jpg',
        price: 220,
        countInStock: 10,
        brand: 'Lacoste',
        rating: 4.8,
        numReviews: 17,
        description: 'high quality product',
      },
      {
     
        name: 'Nike Slim Pant',
        category: 'Pants',
        image: '/images/beans.jpg',
        price: 78,
        countInStock: 3,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 14,
        description: 'high quality product',
      },
      {
     
        name: 'Puma Slim Pant',
        category: 'Pants',
        image: '/images/potato.jpg',
        price: 65,
        countInStock: 15,
        brand: 'Puma',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
      {
     
        name: 'Adidas Fit Pant',
        category: 'Pants',
        image: '/images/ladyfinger.jpg',
        price: 139,
        countInStock: 12,
        brand: 'Adidas',
        rating: 4.5,
        numReviews: 15,
        description: 'high quality product',
      },
    ],
  };
  export default data;