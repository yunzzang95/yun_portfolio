import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function MyCarousel() {
    const carouselRef = useRef(null); // ref 생성

    const images = [
        { id: 1, src: require('../../images/card1.jpg') },
        { id: 2, src: require('../../images/card2.jpg') },
        { id: 3, src: require('../../images/card3.jpg') },
        { id: 4, src: require('../../images/card4.jpg') },
        { id: 5, src: require('../../images/card5.jpg') },
        { id: 6, src: require('../../images/card6.jpg') },
        { id: 7, src: require('../../images/card7.jpg') },
        { id: 8, src: require('../../images/card8.jpg') },
        { id: 9, src: require('../../images/card9.jpg') },
    ];

    useEffect(() => {
        // DOM이 렌더링된 후에 Slick 초기화
        if (carouselRef.current) {
            $(carouselRef.current).slick({
                centerMode: true,
                centerPadding: '14rem',
                slidesToShow: 3,
                infinite: true,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            arrows: false,
                            centerMode: true,
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            arrows: false,
                            centerMode: true,
                            slidesToShow: 1,
                            draggable : true,
                        }
                    }
                ]
            });
        }

        // cleanup function
        return () => {
            if (carouselRef.current) {
                $(carouselRef.current).slick('unslick'); // Slick 초기화 해제
            }
        };
    }, []); // 빈 배열로 설정하여 처음 렌더링 시에만 실행

    return (
        <div className="carousel" ref={carouselRef} data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500"> {/* ref를 설정 */}
            {images.map((img) => (
                <div key={img.id}>
                    <img
                        src={img.src}
                        alt={`Slide ${img.id}`}
                        className="carousel-image"
                    />
                </div>
            ))}
        </div>
    );
}

export default MyCarousel;