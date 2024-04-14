import React from 'react';
import './App.css';
import HeroSection from './HeroSection';
import PortfolioSection from './PortfolioSection';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>PixelPerfect Solutions</h1>
                <nav>
                    <ul>
                        <li><a href="#hero-section">Home</a></li>
                        <li><a href="#portfolio-section">Portfolio</a></li>
                        <li><a href="#about-section">About Us</a></li>
                        <li><a href="#contact-section">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <HeroSection />
                <PortfolioSection />
                <AboutSection />
                <ContactSection />
            </main>
            <footer>
                <p>&copy; 2024 PixelPerfect Solutions. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
