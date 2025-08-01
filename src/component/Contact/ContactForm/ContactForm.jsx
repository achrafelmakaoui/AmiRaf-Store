import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import './ContactForm.css'

const ContactForm = () => {
    const [firstname, setFisrtName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const name = `${firstname} ${lastname}`;

    const sendEmail = (e) => {
        e.preventDefault();

        const templateParams = {
            name,
            email,
            message,
        };

        emailjs.send('service_yqv6318', 'template_qf6hrmb', templateParams, 'huYq7jR9M8xRnA3EK')
            .then((response) => {
                console.log('Email sent successfully!', response.status, response.text);
                e.target.reset();
                setFisrtName('');
                setLastName('');
                setEmail('');
                setMessage('');
            })
            .catch((error) => {
                console.error('Failed to send email:', error);
        });
    };
  return (
    <div className='contactForm' id='emailAssistance'>
        <div className='contactFormContent'>
            <div className='contactFormContent-Titles'>
                <h1>Nous Contacter</h1>
                <h2>Nous reviendrons vers vous rapidement sous 24h.</h2>
            </div>
            <div className='contactContent-Form'>
                <form onSubmit={sendEmail}>
                    <div className='form-FullName'>
                        <div className='form-firstName'>
                            <label htmlFor='FirstName'>Prénom</label>
                            <input 
                                type="text" 
                                id='FirstName' 
                                name='Firstname'
                                placeholder='Prénom'
                                value={firstname} 
                                onChange={(e) => setFisrtName(e.target.value)} 
                                required 
                                autoComplete="name"
                            />
                        </div>
                        <div className='form-LastName'>
                            <label htmlFor='LastName'>Nom</label>
                            <input 
                                type="text" 
                                id='LastName' 
                                name='Lastname'
                                placeholder='Nom'
                                value={lastname} 
                                onChange={(e) => setLastName(e.target.value)} 
                                required 
                                autoComplete="name"
                            />
                        </div>
                    </div>
                    <div className='form-Email'>
                        <label htmlFor='email'>Email</label>
                        <input 
                            type="email" 
                            id='Email' 
                            name='Email'
                            placeholder='you@company.com'
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                            autoComplete="email"
                        />
                    </div>
                    <div className='form-Message'>
                        <label htmlFor='message'>Message</label>
                        <textarea 
                            id='message' 
                            name='message' 
                            placeholder='Laissez-nous un message...' 
                            value={message} 
                            onChange={(e) => setMessage(e.target.value)} 
                            required 
                            autoComplete="off"

                        />
                    </div>
                    <div className='form-Btn'>
                        <button type='submit'>
                            Envoyer
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ContactForm