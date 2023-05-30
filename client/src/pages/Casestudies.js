import React from 'react';

const CaseStudies = () => {
  const caseStudiesData = [
    {
      title: 'Case Study 1',
      description: 'Description of case study 1',
      image: 'image-url-1.jpg',
    
    },
    {
      title: 'Case Study 2',
      description: 'Description of case study 2',
      image: 'image-url-2.jpg',
      
    },
  ];

  return (
    <main>
      <h1>Case Studies</h1>
      {caseStudiesData.map((caseStudy, index) => (
        <div key={index}>
          <h2>{caseStudy.title}</h2>
          <img src={caseStudy.image} alt={caseStudy.title} />
          <p>{caseStudy.description}</p>
          <a href={caseStudy.link}>Read More</a>
        </div>
      ))}
    </main>
  );
};

export default CaseStudies;

// CASE STUDIES SHOULD BE A CAROUSEL