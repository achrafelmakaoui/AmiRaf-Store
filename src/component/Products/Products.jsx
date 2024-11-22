import React from 'react'
import './Products.css'

const Products = () => {
  return (
    <div className='Products' id='NosProduits'>
        <div className='ProductsContent'>
            <div className='ProductsContent-Titles'>
                <h1>Nos Produits</h1>
                <h2>Découvrez notre sélection unique, alliant qualité, créativité et innovation pour répondre à vos besoins.</h2>
            </div>
            <div className='ProductsCards'>
                <div className='product-card'>
                    <div className='product-img'>
                        <img src="https://i.ibb.co/nz3pDMQ/air-jordan-1-black-men.png" alt="product1"/>
                    </div>
                    <div className='product-details'>
                        <div className='productTitle'>
                            <h2>Air Jordan 1 Low</h2>
                        </div>
                        <div className='productPrincing'>
                            <span>599.00 MAD</span>
                            <span>349.00 MAD</span>
                        </div>
                    </div>
                </div>
                <div className='product-card'>
                    <div className='product-img'>
                        <img src="https://i.ibb.co/5WqcsXL/7721e342-bd9b-45af-9836-72bf9d729b9e.png" alt="product1"/>
                    </div>
                    <div className='product-details'>
                        <div className='productTitle'>
                            <h2>Air Jordan 1 Low</h2>
                        </div>
                        <div className='productPrincing'>
                            <span>599.00 MAD</span>
                            <span>349.00 MAD</span>
                        </div>
                    </div>
                </div>
                <div className='product-card'>
                    <div className='product-img'>
                        <img src="https://i.ibb.co/5Tdkg7R/test1.png" alt="product1"/>
                    </div>
                    <div className='product-details'>
                        <div className='productTitle'>
                            <h2>Air Jordan 1 Low</h2>
                        </div>
                        <div className='productPrincing'>
                            <span>599.00 MAD</span>
                            <span>349.00 MAD</span>
                        </div>
                    </div>
                </div>
                <div className='product-card'>
                    <div className='product-img'>
                        <img src="https://i.ibb.co/NpkTCmh/252b6f0d-7871-48a3-8d7f-075fa30d7970.png" alt="product1"/>
                    </div>
                    <div className='product-details'>
                        <div className='productTitle'>
                            <h2>Air Jordan 1 Low</h2>
                        </div>
                        <div className='productPrincing'>
                            <span>599.00 MAD</span>
                            <span>349.00 MAD</span>
                        </div>
                    </div>
                </div>
                {/* <div className='product-card'>
                    <div className='product-img'>
                        <img src="https://i.ibb.co/t4FrmD5/34b64f8a-60fe-42d5-8724-ab5c303e62f5.png" alt="product1"/>
                    </div>
                    <div className='product-details'>
                        <div className='productTitle'>
                            <h2>Air Jordan 1 Low</h2>
                        </div>
                        <div className='productPrincing'>
                            <span>599.00 MAD</span>
                            <span>349.00 MAD</span>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default Products