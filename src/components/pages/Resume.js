import React from 'react';
import CV from '../utils/Resume-7.pdf';
export default function Resume() {

    const resumeStyle = {
        fontSize: '27px',
        color: '#c9fbff'
    }

    const proficienciesStyle = {
        color: '#85bdbf'
    }
    return (
        <div className='container'>
            <h1 style={{ color: '#c9fbff', padding: '17px' }}>Resume</h1>
            <div>
            <a style={{ textDecoration: 'none', fontSize: '27px', color: '#FFBEAD', margin: '10px' }} href={CV} className="" download>A link to download my resume</a>
            </div>
            <div>
                <h2 style={proficienciesStyle}>
                    Front-End Proficiencies
                </h2>
                <ul className="list-styled" style={resumeStyle}>
                    <li>Html/CSS</li>
                    <li>Javascript/jQuery</li>
                    <li>Browser Developer Tools</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                    <li>DOM Manipulation</li>
                    <li>Problem-Solving</li>
                </ul>
            </div>
            <div>
                <h2 style={proficienciesStyle}>
                    Back-End Proficiencies
                </h2>
                <ul className="list-styled" style={resumeStyle}>
                    <li>APIs</li>
                    <li>ORM</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL</li>
                    <li>Sequelize</li>
                    <li>REST</li>
                    <li>GraphQL</li>
                </ul>
            </div>
        </div>
    );
}