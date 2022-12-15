import React from 'react';
import Project from './Project';

const project1 = {
    image: 'https://user-images.githubusercontent.com/106449899/201456194-87865624-347b-4d32-81dd-1b3ed1061c93.jpeg',
    website: 'https://thawing-shelf-28654.herokuapp.com/',
    title: 'Marvel Fanatics',
    repository: 'https://github.com/saucymj/Marvel-Fanatics',
    description: 'Full-Stack Application',
};

const project2 = {
    image: 'https://user-images.githubusercontent.com/106449899/186727174-b4b89795-d067-4d86-ae99-cf8971e8824c.jpeg',
    website: 'https://saucymj.github.io/Weather-Dashboard/',
    title: 'Weather Dashboard',
    repository: 'https://github.com/saucymj/Weather-Dashboard',
    description: 'Server-Side APIs',
};

const project3 = {
    image: 'https://user-images.githubusercontent.com/106449899/193715995-fa8778d7-b865-42c3-8c0e-a6f50b4f3f2a.jpeg',
    website: 'https://notetaker17.herokuapp.com/',
    title: 'Note Taker',
    repository: 'https://github.com/saucymj/Note-Taker',
    description: 'Express.js',
};

const project4 = {
    image: 'https://user-images.githubusercontent.com/106449899/185487656-ee6f1686-323d-4183-8461-ce0b18b2c8f1.jpeg',
    website: 'https://saucymj.github.io/Work-Day-Scheduler/',
    title: 'Work-Day Scheduler',
    repository: 'https://github.com/saucymj/Work-Day-Scheduler',
    description: 'Third-Party APIs',
};

const project5 = {
    image: 'https://user-images.githubusercontent.com/106449899/187990694-91cb4eec-0b08-4f0c-8b33-dc54e6705ed4.jpeg',
    title: 'NBA Players Comparison Tool',
    website: 'https://danielc53.github.io/project1-sport-players/',
    repository: 'https://github.com/danielc53/project1-sport-players',
    description: 'Interactive Front-End Application',
};

const project6 = {
    image: 'https://user-images.githubusercontent.com/106449899/205482947-13db13d5-21f7-4ad6-ba54-2369e301756b.jpeg',
    website: 'https://jate-text-editor1.herokuapp.com/',
    title: 'Text Editor',
    repository: 'https://github.com/saucymj/Progressive-Web-Application_Text-Editor',
    description: 'Progressive Web Application',
};

export default function Portfolio() {
    return (

        <div>
            <h1 style={{ color: '#c9fbff', margin: '17px' }}>Portfolio</h1>
                
                <Project
                    image={project1.image}
                    website={project1.website}
                    title={project1.title}
                    repository={project1.repository}
                    description={project1.description}

                    image2={project2.image}
                    website2={project2.website}
                    title2={project2.title}
                    repository2={project2.repository}
                    description2={project2.description}

                    image3={project3.image}
                    website3={project3.website}
                    title3={project3.title}
                    repository3={project3.repository}
                    description3={project3.description}

                    image4={project4.image}
                    website4={project4.website}
                    title4={project4.title}
                    repository4={project4.repository}
                    description4={project4.description}

                    image5={project5.image}
                    website5={project5.website}
                    title5={project5.title}
                    repository5={project5.repository}
                    description5={project5.description}

                    image6={project6.image}
                    website6={project6.website}
                    title6={project6.title}
                    repository6={project6.repository}
                    description6={project6.description}
                />
                
        </div>
    );
}



