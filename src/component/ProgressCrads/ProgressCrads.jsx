import React from 'react';
import { useLocation } from 'react-router-dom';
import './ProgressCrads.css';
import Bag from '../Images/bag.png';
import Rocket from '../Images/rocket.png';
import Gift from '../Images/gift.png';
import PhoneCall from '../Images/phonecall.png';

const ProgressCrads = () => {
  const location = useLocation();
  const isProduitsPage = location.pathname === '/Produits';

  return (
    <div className="ProgressCrads">
      <div className="ProgressCradsContent">
        <div
          className={
            isProduitsPage
              ? 'ProductProgressCradsContent-Titles'
              : 'ProgressCradsContent-Titles'
          }
        >
          <h1>Chez AmiRaf Seulement</h1>
          <h2>Votre Confiance, Notre Priorité – Découvrez nos avantages exclusifs</h2>
        </div>
        <div className="ProgressCradsContent-cards">
          <div className="Progress-card">
            <div className="Progress-card-img">
              <img src={Bag} alt="Bag" />
            </div>
            <div className="Progress-card-text">
              <h3>Payez à livraison</h3>
              <p>Disponible partout au Maroc.</p>
            </div>
          </div>
          <div className="Progress-card">
            <div className="Progress-card-img">
              <img src={Rocket} alt="Rocket" />
            </div>
            <div className="Progress-card-text">
              <h3>Livraison rapide</h3>
              <p>Nous priorisons la relation client</p>
            </div>
          </div>
          <div className="Progress-card">
            <div className="Progress-card-img">
              <img src={Gift} alt="Gift" />
            </div>
            <div className="Progress-card-text">
              <h3>Garantie réelle</h3>
              <p>Nos articles sont tous certifiés</p>
            </div>
          </div>
          <div className="Progress-card">
            <div className="Progress-card-img">
              <img src={PhoneCall} alt="Phone Call" />
            </div>
            <div className="Progress-card-text">
              <h3>Service client</h3>
              <p>Plus de soucis sur la sécurité.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressCrads;
