import React, { forwardRef, useEffect } from 'react';
import aboutMe from '../images/aboutMe.png';
import AOS from 'aos';

const Section02 = forwardRef((props, ref) => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section className="section02 PJWidth PJPadding" ref={ref}>
            <div>
                <div className="tit colorPT" data-aos="fade-up" data-aos-duration="1500">ABOUT ME</div>
                <div className="aboutMe" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500">
                    <div>
                        <img src={aboutMe} alt="미모티콘" />
                    </div>
                    <div className="speech">
                        <div>
                            <p>
                            안녕하세요 저는 <strong className="colorPT1">5년차 UI/UX 퍼블리셔</strong> 정윤휘입니다.<br/>
                            저는 궁금한 점이 생기면 해결될 때까지 끊임없이 검색하여 문제를 해결하려고 노력합니다. 또한 완성된 작업물을 마주할 때마다 성취감과 기쁨이 가득 차오릅니다.<br/>
                            </p>
                            <p>주로 사용하는 언어와 프로그램은 <strong className="colorPT1">Photoshop, Illustrator, HTML, CSS, jQuery, JavaScript, 에디트+, Visual Studio Code, Bootstrap, 뤼튼, 챗GPT</strong>입니다.<br/></p>
                            <p>최근에 한 번 이상 사용해 본 언어와 프로그램은 <strong className="colorPT1">Figma, GitHub, GitKraken, React, IntelliJ, MySQL, Thymeleaf, Spring</strong>
                            이며, 사용하는 법을 이해하고 검색하며 공부하고 있습니다.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Section02;