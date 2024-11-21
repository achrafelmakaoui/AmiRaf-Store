import React , { useEffect, useRef } from 'react'
import './HeroSection.css'
import Bag from '../Images/bag.png'
import { gsap, Power2 } from 'gsap';

const HeroSection = () => {
    const TextAnimation = useRef();
    const ImgAnimation = useRef();
    const Img2Animation = useRef();
    const paraghAnimation = useRef();
    const iconsAnimation = useRef();
    const iconsAnimation2 = useRef();
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
    
        // Wave Animation with a delay after text animation
        tl.fromTo(
            paraghAnimation.current,
            0.5,
            { yPercent: 20, opacity: 0, stagger: 0.02, ease: Power2.easeInOut },
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
        tl.fromTo(
            iconsAnimation2.current,
            0.5,
            { yPercent: 130, opacity: 0, stagger: 0.02, ease: Power2.easeInOut },
            { yPercent: 0, opacity: 1, stagger: 0.02, ease: Power2.easeInOut },
            '-=0.5'
        );
        tl.fromTo(ImgAnimation.current, 1, { opacity: 0 }, { opacity: 1, ease: Power2.easeInOut }, '-=1.6');
        tl.fromTo(Img2Animation.current, 1, { opacity: 0, y:60 }, { opacity: 1, y:0, ease: Power2.easeInOut }, '-=1.6');
    }, []);

  return (
    <div className='heroBanner'>
        <div className='heroContent'>
            <div className='heroCompanyName' ref={TextAnimation}>
                <span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-git-merge"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path></svg></span>
                <span>Bienvenue chez AmiRaf</span>
                <span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-git-merge"><path d="M6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9C7.65685 9 9 7.65685 9 6C9 4.34315 7.65685 3 6 3Z"/><path d="M18 15C16.3431 15 15 16.3431 15 18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15Z"/><path d="M18 3V15C18 12.6131 17.0518 10.3239 15.364 8.63604C13.6761 6.94821 11.3869 6 9 6"/></svg></span>
            </div>
            <div className='heroTitle' ref={paraghAnimation}>
                <h1>Votre Destination Créative</h1>
                <div className='heroTitleDesignLine2'>
                    <h1>Pour Le</h1>
                    <span><img src={Bag} alt='Bag'/></span>
                    <h1>En Ligne</h1>
                </div>
            </div>
            <div className='heroRediction' ref={iconsAnimation2}>
                <a className='btn-scroll' href='/#'><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up-right"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>Voir les Produits</a>
            </div>
        </div>
    </div>
  )
}

export default HeroSection