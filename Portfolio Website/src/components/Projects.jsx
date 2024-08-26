import "../Projects.css";
import { useInView } from 'react-intersection-observer';
import blogProj from "../pics/blog-using-api.png";
import chatAppProj from "../pics/chat-app.png";
import eCommProj from "../pics/e-commerce.png";
import regPageProj from "../pics/registration-page.png";

export const Projects = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger the animation only once
        threshold: 0.3, // Adjust this value based on when you want to trigger the animation
      });

    return (
        <section id="projects" ref={ref} className={`welcome-section ${inView ? 'animate' : ''}`}>
            <div className="projects-title">
                You can see the full list of projects below
            </div>
            <div className="projects-container">
                <div className="projects-grid">
                    <div><img src={chatAppProj} />
                    <div className="overlay">Chat Application</div>
                    </div>
                    <div><img src={regPageProj} />
                    <div className="overlay">Login Page</div>
                    </div>
                    <div><img src={eCommProj} />
                    <div className="overlay">E-Commerce Platform</div>
                    </div>
                    <div className="projects-button">
                        <a href="https://github.com/Gujigventsadze/Capstone-Projects" target="_blank">
                            See Full List
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}