import {useRef, useEffect} from "react";
import "../Welcome.css";
import astroImg from "../astronait.png";
import { useInView } from 'react-intersection-observer';

export const Welcome = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger the animation only once
        threshold: 0.5, // Adjust this value based on when you want to trigger the animation
      });

    const imgRef = useRef(null);

    useEffect(() => {
        const animations = ['float1', 'float2', 'float3', 'float4'];
        const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
        if (imgRef.current) {
            imgRef.current.style.animation = `${randomAnimation} 5s ease-in-out infinite`;
        }
    }, []);
    return (
        <section id="home"  ref={ref} className={`welcome-section ${inView ? 'animate' : ''}`}>
            <div className="welcome-container">
                <div className="left-side">
                    <div className="content">
                        <h1>Welcome to My Portfolio</h1>
                        <p>My Name is Elguja and I am a
                            Web Developer</p>
                    </div>
                </div>
                <div className="right-side">
                    <div className="content-r">
                        <img ref={imgRef} src={astroImg} />
                    </div>
                </div>
            </div>
        </section>
    )
}