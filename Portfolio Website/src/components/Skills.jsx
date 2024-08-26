import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useInView } from 'react-intersection-observer';
import cssImg from "../pics/css.png";
import reactImg from "../pics/react.png";
import postgresImg from "../pics/postgres.png";
import nodejsImg from "../pics/nodejs.png";
import javascriptImg from "../pics/javascript.png";
import htmlImg from "../pics/html.png";
import bootstrapImg from "../pics/bootstrap.png";
import "../Skills.css";
import { css } from '@emotion/react';





export const Skills = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger the animation only once
        threshold: 0.3, // Adjust this value based on when you want to trigger the animation
      });

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
       <section id='skills' ref={ref} className={`welcome-section ${inView ? 'animate' : ''}`}>
        <div className='line'></div>
        <div className='skills-title'>
            Below You Can See the Languages I know fluently
        </div>
        <div className='carousel-container'>
            <Carousel responsive={responsive}>
                <div>
                    <img src={htmlImg} alt='html icon' />
                    <p>HTML</p>
                </div>
                <div>
                    <img src={cssImg} alt='html icon' />
                    <p>CSS</p>
                </div>
                <div>
                    <img src={javascriptImg} alt='html icon' />
                    <p>JavaScript</p>
                </div>
                <div>
                    <img src={reactImg} alt='html icon' />
                    <p>ReactJS</p>
                </div>
                <div>
                    <img src={nodejsImg} alt='html icon' />
                    <p>NodeJS</p>
                </div>
                <div>
                    <img src={postgresImg} alt='html icon' />
                    <p>PostgreSQL</p>
                </div>
                <div>
                    <img src={bootstrapImg} alt='html icon' />
                    <p>Bootstrap</p>
                </div>
            </Carousel>
        </div>
       </section>
    )
}


