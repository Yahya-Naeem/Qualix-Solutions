import React from 'react';
import img1 from '../Assets/img/DSC_0223.JPG'; // Adjust the path to match your project structure
import '../Assets/Home.css';
import {Link} from 'react-scroll';
const Home = () => {
    const content = [
        {
            title: "Web and Mobile App Development",
            description: "Craft exceptional digital experiences with our expert web and mobile application development services.",
        },
        {
            title: "Data Science and AI solutions",
            description: "Harness the power of AI to unlock valuable business insights and create intuitive and user-friendly experiences for your users.",
        },
        {
            title: "DevOps Solutions",
            description: "Streamline your development and operational processes with our DevOps expertise. Achieve faster releases, higher efficiency, and reduced downtime with our proven strategies.",
        },
        {
            title: "Managed Services",
            description: "Experience peace of mind with our proactive IT management and maintenance services, ensuring the security and reliability of your infrastructure. Focus on your core business while we simplify your IT complexities.",
        },
        {
            title: "Project and Program Management",
            description: "Achieve on-time and on-budget project success with our certified project managers. We provide end-to-end guidance, ensuring your IT initiatives align perfectly with your business goals, allowing you to reach your milestones with confidence.",
        },
        {
            title: "Business Process Outsourcing",
            description: "Optimize your operations and reduce costs effortlessly with our BPO services. From enhanced customer support to streamlined data entry, we bring efficiency and scalability to your non-core tasks, elevating your business processes.",
        }
    ];
    return (
        <div>
            <header>
                <div className='First-heading'><p>INNOVATIVE TECH SOLUTIONS</p></div>
                <div className='h1-container'><h1>Transform your business with our expert consulting services.</h1></div>
                <p>Our experienced team of consultants will work with you to implement cutting-edge technology solutions and improve your online presence.</p>
            </header>
            <div className='image-container'>
                <img src={img1} alt='Image 1' className='image' />
                <img src={img1} alt='Image 2' className='image' />
                <img src={img1} alt='Image 3' className='image' />
            </div>
            <div className='tag'>
                <h1>
                Explore our collection of tech solutions and industry expertise.
                </h1>
                <div>
                    <p>Our innovative solutions and flexible designs empower your business to achieve its goals and drive success.</p>
                </div>
            </div>
            <div className='cards-container'>
            {
                content.map((cont,index)=>(
                    <div className='cards'>
                    <div className='title'><p>{'0'+index}</p></div>
                    <h3 className='cards-heading'>{cont.title}</h3>
                    <div className='description'>{cont.description}</div>
                    </div>
                    
                ))
            }
            </div>
            <div className='last-container'>
            <div>
            <img src={img1} alt='Image 1' height="80vh" width="80vh" />
            <ul>
                <li>Questions lingering in your mind?</li>
                <li>Need help with something specific? Let’s talk.</li>
            </ul>
            <button onClick={()=>{<a href='/Contact'></a>}}>Let's Connect</button>
            </div>   
            </div>
        </div>
    );
}

export default Home;
