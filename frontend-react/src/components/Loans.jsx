import React from 'react';

function Loans() {
  return (
    <div className="loans-container">
      <h1>Loans</h1>
      <p>Compare and apply for loans that fit your financial needs</p>
      <ul>
        <h3>SBI Educational Loans</h3>
        {/* <li>Loan 2: 6% interest rate</li>
        <li>Loan 3: 7% interest rate</li> */}
      </ul>
      {/* <button>Apply Now</button> */}
      <button>
  <a href="https://sbi.co.in/web/interest-rates/interest-rates/loan-schemes-interest-rates/education-loan-scheme" target="_blank" rel="noopener noreferrer">
    Apply Now
  </a>
</button>
    </div>
  );
}

export default Loans;