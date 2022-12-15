import React, { useState } from 'react';
import { validateEmail } from '../utils/helper';

export default function Contact() {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {

        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'name') {
            setName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };


    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setErrorMessage('Email is invalid');
            return;
        } else {

        if (!message) {
            setErrorMessage(
                `A message is required`
            );
            return;
        }
    }

        alert(`Thank you ${name} for taking the time to reach out!`);

        setName('');
        setMessage('');
        setEmail('');
    };

    return (
        <div className='container'>
            <h1 style={{color: '#c9fbff', padding: '17px'}}>Contact</h1>
            <form>
                <div className="form-group">
                    <label style={{color: '#c9fbff',  fontSize: '20px'}} htmlFor="exampleFormControlInput1" className="form-label">Name:</label>
                    <input name='name' value={name} onChange={handleChange} className="form-control" id="exampleFormControlInput1" placeholder="" />
                </div>
                <div className="form-group">
                    <label style={{color: '#c9fbff',  fontSize: '20px'}} htmlFor="exampleFormControlInput1" className="form-label">Email address:</label>
                    <input type="text" name='email' value={email} onChange={handleChange} className="form-control" id="exampleFormControlInput1" placeholder="" />
                </div>
                <div className="form-group">
                    <label style={{color: '#c9fbff',  fontSize: '20px'}} htmlFor="exampleFormControlTextarea1" className="form-label">Message:</label>
                    <textarea name='message' className="form-control" value={message} onChange={handleChange} id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button style={{background:'#22333b', color:'#c9fbff', margin: '7px'}} type="button" onClick={handleFormSubmit}>Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text" style={{color: 'white', fontSize: '20px'}}>{errorMessage}</p>
                </div>
            )}
        </div>
    );
}
