import React, { forwardRef } from 'react';
import ProjectsList from '../script/project/ProjectList';

const Section03 = forwardRef((props, ref) => {
    return (
        <section className="section03 PJWidth PJPadding" ref={ref} id="project">
          <div className="tit colorPT" data-aos="fade-up" data-aos-duration="1500">PROJECT</div>
            <ProjectsList />
        </section>
    );
});

export default Section03;