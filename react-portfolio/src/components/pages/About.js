import React from 'react';

export default function About() {
    const cardStyle = {
        fontSize: '27px',
        margin: '20px',
        color: '#c9fbff'
    }
    const textStyle = {
        fontSize: '27px',
        margin: '20px',
        color: '#85bdbf'
    }

  return (
    <div className='container' style={textStyle}>
      <h1>About me</h1>
      <p style={cardStyle}>
       Welcome to my Portfolio! My name is Mekhi Banks and I am an aspiring full-stack engineer from Chicago, IL. I am a great problem solver from my love of mathematics, disciplined, and passionate about growing my skills as a high value developer.  I desire to have an opportunity to take my programming skills and experience to a company where I can continue to learn and grow as a professional software developer.
      </p>
    </div>
  );
}