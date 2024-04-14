import React, { useEffect, useState } from 'react';
import aboutImage from "./myImage/image.png";

function HeroSection() {

    const [imageVisible, setImageVisible] = useState(false);


    useEffect(() => {

        setImageVisible(true);
    }, []); //

    return (
        <section id="hero-section" className="main-menu-section">
            <h2>Welcome!</h2>
            <p>PixelPerfect Solutions is a digital agency specializing in creating visually stunning and user-friendly websites for clients across various industries.</p>
            {}
            <img src={aboutImage} alt="PixelPerfect Solutions Office" className="main-menu-section" style={{ opacity: imageVisible ? 1 : 0 }} />
        </section>
    );
}

export default HeroSection;
