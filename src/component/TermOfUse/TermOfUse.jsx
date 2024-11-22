import React from 'react'
import './TermOfUse.css'
import { Link } from 'react-router-dom';

const TermOfUse = () => {


  return (
    <div className='termofuse'>
        <div className='termofuse-content'>
            <div className='termofuse-header'>
                <h1>Conditions d'utilisation</h1>
            </div>
            <div className='termofuse-body'>
                <h3>Dernière mise à jour en date du 21 novembre 2024.</h3>
                <hr/>
                <h3>Présentation</h3>
                <p>Les présentes conditions générales d'utilisation (CGU) s'appliquent au site web et aux services offerts par AmiRaf, y compris nos succursales et plateformes en ligne qui font référence à ces termes.En accédant ou en utilisant notre site, vous acceptez les conditions générales en vigueur. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre site. AmiRaf se réserve le droit de modifier, ajouter ou supprimer tout ou partie de ces conditions à tout moment, et ce, sans préavis. Les modifications entrent en vigueur dès leur publication sur le site. Il est recommandé de consulter régulièrement ces CGU pour rester informé des éventuelles mises à jour. Votre utilisation continue de notre site après la publication de modifications signifie votre acceptation des nouvelles conditions.</p>
            </div>
            <div className='termofuse-body'>
                <h3>Utilisation du site</h3>
                <p>Pour utiliser ce site, vous devez avoir au moins 18 ans ou être accompagné d’un parent ou d’un tuteur légal. Nous vous accordons une licence limitée, non transférable et révocable pour utiliser le site dans le cadre des présentes conditions. Cette licence a pour unique but de permettre l'achat d'articles personnels proposés sur le site. Toute utilisation commerciale ou pour le compte de tiers est interdite, sauf autorisation écrite expresse d'AmiRaf. Toute violation de ces conditions entraînera l'annulation immédiate de la licence sans préavis. Le contenu du site est fourni à titre informatif uniquement. Les descriptions de produits et avis publiés sur le site sont ceux de leurs auteurs respectifs et n'engagent pas la responsabilité d'AmiRaf. Certains services nécessitent une inscription ou un abonnement. En vous inscrivant, vous acceptez de fournir des informations exactes et à jour, et de maintenir la confidentialité de vos identifiants. Vous êtes seul responsable de toutes les activités effectuées depuis votre compte. Veuillez nous informer immédiatement en cas d’utilisation non autorisée de votre compte. AmiRaf décline toute responsabilité pour les pertes ou dommages résultant d’un manquement à cette obligation. En vous inscrivant, vous acceptez de recevoir des communications promotionnelles. Vous pouvez vous désabonner à tout moment via le lien présent dans chaque e-mail promotionnel.</p>
            </div>
            <div className='termofuse-body'>
                <h3>Contenu utilisateur</h3>
                <p>Les commentaires, suggestions, questions ou autres contenus que vous soumettez sur le site deviennent la propriété exclusive d'AmiRaf. Vous nous accordez le droit d’utiliser ces contenus ainsi que le nom associé à leur publication. Vous ne devez pas soumettre de contenu trompeur ou diffamatoire. AmiRaf se réserve le droit de modifier ou supprimer tout contenu soumis par les utilisateurs.</p>
            </div>
            <div className='termofuse-body'>
                <h3>Traitement des commandes et tarification</h3>
                <p>Dans certains cas, une commande peut être rejetée pour diverses raisons. Nous nous réservons le droit de refuser ou d'annuler une commande à tout moment, notamment en cas d’erreurs de tarification ou d’informations insuffisantes. En cas d’erreur dans le prix d’un produit, nous nous réservons le droit de vous contacter pour des instructions ou d’annuler votre commande en vous informant.</p>
            </div>
            <div className='termofuse-body'>
                <h3>Propriété intellectuelle</h3>
                <p>Tous les contenus et éléments présents sur le site AmiRaf, y compris les textes, images, vidéos, codes et logiciels, sont protégés par les lois sur la propriété intellectuelle et sont la propriété exclusive d'AmiRaf. Toute utilisation non autorisée est strictement interdite.</p>
            </div>
            <div className='termofuse-body'>
                <h3>Loi applicable et juridiction</h3>
                <p>Les présentes CGU sont régies par les lois marocaines. Tout litige sera soumis à la compétence exclusive des tribunaux marocains.</p>
            </div>
            <div className='termofuse-body'>
                <h3>Résiliation</h3>
                <p>AmiRaf se réserve le droit de mettre fin à ces CGU ou de suspendre l'accès au site à tout moment, sans préavis. En cas de résiliation, vous devez cesser immédiatement toute utilisation du site. Si vous êtes insatisfait de l'un des services ou des termes, votre seul recours est d'arrêter d'utiliser le site.</p>
            </div>
            <div className='termofuse-end'>
                <div className='text-h1'><h1>Get in Touch!</h1></div>
                <div className='text-p'><p>Contact AmiraF for personalized assistance and expert advice on all your shopping needs.</p></div>
                <div className='text-btn'><Link to='/'>Contact Us</Link></div>
            </div>
        </div>
    </div>
  )
}

export default TermOfUse