import React, { useState } from 'react';
import './PortfolioSection.css';
import SectionTitle from './SectionTitle';
import eTicaretImage from './e-ticaret.png';
import kisiselWebSiteImage from './kisisel-web-site-ornekleri.png';
import mobilUygulamaArayuzleriImage from './mobiluygulamaarayuzleri.png';

function PortfolioSection() {

    const portfolioItems = [
        { id: 1, title: 'E-commerce site', description: 'An e-commerce site where customers can review products, add them to the cart and pay.', imageUrl: eTicaretImage },
        { id: 2, title: 'Personal website ', description: 'Creating a personal portfolio site for a designer, photographer or artist.', imageUrl: kisiselWebSiteImage },
        { id: 3, title: 'Mobile application interfaces', description: 'Developing mobile applications for iOS or Android. The app should be compatible across different screen sizes and devices and provide a consistent experience across users.', imageUrl: mobilUygulamaArayuzleriImage }
    ];



    const [activeIndex, setActiveIndex] = useState(0);


    const goToPrevItem = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? portfolioItems.length - 1 : prevIndex - 1));
    };


    const goToNextItem = () => {
        setActiveIndex((prevIndex) => (prevIndex === portfolioItems.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <section id="portfolio-section" className="portfolio-section">
            <SectionTitle title="Portfolio" /> {}
            <div className="portfolio-container">
                {}
                {portfolioItems.map((item, index) => (
                    <a key={item.id} href="https://github.com/AkifCan38/PixelPerfect-Website/tree/main" className={`portfolio-item ${index === activeIndex ? 'active' : ''}`}>
                        <img src={item.imageUrl === 'blank' ? '' : item.imageUrl} alt={item.title} />
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </a>
                ))}
            </div>
            {}
            <div className="portfolio-buttons">
                <button className="prev-button" onClick={goToPrevItem}></button>
                <button className="next-button" onClick={goToNextItem}></button>
            </div>
        </section>
    );

}

export default PortfolioSection;
