import React from 'react'
import './Contact.css'

export default function Contact() {
    return (
        // <div >
        //     <div className='content'>

        //         <h2>Contact Us</h2>
        //     </div>
        //     <div className="contact-section">
        //         <div className="contact-details">
        //             <div className="address">
        //                 <h3>Headquarters:</h3>
        //                 <p>123 Travel Street,<br />
        //                     Cityville, Countryland,<br />
        //                     Postal Code: 12345</p>
        //             </div>
        //             <div className="emails">
        //                 <h3>Email:</h3>
        //                 <p>General Inquiries: info@travelwebsite.com<br />
        //                     Customer Support: support@travelwebsite.com</p>
        //             </div>
        //             <div className="phones">
        //                 <h3>Phone:</h3>
        //                 <p>Main Line: +1 (555) 123-4567<br />
        //                     Customer Support: +1 (555) 987-6543</p>
        //             </div>
        //         </div>
             
        //         <div className="faqs">
        //             <h3>FAQs:</h3>
        //             <p>Find answers to common questions on our <a href="https://www.travelwebsite.com/faqs">FAQs page</a>.</p>
        //         </div>
        //         <div className="emergency-contact">
        //             <h3>Emergency Contact:</h3>
        //             <p>In case of emergencies during your travels, please use the following numbers:</p>
        //             <ul>
        //                 <li>For medical emergencies: 911 (or local emergency services)</li>
        //                 <li>Travel Website Emergency Line: +1 (555) 777-8888</li>
        //             </ul>
        //         </div>
        //         <div className="privacy-policy">
        //             <h3>Privacy Policy:</h3>
        //             <p>For information on how we handle your data, please read our <a href="https://www.travelwebsite.com/privacy-policy">Privacy Policy</a>.</p>
        //         </div>
        //     </div>
        // </div>
        <div>
        <div className='container'>
            <form action="">
        <h1>Contact <span>Here</span> </h1>
                <input type="text"  placeholder='Enater name' name='name' id='' />
                <input type="email" placeholder='Example@gmail.com' name='email' id='' />
                <input type="phone" placeholder='+91' name='phone' id='' />
                <textarea name="message" placeholder='type here...' id="" cols="30" rows="10"/>
                <button type='submit'>send</button>


               

            </form>
        </div>
        </div>
    )
}
