// Header.js
import React from 'react';
import CurrentTime from "../script/CurrentTime";

function Header({ activeSection, scrollToSection }) {
    const handleLinkClick = (index, event) => {
        event.preventDefault();  // 기본 링크 클릭 동작 방지
        scrollToSection(index);  // 해당 섹션으로 스크롤
    };

    return (
        <section className="header">
            <div className="PJWidth clearfix">
                <a href="/" className="logo">@YunZzang</a>
                <div className="topNav">
                    <ul>
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