import React, { useState } from 'react';
import './Products.css'; // Keep your CSS for general styles
import { Link } from 'react-router-dom';

const Products = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const products = [
    {
      id: 1,
      img1: 'https://i.ibb.co/nz3pDMQ/air-jordan-1-black-men.png',
      img2: 'https://i.ibb.co/4RJ3bGm/air-jordan-1-elevate-low-mens-shoes-black-red-3.png',
      title: 'Air Jordan 1 Low',
      priceOld: '599.00 MAD',
      priceNew: '349.00 MAD',
    },
    {
      id: 2,
      img1: 'https://i.ibb.co/5WqcsXL/7721e342-bd9b-45af-9836-72bf9d729b9e.png',
      img2: 'https://i.ibb.co/ws0SydH/51281cfb-9172-44c6-9c10-be37e7b9dffa.png',
      title: 'Air Jordan 1 Low',
      priceOld: '599.00 MAD',
      priceNew: '349.00 MAD',
    },
    {
      id: 3,
      img1: 'https://i.ibb.co/5Tdkg7R/test1.png',
      img2: 'https://i.ibb.co/BNQvDBN/air-jordan-1-elevate-low-se-mens-shoes-green-1.png',
      title: 'Air Jordan 1 Low',
      priceOld: '599.00 MAD',
      priceNew: '349.00 MAD',
    },
    {
      id: 4,
      img1: 'https://i.ibb.co/NpkTCmh/252b6f0d-7871-48a3-8d7f-075fa30d7970.png',
      img2: 'https://i.ibb.co/mcwLspq/596f9d18-eca1-4cd2-bcd4-6c8ed70e98ae.png',
      title: 'Air Jordan 1 Low',
      priceOld: '599.00 MAD',
      priceNew: '349.00 MAD',
    },
  ];

  return (
    <div className='Products' id='NosProduits'>
      <div className='ProductsContent'>
        <div className='ProductsContent-Titles'>
          <h1>Nos Produits</h1>
          <h2>Découvrez notre sélection unique, alliant qualité, créativité et innovation pour répondre à vos besoins.</h2>
        </div>
        <div className='ProductsCards'>
          {products.map((product, index) => (
            <div
              key={product.id}
              className='product-card'
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className='product-img'>
                <img
                  src={hoveredCard === index && product.img2 ? product.img2 : product.img1}
                  alt={product.title}
                />
              </div>
              <div className='product-details'>
                <div className='productTitle'>
                  <h2>{product.title}</h2>
                </div>
                <div className='productPrincing'>
                  <span>{product.priceOld}</span>
                  <span>{product.priceNew}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='ProductsContent-Btn'>
          <Link to="/Produits "><span>Voir Tout Les Produits</span></Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
