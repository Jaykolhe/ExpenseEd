import React from 'react';

function Scholarships() {
  return (
    <div className="scholarships-container">
      <h1>Scholarships</h1>
      <p>Explore available scholarships and apply to ones that match your profile</p>
      <ul>
        <h3>Mahadbt Scholarships</h3>
        {/* <li>Scholarship 2: </li>
        <li>Scholarship 3: $5000</li> */}
      </ul>
      {/* <button>Apply Now</button> */}
      <button className="btn btn-primary">
  <a href="https://mahadbt.maharashtra.gov.in/FindEligibleSchemes/FindEligibleSchemes" target="_blank" rel="noopener noreferrer">
    Find Scholarships
  </a>
</button>
    </div>
  );
}

export default Scholarships;