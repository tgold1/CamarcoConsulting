import React from 'react';
import MyCarousel from '../components/MyCarousel';

const CaseStudies = () => {
  const caseStudiesData = [
    {
      title: 'Example Case Study',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat odio blandit, semper ante at, luctus libero. Quisque tincidunt ex diam, luctus fermentum neque iaculis sed. Donec cursus, quam vehicula elementum gravida, felis ex pulvinar mi, eu feugiat magna diam sit amet ante. Vestibulum elit lectus, pulvinar quis lacus ut, suscipit commodo nisi.',
      image: require('../assets/images/logo.png'),
    },
    {
      title: 'Example Case Study',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat odio blandit, semper ante at, luctus libero. Quisque tincidunt ex diam, luctus fermentum neque iaculis sed. Donec cursus, quam vehicula elementum gravida, felis ex pulvinar mi, eu feugiat magna diam sit amet ante. Vestibulum elit lectus, pulvinar quis lacus ut, suscipit commodo nisi.',
      image: require('../assets/images/logo.png'),
    },
  ];

  return (
    <main>
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        </ol>
        <div className="carousel-inner">
          {/* Mapping over caseStudiesData and rendering carousel items */}
          {caseStudiesData.map((caseStudy, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
              <h2>{caseStudy.title}</h2>
              <img className="d-block w-100" src={caseStudy.image} alt={caseStudy.title} />
              <p>{caseStudy.description}</p>
            </div>
          ))}
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </main>
  );
};

export default CaseStudies;
