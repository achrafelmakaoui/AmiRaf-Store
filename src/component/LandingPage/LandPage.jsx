import React, { useEffect, useRef, useState } from 'react'
import './LandPage.css'
import { gsap, Power2 } from 'gsap';
import { Link } from 'react-router-dom';
import Sheild from '../Images/Sheild.png'
import Badge from '../Images/Badge.png'
import Star from '../Images/Star.png'

const LandPage = () => {
    const TextAnimation = useRef();
    const ImgAnimation = useRef();
    const paraghAnimation = useRef();
    const iconsAnimation = useRef();

    useEffect(() => {
        const tl = gsap.timeline();
 
        tl.fromTo(
            TextAnimation.current,
            1,
            { opacity: 0, yPercent: 20, ease: Power2.easeInOut },
            { opacity: 1, yPercent: 0, ease: Power2.easeInOut },
            0.02,
            '-=1'
        );
    
        tl.fromTo(
            paraghAnimation.current,
            0.5,
            { yPercent: 130, opacity: 0, stagger: 0.02, ease: Power2.easeInOut },
            { yPercent: 0, opacity: 1, stagger: 0.02, ease: Power2.easeInOut },
            '-=0.5'
        );
        tl.fromTo(
            iconsAnimation.current,
            0.5,
            { yPercent: 130, opacity: 0, stagger: 0.02, ease: Power2.easeInOut },
            { yPercent: 0, opacity: 1, stagger: 0.02, ease: Power2.easeInOut },
            '-=0.5'
        );
        tl.fromTo(ImgAnimation.current, 1, { opacity: 0 }, { opacity: 1, ease: Power2.easeInOut }, '-=1.6');
    }, []);

    const img = [
        Badge,
        Sheild,
        Star,
      ];
      
      const [currentImgIndex, setCurrentImgIndex] = useState(0);
      
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImgIndex((prevIndex) =>
            prevIndex === img.length - 1 ? 0 : prevIndex + 1
          );
        }, 4000);
      
        return () => clearInterval(interval);
      }, [img.length]);

  return (
    <section className="home" id="Home">
        <div className='container'>
            <div className='hero-main'>
                <div className='hero-text'>
                    <h1 ref={TextAnimation}>Shopping Créatif En Ligne</h1>
                    <p ref={paraghAnimation}>AmiRaf vous offre une expérience de shopping inédite, alliant créativité, style moderne et innovation, avec des produits d'une qualité exceptionnelle. Chaque article est soigneusement conçu pour enrichir votre quotidien, avec des designs uniques, un service personnalisé et un engagement constant pour répondre à vos besoins et dépasser vos attentes.</p>
                    <span ref={iconsAnimation} className='secondSpan'>
                        <a href='#NosProduits'>Voir Les Produits <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></a>
                        <Link to="/contact">Contactez Nous <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg></Link>
                    </span>
                </div>
                <div className='hero-img' ref={ImgAnimation}>
                    {img.map((src, index) => (
                        <img
                        key={index}
                        src={src}
                        alt='Badge'
                        className={`slide-img ${index === currentImgIndex ? 'active' : ''} ${index === (currentImgIndex - 1 + img.length) % img.length ? 'exit' : ''}`}
                        />
                    ))}                
                </div>
            </div>
        </div>
    </section>

  )
}

export default LandPage