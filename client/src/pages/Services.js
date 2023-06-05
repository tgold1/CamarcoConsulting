import React from 'react';
// import MyCarousel from '../components/MyCarousel';
import MyModalComponent from '../components/ModalComponent';
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';

function ModalComponent({ show, onHide, title, content }) {
    return (
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{content}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  function Services() {
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);
    const [showModal4, setShowModal4] = useState(false);
    const [showModal5, setShowModal5] = useState(false);
  
    const toggleModal1 = () => {
      setShowModal1(!showModal1);
    };
  
    const toggleModal2 = () => {
      setShowModal2(!showModal2);
    };
  
    const toggleModal3 = () => {
      setShowModal3(!showModal3);
    };
  
    const toggleModal4 = () => {
      setShowModal4(!showModal4);
    };
  
    const toggleModal5 = () => {
      setShowModal5(!showModal5);
    };
    return (
        <Row>
          {/* Card 1 */}
         
          <section className='card rounded-circle bg-white text-black align-items-center' style={{ width: '18rem' }}>
            {/* <img className="card-img-top" src="../../assets/images/consultation.png" alt="Card image cap" /> */}
            <div className='card-body'>
              <h1 className='card-title'> Consultation </h1>
              <p className='card-text'>We offer free consultation to understand your needs and explore how our services can assist your business.</p>
              <button className="btn btn-primary" onClick={toggleModal1}>Find out more</button>
            </div>
          </section>
          <ModalComponent
            show={showModal1}
            onHide={toggleModal1}
            title="Consultation"
            content="We offer free consultation to understand your needs and explore how our services can assist your business. Our team of experienced consultants will take the time to listen to your goals and challenges, providing personalized advice and recommendations. Whether you're looking to improve efficiency, implement new technologies, or enhance your overall business strategy, we're here to help. During the consultation, we'll discuss potential solutions and determine if we're a good fit for your requirements. We believe in building strong partnerships with our clients and ensuring that our services align with their objectives."
            />
        {/* card 2 */}
        <section className='card rounded-circle bg-white text-black align-items-center' style={{ width: '18rem' }}>
            {/* <img className="card-img-top" src="../../assets/images/consultation.png" alt="Card image cap" /> */}
            <div className='card-body'>
              <h1 className='card-title'> Business Process Transformation </h1>
              <p className='card-text'>We offer free consultation to understand your needs and explore how our services can assist your business.</p>
              <button className="btn btn-primary" onClick={toggleModal2}>Find out more</button>
            </div>
          </section>
          <ModalComponent
            show={showModal2}
            onHide={toggleModal2}
            title="Business Process Transformation"
            content="Our business process transformation service aims to optimize and streamline your company's workflows and operations. We work closely with your team to analyze existing processes, identify bottlenecks, and implement efficient solutions.Through process mapping, automation, and workflow redesign, we help you achieve greater productivity and cost-effectiveness."
            />
            {/* card 3 */}
            <section className='card rounded-circle bg-white text-black align-items-center' style={{ width: '18rem' }}>
            {/* <img className="card-img-top" src="../../assets/images/consultation.png" alt="Card image cap" /> */}
            <div className='card-body'>
              <h1 className='card-title'> Full Stack Web Development </h1>
              <p className='card-text'>Our full-stack web development services encompass front-end and back-end development, ensuring seamless functionality and an exceptional user experience.</p>
              <button className="btn btn-primary" onClick={toggleModal3}>Find out more</button>
            </div>
          </section>
          <ModalComponent
            show={showModal3}
            onHide={toggleModal3}
            title="Full Stack Web Development"
            content="Our full-stack web development services encompass front-end and back-end development, ensuring seamless functionality and an exceptional user experience. We utilize modern technologies and frameworks to create responsive, interactive, and visually appealing websites and web applications. We excel in the following areas:
            HTML5, CSS3, and JavaScript for building engaging user interfaces;
            React.js and Angular for developing dynamic and interactive front-end experiences;
            Node.js and Express.js for robust server-side development and RESTful APIs;
            Database design and integration using MongoDB, MySQL, or PostgreSQL;
            Deployment and hosting on platforms such as AWS, Heroku, or Netlify;
            Version control and collaboration using Git and GitHub.
            Whether you need a simple website, a complex web application, or an e-commerce platform, our full-stack web development services can bring your vision to life. We prioritize clean code, scalability, security, and performance to deliver solutions that meet your business requirements and exceed your expectations."
            />
             {/* card 4 */}
             <section className='card rounded-circle bg-white text-black align-items-center' style={{ width: '18rem' }}>
            {/* <img className="card-img-top" src="../../assets/images/consultation.png" alt="Card image cap" /> */}
            <div className='card-body'>
              <h1 className='card-title'> Nintex Training </h1>
              <p className='card-text'>Our Nintex training service provides comprehensive training programs to help your team harness the full potential of the Nintex platform.</p>
              <button className="btn btn-primary" onClick={toggleModal4}>Find out more</button>
            </div>
          </section>
          <ModalComponent
            show={showModal4}
            onHide={toggleModal4}
            title="Nintex Training"
            content="Our Nintex training service provides comprehensive training programs to help your team harness the full potential of the Nintex platform. We offer tailored training sessions that cover various aspects of Nintex, including workflow automation, forms design, and process optimization. Our experienced trainers will guide your team through hands-on exercises and real-world scenarios to ensure practical understanding and skill development. Whether you're new to Nintex or looking to enhance your existing expertise, our training programs can empower your team to leverage Nintex effectively."
            />
             {/* card 5 */}
             <section className='card rounded-circle bg-white text-black align-items-center' style={{ width: '18rem' }}>
            {/* <img className="card-img-top" src="../../assets/images/consultation.png" alt="Card image cap" /> */}
            <div className='card-body'>
              <h1 className='card-title'> Nintex Support </h1>
              <p className='card-text'>Our Nintex support service is designed to provide ongoing assistance and troubleshooting for your Nintex implementations.</p>
              <button className="btn btn-primary" onClick={toggleModal5}>Find out more</button>
            </div>
          </section>
          <ModalComponent
            show={showModal5}
            onHide={toggleModal5}
            title="Nintex Support"
            content="Our Nintex support service is designed to provide ongoing assistance and troubleshooting for your Nintex implementations. We understand that technology issues can arise, and our dedicated support team is here to help you resolve them efficiently. When you encounter any challenges or problems with your Nintex workflows, forms, or other related issues, our experts will work closely with you to identify and resolve them. Our support process involves:
            Thoroughly analyzing the reported issue to understand its root cause.
            Providing step-by-step guidance and best practices to help you address the problem.
            Utilizing our expertise and experience to troubleshoot and resolve the issue directly.
            Ensuring clear and timely communication throughout the resolution process.</li>
            In cases where the issue requires further assistance, we have direct channels to connect with Nintex support to escalate and resolve complex problems.Our goal is to ensure the smooth functioning of your Nintex processes and help you overcome any obstacles along the way."
            />
        </Row>
        
        

    )
}  
export default Services;




