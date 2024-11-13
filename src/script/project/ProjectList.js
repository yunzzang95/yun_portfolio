import React, { useEffect, useState } from 'react'; // useState 추가
import AOS from 'aos';
import ProjectItem from './ProjectItem';

const projects = [
    {
        link: 'https://github.com/yunzzang95/yun_portfolio',
        title: '개인 포트폴리오 (반응형)',
        product: '디자인 100% / 퍼블리싱 100%',
        description: 'react, html, css, js 작업을 통해 페이지를 작업하였습니다.',
        image: require('../../images/sum/PJSum14.jpg'),
    },
    {
        link: 'https://www.onnuriglobal.co.kr/',
        title: '온누리번역통역 (카페24)',
        product: '디자인 100% / 퍼블리싱 100%',
        description: '카페24로 html, css, js 작업을 통해 전체페이지를 작업하였습니다.',
        image: require('../../images/sum/PJSum1.jpg'),
    },
    {
        link: 'https://yshealthd.co.kr/',
        title: '연세생활건강몰 (카페24)',
        product: '디자인 80% / 퍼블리싱 100%',
        description: '가비아에서 카페24로 솔루션과 DB이전 후 html, css, js 작업을 통해 전체페이지를 작업하였습니다.',
        image: require('../../images/sum/PJSum2.jpg'),
    },
    {
        link: 'https://www.kids10.co.kr/',
        title: '키즈텐042 (반응형)',
        product: '디자인 10% / 퍼블리싱 90%',
        description: '에디트+ 프로그램을 이용하여 php파일로 html, css, js 작업을 통해 전체페이지를 작업하였습니다.',
        image: require('../../images/sum/PJSum3.jpg'),
    },
    {
        link: 'http://yunzzzang.dothome.co.kr/gongmoju/index.php',
        title: '공모주114 (반응형)',
        product: '퍼블리싱 100%',
        description: '에디트+ 프로그램을 이용하여 php파일로 html, css, js 작업을 통해 전체페이지를 작업하였습니다.',
        image: require('../../images/sum/PJSum4.jpg'),
    },
    {
        link: 'http://yunzzzang.dothome.co.kr/soonreborn/event01.php',
        title: '순리본 랜딩페이지 (반응형)',
        product: '퍼블리싱 100%',
        description: '에디트+ 프로그램을 이용하여 php파일로 html, css, js 작업을 통해 랜딩페이지를 작업하였습니다.',
        image: require('../../images/sum/PJSum5.jpg'),
    },
    {
        link: 'http://yunzzzang.dothome.co.kr/soonreborn/event03.php',
        title: '순리본 랜딩페이지 (반응형)',
        product: '퍼블리싱 100%',
        description: '에디트+ 프로그램을 이용하여 php파일로 html, css, js 작업을 통해 랜딩페이지를 작업하였습니다.',
        image: require('../../images/sum/PJSum6.jpg'),
    },
    {
        link: 'http://yunzzzang.dothome.co.kr/soonreborn/m_cho_01.php',
        title: '순리본 랜딩페이지 (모바일)',
        product: '퍼블리싱 100%',
        description: '에디트+ 프로그램을 이용하여 php파일로 html, css, js 작업을 통해 랜딩페이지를 작업하였습니다.',
        image: require('../../images/sum/PJSum11.jpg'),
    },
    {
        link: 'http://yunzzzang.dothome.co.kr/kidsten/landing/event01.php',
        title: '키즈텐 랜딩페이지 (반응형)',
        product: '디자인 100% / 퍼블리싱 100%',
        description: '에디트+ 프로그램을 이용하여 php파일로 html, css, js 작업을 통해 랜딩페이지를 작업하였습니다.',
        image: require('../../images/sum/PJSum7.jpg'),
    },
    {
        link: 'http://yunzzzang.dothome.co.kr/kidsten/landing/event02.php',
        title: '키즈텐 랜딩페이지 (반응형)',
        product: '디자인 100% / 퍼블리싱 100%',
        description: '에디트+ 프로그램을 이용하여 php파일로 html, css, js 작업을 통해 랜딩페이지를 작업하였습니다.',
        image: require('../../images/sum/PJSum8.jpg'),
    },
    {
        link: 'http://yunzzzang.dothome.co.kr/kidsten/landing/event03.php',
        title: '키즈텐 랜딩페이지 (반응형)',
        product: '디자인 100% / 퍼블리싱 100%',
        description: '에디트+ 프로그램을 이용하여 php파일로 html, css, js 작업을 통해 랜딩페이지를 작업하였습니다.',
        image: require('../../images/sum/PJSum9.jpg'),
    },
    {
        link: 'http://yunzzzang.dothome.co.kr/kidsten/landing/event04.php',
        title: '키즈텐 랜딩페이지 (반응형)',
        product: '퍼블리싱 100%',
        description: '에디트+ 프로그램을 이용하여 php파일로 html, css, js 작업을 통해 랜딩페이지를 작업하였습니다.',
        image: require('../../images/sum/PJSum10.jpg'),
    },
    {
        link: 'http://yunzzzang.dothome.co.kr/skylotto/index.php',
        title: '스카이로또 이벤트 페이지 (모바일)',
        product: '퍼블리싱 100%',
        description: '에디트+ 프로그램을 이용하여 php파일로 html, css, js 작업을 통해 전체페이지를 작업하였습니다.',
        image: require('../../images/sum/PJSum12.jpg'),
    },
    {
        link: 'http://yunzzzang.dothome.co.kr/easylotto/index.php',
        title: '이지로또 이벤트 페이지 (모바일)',
        product: '디자인 100% / 퍼블리싱 100%',
        description: '에디트+ 프로그램을 이용하여 php파일로 html, css, js 작업을 통해 전체페이지를 작업하였습니다.',
        image: require('../../images/sum/PJSum13.jpg'),
    },
];

const ProjectsList = () => {
    const [filteredProjects, setFilteredProjects] = useState(projects);
    const [activeCategory, setActiveCategory] = useState('ALL'); // 현재 활성화된 카테고리 상태 추가

    useEffect(() => {
        AOS.init({
            duration: 1500, // 애니메이션 지속 시간
        });
    }, []);

    const filterProjects = (category) => {
        setActiveCategory(category); // 버튼 클릭 시 활성 카테고리 업데이트
        if (category === 'ALL') {
            setFilteredProjects(projects);
        } else if (category === 'Responsive') {
            setFilteredProjects(projects.filter(project => project.title.includes('반응형')));
        } else if (category === 'Mobile') {
            setFilteredProjects(projects.filter(project => project.title.includes('모바일')));
        } else if (category === 'Platform') {
            setFilteredProjects(projects.filter(project => project.title.includes('카페24')));
        }
    };

    return (
        <div className="project" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500">
            <div className='projectMenu'>
                <button 
                    className={activeCategory === 'ALL' ? 'active' : ''} 
                    onClick={() => filterProjects('ALL')}
                >
                    ALL
                </button>
                <button 
                    className={activeCategory === 'Responsive' ? 'active' : ''} 
                    onClick={() => filterProjects('Responsive')}
                >
                    RESPONSIVE
                </button>
                <button 
                    className={activeCategory === 'Mobile' ? 'active' : ''} 
                    onClick={() => filterProjects('Mobile')}
                >
                    MOBILE
                </button>
                <button 
                    className={activeCategory === 'Platform' ? 'active' : ''} 
                    onClick={() => filterProjects('Platform')}
                >
                    PLATFORM
                </button>
            </div>
            <ul>
                {filteredProjects.map((project, index) => (
                    <ProjectItem
                        key={index} // 키는 여기에만 사용
                        link={project.link}
                        image={project.image}
                        title={project.title}
                        product={project.product}
                        description={project.description}
                        index={index} // index를 prop으로 전달
                    />
                ))}
            </ul>
        </div>
    );
};

export default ProjectsList;