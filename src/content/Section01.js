import React, { useEffect, useState, forwardRef } from 'react';

const Section01 = forwardRef((props, ref) => {
    const [bigTitVisible, setBigTitVisible] = useState([false, false, false]);
    const [smallTitVisible, setSmallTitVisible] = useState([false, false]);
    const [isMobile, setIsMobile] = useState(false);
    const [bigTitClass, setBigTitClass] = useState('');
    const [smallTitClass, setSmallTitClass] = useState('');

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 767);
        };

        // 초기 화면 크기 설정
        handleResize();

        // 리사이즈 이벤트 리스너 추가
        window.addEventListener('resize', handleResize);
        
        // 컴포넌트 언마운트 시 리스너 제거
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const bigTitTimers = [500, 1200, 1700];
        bigTitTimers.forEach((time, index) => {
            setTimeout(() => {
                setBigTitVisible(prev => {
                    const newVisible = [...prev];
                    newVisible[index] = true;
                    return newVisible;
                });
                // bigTit에 fade-in 클래스 추가
                setBigTitClass('fade-in');
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
                // smallTit에 fade-in 클래스 추가
                setSmallTitClass('fade-in');
            }, time);
        });

        return () => {};
    }, []);

    return (
        <section className="section01" ref={ref}>
            <div className="titTop PJWidth">
                <div className={`bigTit colorPT ${bigTitClass}`}>
                    <span className={bigTitVisible[0] ? 'fade-in' : ''}>CODE AND DESIGN </span><br/>
                    <span className={bigTitVisible[1] ? 'fade-in' : ''}>WEB PUBLISHER </span><br/>
                    <span className={bigTitVisible[2] ? 'fade-in' : ''}>WORKING JUNG YUN HUI </span>
                </div>
                <div className={`smallTit ${smallTitClass}`}>
                    <span className={smallTitVisible[0] ? 'fade-in' : ''}>코드와 디자인을 적절하게 사용하여 </span><br/>
                    <span className={smallTitVisible[1] ? 'fade-in' : ''}>반응성이 높은 웹을 작업할 수 있는 웹퍼블리셔 정윤휘입니다. </span>
                </div>
            </div>
            <div className="scroll">SCROLL<br/><span></span></div>
            <div className="titTopBg">
                <video src="https://cdn.pixabay.com/video/2018/11/06/19169-299997243_large.mp4" autoPlay loop muted playsinline></video>
            </div>
        </section>
    );
});

export default Section01;