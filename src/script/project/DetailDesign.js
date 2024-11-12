import React, { useEffect } from 'react';
import AOS from 'aos';

const DetailDesign = ({ onImageClick }) => {
    useEffect(() => {
        AOS.init({
            duration: 1500, // 애니메이션 지속 시간
        });
    }, []); // 컴포넌트가 처음 마운트될 때만 실행

    return (
        <div className="project detailDesign">
            <ul>
                <li className="package" data-aos="fade-up" data-aos-delay="100">
                    <div onClick={() => onImageClick([
                        require('../../images/package/package1.jpg'),
                        require('../../images/package/package1_1.jpg'),
                        require('../../images/package/package1_2.jpg'),
                        require('../../images/package/package2.jpg'),
                        require('../../images/package/package2_1.jpg'),
                        require('../../images/package/package3.jpg'),
                        require('../../images/package/package3_1.jpg')
                    ])}>
                        <img src={require('../../images/package/package4.png')} alt="키즈텐 유아 칫솔 패키지 디자인" />
                    </div>
                </li>
                <li data-aos="fade-up" data-aos-delay="200">
                    <div onClick={() => onImageClick([require('../../images/detail/detail1.jpg')])}>
                        <img src={require('../../images/detail/detail1.jpg')} alt="키즈텐 스마트스토어 이벤트 상세페이지" />
                    </div>
                </li>
                <li data-aos="fade-up" data-aos-delay="300">
                    <div onClick={() => onImageClick([require('../../images/detail/detail2.jpg')])}>
                        <img src={require('../../images/detail/detail2.jpg')} alt="키즈텐 카카오톡 친구추가 상세페이지" />
                    </div>
                </li>
                <li data-aos="fade-up" data-aos-delay="400">
                    <div onClick={() => onImageClick([require('../../images/detail/detail2_1.jpg')])}>
                        <img src={require('../../images/detail/detail2_1.jpg')} alt="키즈텐 3+1 이벤트 상세페이지" />
                    </div>
                </li>
                <li className="package" data-aos="fade-up" data-aos-delay="500">
                    <div onClick={() => onImageClick([
                        require('../../images/popup/popup1.jpg'),
                        require('../../images/popup/popup2.jpg'),
                        require('../../images/popup/popup3.png'),
                        require('../../images/popup/popup4.jpg'),
                        require('../../images/popup/popup5.png'),
                        require('../../images/popup/popup6.png'),
                        require('../../images/popup/popup7.png'),
                        require('../../images/popup/popup8.jpg')
                    ])}>
                        <img src={require('../../images/popup/popupImg.jpg')} alt="팝업 이미지 모음" />
                    </div>
                </li>
                <li data-aos="fade-up" data-aos-delay="600">
                    <div onClick={() => onImageClick([require('../../images/detail/detail3.jpg')])}>
                        <img src={require('../../images/detail/detail3.jpg')} alt="e.l.f. 아이래쉬 상세페이지" />
                    </div>
                </li>
                <li data-aos="fade-up" data-aos-delay="700">
                    <div onClick={() => onImageClick([
                        require('../../images/detail/detail4_1.jpg'),
                        require('../../images/detail/detail4_2.gif'),
                        require('../../images/detail/detail4_3.jpg')
                    ])}>
                        <img src={require('../../images/detail/detail4.jpg')} alt="e.l.f. 아이 메이크업 브러쉬 세트 상세페이지" />
                    </div>
                </li>
                <li data-aos="fade-up" data-aos-delay="800">
                    <div onClick={() => onImageClick([require('../../images/detail/detail5.jpg')])}>
                        <img src={require('../../images/detail/detail5.jpg')} alt="바이오 쏨 홍삼 상세페이지" />
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default DetailDesign;
