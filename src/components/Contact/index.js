import './index.scss';
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
const Contact = () => {
    const ContactArray = "Contact Me".split("")
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()
    useEffect (() => {
        setTimeout(() =>{
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
        .sendForm(
            'service_4jsuaek',
            'template_a20klc4',
            refForm.current,
            "CHPbl73_-bXTZfcn0",
        )
        .then(
            () => {
                alert('Message successfully sent!')
                window.location.reload(false)
            },
            () => {
                alert('Message failed to send!, please try again')
            }
        )
    }
    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={ContactArray}
                        idx={15}
                    />
                </h1>
                <p>
                I am interested in freelance opportunities - especially on ambitious
                or large projects. However, if you have any other requests or
                questions, don't hesitate to contact me using below form either.

                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type="text" name="name" placeholder='Name' required/>


                            </li>
                            <li className='half'>
                                <input type="email" name="email" placeholder='Email' required/>


                            </li>
                            <li>
                                <input placeholder="Subject" type="text" name="subject"/>

                            </li>
                            <li>
                                <textarea placeholder="Message" name="message" required></textarea>
                            </li>
                            <li>
                                <input type="submit" className='flat-button' value="SEND"></input>
                            </li>
                        </ul>
                    </form>
                </div>

            </div>
            <div className='info-map'>
                Marlin Reams,
                <br/>
                Fremont NE, 68025
                <br/>

            </div>
            <div className='map-wrap'>
                <MapContainer center={[41.4372, -96.4873]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                    <Marker position={[44.96366, 19.61045]}>
                        <Popup>
                            Marlin Lives here :)
                        </Popup>

                    </Marker>


                </MapContainer>
            </div>
        </div>

        <Loader type="pacman" />
        </>
    )
}

export default Contact;
