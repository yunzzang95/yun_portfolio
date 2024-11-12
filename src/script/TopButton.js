import React from 'react';

const TopButton = ({ show, scrollToTop }) => {
    return (
        <button className={`topButton ${show ? 'show' : ''}`} onClick={scrollToTop}>
            ↑
        </button>
    );
};

export default TopButton;