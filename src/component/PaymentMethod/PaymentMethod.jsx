import React from 'react'
import './PaymentMethod.css'
import { Link } from 'react-router-dom';

const PaymentMethod = () => {


  return (
    <div className='PaymentMethod'>
        <div className='PaymentMethod-content'>
            <div className='PaymentMethod-header'>
                <h1>Méthodes de Paiement</h1>
            </div>
            <div className='PaymentMethod-body'>
                <h3>Dernière mise à jour en date du 21 novembre 2024.</h3>
                <hr/>
                <h3>Méthodes de Paiement</h3>
                <p>Chez AmiRaf, nous offrons plusieurs options de paiement pour répondre à vos besoins. Voici les méthodes actuellement disponibles ou qui seront prochainement mises en place :</p>
            </div>
            <div className='PaymentMethod-body'>
                <h3>Paiement à la Livraison</h3>
                <p>Le paiement à la livraison est une méthode simple et pratique. Vous pouvez : Commander vos produits en ligne via notre boutique. Choisir l’option "Paiement à la Livraison" lors du passage de votre commande. Payer uniquement lorsque vous recevez votre commande à l’adresse indiquée (domicile, bureau ou tout autre lieu de votre choix). Processus : Nous livrons le produit à l’endroit convenu, et vous effectuez le paiement directement au moment de la réception.</p>
            </div>
            <div className='PaymentMethod-body'>
                <h3>Paiement par Virement Bancaire (Bientôt Disponible)</h3>
                <p>Le paiement par virement bancaire vous permettra de régler vos commandes en transférant le montant exact sur notre compte bancaire ou via l’une des agences de transfert d’argent agréées. Processus : Une fois le virement effectué, vous nous informez de la confirmation du paiement. Après validation de la transaction, nous expédions votre commande à l’adresse indiquée.</p>
            </div>
            <div className='PaymentMethod-body'>
                <h3>Paiement via PayPal (Bientôt Disponible)</h3>
                <p>Nous introduirons prochainement l’option de paiement via PayPal, l’un des moyens de paiement en ligne les plus sécurisés et pratiques. Processus : Transférez le montant total de votre commande sur notre compte PayPal. Une fois le paiement confirmé, votre commande sera envoyée à l’adresse indiquée.</p>
            </div>
            <div className='PaymentMethod-end'>
                <div className='text-h1'><h1>Get in Touch!</h1></div>
                <div className='text-p'><p>Contact AmiraF for personalized assistance and expert advice on all your shopping needs.</p></div>
                <div className='text-btn'><Link to='/'>Contact Us</Link></div>
            </div>
        </div>
    </div>
  )
}

export default PaymentMethod