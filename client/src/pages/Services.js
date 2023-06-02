import React from 'react';
import MyCarousel from '../components/MyCarousel';

function Services() {


    return (
        <main>
            <section className='card rounded-circle bg-white text-black align-items-center' style={{width: '18rem'}}>
                <img class="card-img-top" src="../../assets/images/consultation.png" alt="Card image cap"></img>
                <div className='card-body'>
                    <h1 className='card-title'> Consultation </h1>
                    <p className='card-text'>We offer free consultation to understand your needs and explore how our services can assist your business.
                        {/* Our team of experienced consultants will take the time to listen to your goals and challenges, providing personalized advice and recommendations.
                        Whether you're looking to improve efficiency, implement new technologies, or enhance your overall business strategy, we're here to help.
                        During the consultation, we'll discuss potential solutions and determine if we're a good fit for your requirements.
                        We believe in building strong partnerships with our clients and ensuring that our services align with their objectives. */}
                    </p>
                    <a href="#" class="btn btn-primary">Find out more</a>
                </div>
            </section>

{/* <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}


            <section className='card bg-white text-black align-items-center'>
                <div className='card-body'>
                    <h1 className='card-title'> Business Process Transformation </h1>
                    <p> Our business process transformation service aims to optimize and streamline your company's workflows and operations. We work closely with your team to analyze existing processes, identify bottlenecks, and implement efficient solutions.Through process mapping, automation, and workflow redesign, we help you achieve greater productivity and cost-effectiveness.
                    </p>
                </div>
            </section>

            <section className='card bg-white text-black align-items-center'>
                <div className='card-body'>
                    <h1 className='card-title'> Full Stack Web Development</h1>
                    <p>
                        Our full-stack web development services encompass front-end and back-end development, ensuring seamless functionality and an exceptional user experience. We utilize modern technologies and frameworks to create responsive, interactive, and visually appealing websites and web applications. We excel in the following areas:
                    </p>
                    <ul>
                        <li>HTML5, CSS3, and JavaScript for building engaging user interfaces.</li>
                        <li>React.js and Angular for developing dynamic and interactive front-end experiences.</li>
                        <li>Node.js and Express.js for robust server-side development and RESTful APIs.</li>
                        <li>Database design and integration using MongoDB, MySQL, or PostgreSQL.</li>
                        <li>Deployment and hosting on platforms such as AWS, Heroku, or Netlify.</li>
                        <li>Version control and collaboration using Git and GitHub.</li>
                    </ul>
                    <p>
                        Whether you need a simple website, a complex web application, or an e-commerce platform, our full-stack web development services can bring your vision to life. We prioritize clean code, scalability, security, and performance to deliver solutions that meet your business requirements and exceed your expectations.
                    </p>
                </div>
            </section>

            <section className='card bg-white text-black align-items-center'>
                <div className='card-body'>
                    <h1> Nintex Training </h1>
                    <p>Our Nintex training service provides comprehensive training programs to help your team harness the full potential of the Nintex platform. We offer tailored training sessions that cover various aspects of Nintex, including workflow automation, forms design, and process optimization. Our experienced trainers will guide your team through hands-on exercises and real-world scenarios to ensure practical understanding and skill development. Whether you're new to Nintex or looking to enhance your existing expertise, our training programs can empower your team to leverage Nintex effectively.
                    </p>
                </div>
            </section>

            <section className='card bg-white text-black align-items-center'>
                <div className='card-body'>
                    <h1 className='card-title'> Nintex Support </h1>
                        <p> Our Nintex support service is designed to provide ongoing assistance and troubleshooting for your Nintex implementations.
                        We understand that technology issues can arise, and our dedicated support team is here to help you resolve them efficiently.
                        When you encounter any challenges or problems with your Nintex workflows, forms, or other related issues, our experts will work closely with you to identify and resolve them. Our support process involves:
                            <ul>
                                <li>Thoroughly analyzing the reported issue to understand its root cause.</li>
                                <li>Providing step-by-step guidance and best practices to help you address the problem.</li>
                                <li>Utilizing our expertise and experience to troubleshoot and resolve the issue directly.</li>
                                <li>Ensuring clear and timely communication throughout the resolution process.</li>
                            </ul>
                        In cases where the issue requires further assistance, we have direct channels to connect with Nintex support to escalate and resolve complex problems.Our goal is to ensure the smooth functioning of your Nintex processes and help you overcome any obstacles along the way.
                        </p>
                </div>
            </section>
        </main >

    )
}

export default Services;