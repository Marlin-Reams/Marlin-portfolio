import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJsSquare, faAngular, faHtml5, faCss3, faReact, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders'

const aboutString = "About me".split("");
const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect (() => {
        setTimeout(() =>{
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                      strArray={aboutString}
                      idx={15}

                    />
                </h1>
                <p>I have always been fascinated by the power of technology to solve problems and improve people's lives,
                    and that is what drew me to the field of software engineering.
                    I am excited to learn more about how to design and build software systems that are reliable,
                    scalable, and user-friendly. </p>
                <p> As I explore potential tech careers,
                    I am looking for an opportunity that allows me to use my skills and knowledge to make a positive impact.
                    I am interested in a company that values innovation and encourages continuous learning,
                    and that offers opportunities for growth and advancement.
                    I am also looking for a team that is collaborative and supportive,
                    and that values diversity and inclusivity. In my ideal tech career,
                    I would be able to work on interesting and challenging projects that make a difference in the world. </p>
                <p> I am a passionate and driven individual who values family above all else.
                    In my personal life, I am dedicated to creating strong and meaningful relationships with my loved ones,
                    and I believe that family is the foundation of a happy and fulfilling life. In my professional life,
                    I am excited to use my skills and knowledge in tech to make a positive impact on the world.
                    I am always looking for new challenges and opportunities to learn and grow,
                    and I am excited to meet new people and work with diverse teams.
                    I believe that tech has the power to create meaningful change, and I am eager to be a part of that change. </p>

            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About
