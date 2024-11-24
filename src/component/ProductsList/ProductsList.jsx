import React, { useEffect, useState } from 'react'
import './ProductsList.css';

const ProductsList = () => {
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
        priceOld: '599.00 DH',
        priceNew: '349.00 DH',
      },
      {
        id: 2,
        img1: 'https://i.ibb.co/5WqcsXL/7721e342-bd9b-45af-9836-72bf9d729b9e.png',
        img2: 'https://i.ibb.co/ws0SydH/51281cfb-9172-44c6-9c10-be37e7b9dffa.png',
        title: 'Air Jordan 1 Low',
        priceOld: '599.00 DH',
        priceNew: '349.00 DH',
      },
      {
        id: 3,
        img1: 'https://i.ibb.co/5Tdkg7R/test1.png',
        img2: 'https://i.ibb.co/BNQvDBN/air-jordan-1-elevate-low-se-mens-shoes-green-1.png',
        title: 'Air Jordan 1 Low',
        priceOld: '599.00 DH',
        priceNew: '349.00 DH',
      },
      {
        id: 4,
        img1: 'https://i.ibb.co/NpkTCmh/252b6f0d-7871-48a3-8d7f-075fa30d7970.png',
        img2: 'https://i.ibb.co/mcwLspq/596f9d18-eca1-4cd2-bcd4-6c8ed70e98ae.png',
        title: 'Air Jordan 1 Low',
        priceOld: '599.00 DH',
        priceNew: '349.00 DH',
      },
      {
        id: 5,
        img1: 'https://i.ibb.co/t4FrmD5/34b64f8a-60fe-42d5-8724-ab5c303e62f5.png',
        img2: 'https://i.ibb.co/Fhjm1tB/fa011502-52f8-4e56-b890-b188631dbec0.png',
        title: 'Air Jordan 1 Low',
        priceOld: '599.00 DH',
        priceNew: '349.00 DH',
      },
      {
        id: 6,
        img1: 'https://i.ibb.co/FW7J3Jt/6cc3b5d4-3a76-4226-86e0-7943716b4a1b.png',
        img2: 'https://i.ibb.co/GFLs6r3/air-jordan-1-elevate-low-womens-shoes-yellow.png',
        title: 'Air Jordan 1 Low',
        priceOld: '599.00 DH',
        priceNew: '349.00 DH',
      },
      {
        id: 7,
        img1: 'https://i.ibb.co/syCQXkv/test3.png',
        img2: 'https://i.ibb.co/rMLncTg/air-jordan-1-elevate-low-womens-shoes-red-4.png',
        title: 'Air Jordan 1 Low',
        priceOld: '599.00 DH',
        priceNew: '349.00 DH',
      },
      {
        id: 8,
        img1: 'https://i.ibb.co/t4FrmD5/34b64f8a-60fe-42d5-8724-ab5c303e62f5.png',
        img2: 'https://i.ibb.co/Fhjm1tB/fa011502-52f8-4e56-b890-b188631dbec0.png',
        title: 'Air Jordan 1 Low',
        priceOld: '599.00 DH',
        priceNew: '349.00 DH',
      },
    ];


    const titles = [
        "Découvrez Notre Collection Exclusive",
        "Nouveaux Produits en Stock",
        "Offres Spéciales à Ne Pas Manquer",
        "Qualité et Élégance Garantie",
      ];
    
      const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentTitleIndex((prevIndex) =>
            prevIndex === titles.length - 1 ? 0 : prevIndex + 1
          );
        }, 4000); 
    
        return () => clearInterval(interval);
      }, [titles.length]);

  return (
    <div className='ProductsList'>
        <div className='bannerProductList'>
            <h1>{titles[currentTitleIndex]}</h1>
        </div>
        <div className='ProductsListContent'>
            <div className='ProductsListContent-Titles'>
                <h1>Nos Produits</h1>
                <h2>Découvrez notre sélection unique, alliant qualité, créativité et innovation pour répondre à vos besoins.</h2>
            </div>
            <div className='ProductsListCards'>
                {products.map((product, index) => (
                    <div
                        key={product.id}
                        className='ProductsList-card'
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className='ProductsList-img'>
                            <img
                                src={hoveredCard === index && product.img2 ? product.img2 : product.img1}
                                alt={product.title}
                            />
                            <div className='productAddToCart'>
                                <svg class="svg-icon" fill='currentColor' width="24" height="24" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M849.066667 349.866667h-115.2c4.266667-25.6 0-51.2-8.533334-81.066667-34.133333-119.466667-157.866667-187.733333-277.333333-157.866667-55.466667 21.333333-102.4 59.733333-132.266667 110.933334-21.333333 38.4-29.866667 85.333333-29.866666 128H174.933333c-17.066667 0-29.866667 12.8-29.866666 34.133333v337.066667c0 115.2 93.866667 213.333333 213.333333 213.333333h200.533333c17.066667 0 34.133333-12.8 34.133334-34.133333s-12.8-34.133333-34.133334-34.133334H354.133333c-81.066667 0-149.333333-68.266667-149.333333-149.333333V413.866667H810.666667v174.933333c0 17.066667 12.8 34.133333 34.133333 34.133333s34.133333-12.8 34.133333-34.133333V384c0-21.333333-12.8-34.133333-29.866666-34.133333z m-179.2 0H354.133333c-4.266667-34.133333 0-68.266667 17.066667-98.133334C392.533333 213.333333 426.666667 187.733333 469.333333 174.933333c85.333333-25.6 174.933333 25.6 196.266667 110.933334 4.266667 21.333333 8.533333 42.666667 4.266667 64z" /><path d="M849.066667 704h-132.266667v-132.266667c0-17.066667-12.8-29.866667-34.133333-29.866666-17.066667 0-29.866667 12.8-29.866667 34.133333v132.266667h-132.266667c-17.066667 0-29.866667 12.8-29.866666 34.133333 0 17.066667 12.8 29.866667 34.133333 29.866667h132.266667v132.266666c0 17.066667 12.8 29.866667 34.133333 29.866667 17.066667 0 29.866667-12.8 29.866667-34.133333V768H853.333333c17.066667 0 29.866667-12.8 29.866667-34.133333-4.266667-17.066667-17.066667-29.866667-34.133333-29.866667z"/></svg>
                            </div>
                        </div>
                        <div className='ProductsList-details'>
                            <div className='ProductsListTitle'>
                                <h2>{product.title}</h2>
                            </div>
                            <div className='ProductsListPrincing'>
                                <span>{product.priceOld}</span>
                                <span>{product.priceNew}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default ProductsList