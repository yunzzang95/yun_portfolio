import React, { useEffect, useState, forwardRef } from 'react';

const Section01 = forwardRef((props, ref) => {
    const [bigTitVisible, setBigTitVisible] = useState([false, false, false]);
    const [smallTitVisible, setSmallTitVisible] = useState([false, false]);

    useEffect(() => {
        const bigTitTimers = [500, 1200, 1700];
        bigTitTimers.forEach((time, index) => {
            setTimeout(() => {
                setBigTitVisible(prev => {
                    const newVisible = [...prev];
                    newVisible[index] = true;
                    return newVisible;
                });
            }, time);
        });

        const smallTitTimers = [2200, 2700];
        smallTitTimers.forEach((time, index) => {
            setTimeout(() => {
                setSmallTitVisible(prev => {
                    const newVisible = [...prev];
                    newVisible[index] = true;
                    return newVisible;
                });
            }, time);
        });

        return () => {};
    }, []);

    return (
        <section className="section01" ref={ref}>
            <div className="titTop PJWidth">
                <div className="bigTit colorPT">
                    <span className={bigTitVisible[0] ? 'fade-in' : ''}>CODE AND DESIGN</span><br/>
                    <span className={bigTitVisible[1] ? 'fade-in' : ''}>RESPONSIVE WEB</span><br/>
                    <span className={bigTitVisible[2] ? 'fade-in' : ''}>WORKING JUNG YUN HUI</span>
                </div>
                <div className="smallTit">
                    <span className={smallTitVisible[0] ? 'fade-in' : ''}>코드와 디자인을 적절하게 사용하여</span><br/>
                    <span className={smallTitVisible[1] ? 'fade-in' : ''}>반응성이 높은 웹을 작업할 수 있는 웹퍼블리셔 정윤휘입니다.</span>
                </div>
            </div>
            <div className="scroll">SCROLL<br/><span></span></div>
            <div className="titTopBg">
                <video src="https://cdn.pixabay.com/video/2018/11/06/19169-299997243_large.mp4" autoPlay loop muted></video>
            </div>
        </section>
    );
});

export default Section01;