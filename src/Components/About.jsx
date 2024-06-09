import React from 'react';
import '../Assets/About.css';

const About = () => {
    const content = [
        {
            title: "Innovation",
            description: "We are committed to staying at the forefront of technological advancements to provide innovative solutions for your business.",
        },
        {
            title: "Relaibility",
            description: "Count on us as your dependable partner, delivering consistent and high-quality services that you can trust.",
        },
        {
            title: "Collaboration",
            description: "We believe in working closely with our clients, understanding their needs, and collaborating to achieve shared goals.",
        },
        {
            title: "Expertise",
            description: "Our team’s deep technical expertise ensures that you receive solutions that are backed by solid knowledge and skill.",
        },
        {
            title: "Customer Obsession",
            description: "Your success is our priority. We tailor our services to your unique requirements, ensuring maximum value for your investment.",
        }
    ];
    return (
        <div className='vars'> 
            <div className='ContainerA'>
                <h2>
                    About
                </h2>
            </div>
            <div className='ContainerA-text'>
                <p>
                At Qualix Solutions, we are a dynamic team of IT experts dedicated to transforming businesses through innovation. With a commitment to excellence, we bring a wealth of experience and expertise to the table. Our modern approach, strong technical prowess, and unwavering dedication set us apart in the industry. Discover how we can be your strategic IT partner.
                </p>
            </div>
            <div className='secondA-box'>
                <p className='heading'>Our Core Values</p> 
                <div className='cards-containerA'>
                {content.map((cont,index)=>(
                    <div className='cardsA' key={index} style={{ backgroundColor: index % 2 === 0 ? '#44505a' : '' }}>
                        <div className='title'><p>{cont.title}</p></div>
                        <div className='description'><p>{cont.description}</p></div>
                    </div>
                ))}
                </div>
            </div>
                
            </div>
            
    );
}

export default About;
