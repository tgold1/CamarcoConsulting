// CSS FOR CASE STUDIES = CAROUSEL

import React from 'react';

const CaseStudies = () => {
  const caseStudiesData = [
    {
      title: 'Example Case Study',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat odio blandit, semper ante at, luctus libero. Quisque tincidunt ex diam, luctus fermentum neque iaculis sed. Donec cursus, quam vehicula elementum gravida, felis ex pulvinar mi, eu feugiat magna diam sit amet ante. Vestibulum elit lectus, pulvinar quis lacus ut, suscipit commodo nisi. ',
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
 
      {caseStudiesData.map((caseStudy, index) => (
        <div key={index}>
          <h2>{caseStudy.title}</h2>
          <img src={caseStudy.image} alt={caseStudy.title} />
          <p>{caseStudy.description}</p>
           </div>
      ))}
    </main>
  );
};

export default CaseStudies;