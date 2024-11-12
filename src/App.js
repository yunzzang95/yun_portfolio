import React, { useEffect, useState, useRef } from 'react';
import 'aos/dist/aos.css';
import './App.css';
import Header from './content/Header';
import Section01 from './content/Section01';
import Section02 from './content/Section02';
import Section03 from './content/Section03';
import Section04 from './content/Section04';
import TopButton from './script/TopButton';
import Footer from './content/Footer';


function App() {
    const [showTopButton, setShowTopButton] = useState(false);
    const [activeSection, setActiveSection] = useState(0);
    const sectionRefs = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const clientHeight = window.innerHeight;
            setShowTopButton(scrollY > 10);

            sectionRefs.current.forEach((section, index) => {
                if (section && section.getBoundingClientRect().top >= 0 && section.getBoundingClientRect().top < clientHeight) {
                    setActiveSection(index);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (index) => {
        const section = sectionRefs.current[index];
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <main>
            <Header activeSection={activeSection} scrollToSection={scrollToSection} />
            <Section01 ref={(el) => (sectionRefs.current[0] = el)} />
            <div id="aboutMe"><Section02 ref={(el) => (sectionRefs.current[1] = el)} /></div>
            <Section03 ref={(el) => (sectionRefs.current[2] = el)} />
            <Section04 ref={(el) => (sectionRefs.current[3] = el)} />
            <Footer />
            <TopButton show={showTopButton} scrollToTop={scrollToTop} />
        </main>
    );
}

export default App;