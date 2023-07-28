import React from 'react'
import './Footer.css'
import { BsFacebook, BsTwitter, BsLinkedin, BsInstagram } from 'react-icons/bs'

export default function Footer() {
    return (
        <div className='footer'>
            <div className='section section-links'>
                <div className='footer-links'>
                    <div className='footer-links div'>
                        <h4> Bussiness</h4>
                        <a href="/employes">
                            <p>Employer</p>
                        </a>
                        <a href="/healthplans">
                            <p>Health Plans</p>
                        </a>
                        <a href="/indiviual">
                            <p>Individual</p>
                        </a>
                    </div>
                    <div className='footer-links div'>
                        <h4>Resources</h4>
                        <a href="/resource">
                            <p>Resource Center</p>
                        </a>
                        <a href="/testimonil">
                            <p>Testimonial</p>
                        </a>
                        <a href="/individual">
                            <p>Individual</p>
                        </a>
                        <a href="/&tv">
                            <p>&Tv</p>
                        </a>
                        <a href="/partner">
                            <p>Partners</p>
                        </a>
                    </div>
                    <div className='footer-links div'>
                        <h4>Partners</h4>
                        <a href="/tech">
                            <p>Swing tech</p>
                        </a>


                    </div>
                    <div className='footer-links div'>
                        <h4>Compny</h4>
                        <a href="#">
                            <p>About</p>
                        </a>
                        <a href="/press">
                            <p>Press</p>
                        </a>
                        <a href="/career">
                            <p>Career</p>
                        </a>
                        <a href="/contact">
                            <p>Contact</p>
                        </a>

                    </div>
                    <div className='footer-links div'>
                        <h4>Coming</h4>
                        <div className='socialmedia'>
                            <p><BsFacebook /> </p>
                            <p><BsTwitter /> </p>
                            <p><BsLinkedin /> </p>

                            <p><BsInstagram /> </p>



                        </div>
                    </div>
                        
                </div>
                        <hr />
                        <div className='footer-below'>
                            <div className='footer-copyright'>
                                <p>
                                    @{new Date().getFullYear()}
                                </p>
                            </div>
                            <div className='footer-below-links'>
                            <a href="/terms"><div><p>Terms & Condition</p></div></a>
                            <a href="/terms"><div><p> Privacy</p></div></a>
                            <a href="/terms"><div><p> Security</p></div></a>
                            </div>
                        </div>


            </div>
        </div>
    )
}
