const ProjectItem = ({ link, image, title, product, description, index }) => {
    return (
        <li data-aos="fade-up" data-aos-delay={index * 100}> {/* AOS 속성 추가 */}
            <div>
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <img src={image} alt={title} />
                </a>
            </div>
            <p>
                <strong className="colorPT">{title}</strong>
                <span>기여도 : {product}</span><br />
                {description}
                <a href={link} target="_blank">VIEW MORE</a>
            </p>
        </li>
    );
};

export default ProjectItem;