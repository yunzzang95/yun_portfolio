import React, { forwardRef, useState } from 'react';
import DetailDesign from '../script/project/DetailDesign';
import MyCarousel from '../script/project/MyCarousel';

const Section04 = forwardRef(({ mainRef }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImages, setSelectedImages] = useState([]);

    const handleImageClick = (images) => {
        console.log("Image clicked!", images); // 디버깅용 로그 추가
        setSelectedImages(images);
        setIsOpen(true);
        if (mainRef && mainRef.current) {
            mainRef.current.style.overflow = 'hidden'; // 스크롤 비활성화
        }
    };

    const closeModal = () => {
        setIsOpen(false);
        setSelectedImages([]);
        if (mainRef && mainRef.current) {
            mainRef.current.style.overflow = 'auto'; // 스크롤 활성화
        }
    };

    return (
        <section className="section04 PJWidth PJPadding" ref={ref} id="design">
            <div className="tit colorPT" data-aos="fade-up" data-aos-duration="1500">DESIGN</div>
            <MyCarousel />
            <DetailDesign onImageClick={handleImageClick} />
            {/* 모달팝업 영역 */}
            {isOpen && (
                <div className="modal" onClick={closeModal}>
                    <span className="close" onClick={closeModal}>&times;</span>
                    <div className="modal-content">
                        <div className="modal-images">
                            {selectedImages.map((image, index) => (
                                <img key={index} src={image} alt={`Selected ${index + 1}`} />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
});

export default Section04;