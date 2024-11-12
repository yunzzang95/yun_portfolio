import React, { useEffect, useRef, useState } from 'react';

const FadeIn = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null); // section에 대한 ref 생성

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true); // 요소가 보이면 상태 변경
                } else {
                    setIsVisible(false); // 요소가 보이지 않으면 상태 변경
                }
            });
        }, { threshold: 0.1 }); // 10%가 보일 때 트리거

        if (sectionRef.current) {
            observer.observe(sectionRef.current); // section 요소 관찰 시작
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current); // 관찰 해제
            }
        };
    }, []);

    return (
        <div ref={sectionRef} className={`section ${isVisible ? 'fade-in' : ''}`}>
            {children}
        </div>
    );
};

export default FadeIn;