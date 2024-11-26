import React from 'react'
import './PrivacyPolicy.css'
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {

  return (
    <div className='privacyPolicy'>
        <div className='privacyPolicy-content'>
            <div className='privacyPolicy-header'>
                <h1>Politique de Confidentialité</h1>
            </div>
            <div className='privacyPolicy-body'>
                <h3>Dernière mise à jour en date du 21 novembre 2024.</h3>
                <hr/>
                <h3>Politique de confidentialité</h3>
                <p>Chez AmiRaf, nous respectons votre vie privée et nous nous engageons à protéger vos données personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations personnelles. En accédant à notre site ou en utilisant nos services, vous acceptez les pratiques décrites dans cette politique.</p>
            </div>
            <div className='privacyPolicy-body'>
                <h3>Les données que nous collectons</h3>
                <p>Lorsque vous interagissez avec notre site ou effectuez des achats, nous collectons des informations nécessaires à la fourniture de nos services. Ces informations incluent, sans s’y limiter : Votre nom, adresse e-mail, numéro de téléphone, et adresse postale ou de livraison. Les détails de paiement et les informations liées à vos commandes. Ces données nous permettent : De traiter vos commandes et livraisons. D’améliorer votre expérience utilisateur sur notre site. De vous informer des offres, produits ou services susceptibles de vous intéresser (si vous y consentez). Vous pouvez également naviguer sur notre site sans créer de compte ni fournir d'informations personnelles. Votre identité restera anonyme, sauf si vous vous connectez à un compte créé sur notre plateforme.</p>
            </div>
            <div className='privacyPolicy-body'>
                <h3>Autres utilisations de vos informations personnelles</h3>
                <p>Les informations collectées peuvent être utilisées dans les cas suivants : Traitement de vos commandes et gestion de votre compte. Envoi d’e-mails promotionnels ou de notifications concernant vos commandes. Vous pouvez choisir de ne pas recevoir de communications marketing en utilisant le lien de désabonnement dans nos e-mails. Amélioration de notre site, personnalisation de votre expérience et analyse des tendances d’utilisation. Nous pouvons également partager vos coordonnées (nom, adresse) avec des tiers tels que les agents de livraison pour assurer l’exécution de vos commandes.</p>
            </div>
            <div className='privacyPolicy-body'>
                <h3>Tiers et liens vers des sites Web</h3>
                <p>Vos données personnelles peuvent être transmises à des sous-traitants ou partenaires d’AmiRaf, dans le cadre de la livraison, du paiement ou d'autres services liés à votre expérience client. Ces tiers sont tenus de respecter la confidentialité de vos informations. Cependant, AmiRaf ne peut être tenu responsable des politiques de confidentialité de sites tiers accessibles via des liens sur notre site. Nous vous encourageons à consulter les politiques de confidentialité des autres plateformes avant de leur fournir des informations.</p>
            </div>
            <div className='privacyPolicy-body'>
                <h3>Cookies</h3>
                <p>Nous utilisons des cookies pour améliorer votre expérience sur notre site. Les cookies sont de petits fichiers texte stockés sur votre appareil, qui nous permettent de : Vous identifier lors de vos visites répétées sur le site. Enregistrer vos préférences et améliorer la fonctionnalité du panier d'achat. Analyser l'utilisation de notre site via des outils comme Google Analytics. Vous pouvez configurer votre navigateur pour refuser les cookies, mais cela pourrait limiter certaines fonctionnalités de notre site.</p>
            </div>
            <div className='privacyPolicy-body'>
                <h3>Sécurité de vos données</h3>
                <p>Nous mettons en œuvre des mesures de sécurité robustes pour protéger vos données contre tout accès non autorisé, modification ou perte : Vos données sont stockées sur des serveurs sécurisés. Les transactions en ligne sont protégées par un cryptage SSL (Secure Socket Layer). Cependant, aucune méthode de transmission ou de stockage électronique n'est totalement sécurisée. Nous vous recommandons de ne jamais partager vos informations de carte bancaire sans protection supplémentaire et de maintenir la confidentialité de vos identifiants.</p>
            </div>
            <div className='privacyPolicy-body'>
                <h3>Vos droits</h3>
                <p>Vous avez le droit de : Demander l'accès à vos données personnelles détenues par AmiRaf. Corriger toute erreur dans vos informations. Demander la suppression ou l'arrêt de l'utilisation de vos données à des fins marketing. Pour exercer ces droits, contactez notre service client via les canaux indiqués sur notre site.</p>
            </div>
            <div className='privacyPolicy-body'>
                <h3>Modifications de la politique de confidentialité</h3>
                <p>Nous nous réservons le droit de modifier cette politique à tout moment. Les mises à jour seront publiées sur notre site, et votre utilisation continue de nos services constitue une acceptation de ces modifications.</p>
            </div>
            <div className='privacyPolicy-end'>
                <div className='text-h1'><h1>Get in Touch!</h1></div>
                <div className='text-p'><p>Contact AmiraF for personalized assistance and expert advice on all your shopping needs.</p></div>
                <div className='text-btn'><Link to='/contact'>Contact Us</Link></div>
            </div>
        </div>
    </div>
  )
}

export default PrivacyPolicy