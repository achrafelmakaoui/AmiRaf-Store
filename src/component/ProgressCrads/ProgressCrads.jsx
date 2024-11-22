import React from 'react'
import './ProgressCrads.css'
import Bag from '../Images/bag.png'
import Rocket from '../Images/rocket.png'
import Gift from '../Images/gift.png'
import PhoneCall from '../Images/phonecall.png'
const ProgressCrads = () => {
  return (
    <div className='ProgressCrads'>
        <div className='ProgressCradsContent'>
            <div className='ProgressCradsContent-Titles'>
                <h1>Chez AmiRaf Seulement</h1>
                <h2>Votre Confiance, Notre Priorité – Découvrez nos avantages exclusifs</h2>
            </div>
            <div className='ProgressCradsContent-cards'>
                <div class="Progress-card">
                    <div class="Progress-card-img">
                        <img src={Bag} alt='Bag'/>
                    </div>
                    <div className='Progress-card-text'>
                        <h3>Paiement a la Livraison</h3>
                        <p>Disponible partout au Maroc.</p>
                    </div>
                </div>
                <div class="Progress-card">
                    <div class="Progress-card-img">
                        <img src={Rocket} alt='Rocket'/>
                    </div>
                    <div className='Progress-card-text'>
                        <h3>Livraison rapide</h3>
                        <p>Nous priorisons la relation client</p>
                    </div>
                </div>
                <div class="Progress-card">
                    <div class="Progress-card-img">
                        <img src={Gift} alt='Gift'/>
                    </div>
                    <div className='Progress-card-text'>
                        <h3>Véritable Garantie</h3>
                        <p>Nos articles sont tous certifiés</p>
                    </div>
                </div>
                <div class="Progress-card">
                    <div class="Progress-card-img">
                        <img src={PhoneCall} alt='Phone Call'/>
                    </div>
                    <div className='Progress-card-text'>
                        <h3>Service après vente</h3>
                        <p>Plus de soucis sur la sécurité.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProgressCrads