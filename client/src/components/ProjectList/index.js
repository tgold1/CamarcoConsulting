// import React from 'react';
// import { Link } from 'react-router-dom';
// import Project from '../../../../server/models/Project';

// const ProjectList = ({
//     Projects,
//     showCustomer = true,

// }) => {
//     if (!Projects.length) {
//     return <h3>No Projects listed</h3>
// }
 
// return(
//     <div>
//         {Projects && Projects.map((Project)) => (
//             <div key={Project._id} className="card md-3">
//             <h4 className="card-header bg-primary text-light p-2 m-0">
//                 {showCustomer ? (
//                     {Project.customer}
//                 ):(
//                     <>
//                     <span style={{ fontSize: '1rem' }}>
//                       This is your project
//                     </span>
//                   </>
//                 )}
    
//             </div>
//         )}
//     </div>
// )}