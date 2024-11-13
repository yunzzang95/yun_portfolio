// Header.js
import React, { useState } from 'react';
import CurrentTime from "../script/CurrentTime";

function Header({ activeSection, scrollToSection }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // 메뉴 상태 추가

    const handleLinkClick = (index, event) => {
        event.preventDefault();  // 기본 링크 클릭 동작 방지
        scrollToSection(index);  // 해당 섹션으로 스크롤
        if (window.innerWidth <= 768) {
            setIsMenuOpen(false); // 모바일에서 링크 클릭 시 메뉴 닫기
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // 메뉴 열기/닫기 토글
    };

    return (
        <section className="header">
            <div className="PJWidth clearfix">
                <a href="/" className="logo">@YunZzang</a>
                <div className="topNav">
                    <button className="menuToggle" onClick={toggleMenu}>
                        {isMenuOpen ? (
                            <span className="closeIcon">×</span> // 엑스 아이콘
                        ) : (
                            <span className="hamburgerIcon">☰</span> // 햄버거 아이콘
                        )}
                    </button>
                    <ul className={`navList ${isMenuOpen ? 'open' : ''}`}>
                        <li><CurrentTime /></li>
                        <li>
                            <a href="#section1" className={activeSection === 0 ? 'active' : ''} onClick={(e) => handleLinkClick(0, e)}>
                                HOME
                            </a>
                        </li>
                        <li>
                            <a href="#section2" className={activeSection === 1 ? 'active' : ''} onClick={(e) => handleLinkClick(1, e)}>
                                ABOUT ME
                            </a>
                        </li>
                        <li>
                            <a href="#section3" className={activeSection === 2 ? 'active' : ''} onClick={(e) => handleLinkClick(2, e)}>
                                PROJECT
                            </a>
                        </li>
                        <li>
                            <a href="#section4" className={activeSection === 3 ? 'active' : ''} onClick={(e) => handleLinkClick(3, e)}>
                                DESIGN
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Header;