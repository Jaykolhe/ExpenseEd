import React from 'react';

function FinancialEducation() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h2>Financial Education</h2>
          <p>Learn how to manage your finances effectively with our guides and resources.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <button className="btn btn-primary btn-block">
            <a href="https://www.investopedia.com/investing-4427685" target="_blank" rel="noopener noreferrer">
              Student Financial Aid 
            </a>
          </button>
        </div><br/>
        <div className="col-md-4">
          <button className="btn btn-secondary btn-block">
            <a href="https://www.mygreatlearning.com/blog/financial-management-introduction-guide/" target="_blank" rel="noopener noreferrer">
            financial-management-guide
            </a>
          </button>
        </div><br/>
        <div className="col-md-4">
          <button className="btn btn-success btn-block">
            <a href="https://www.rbi.org.in/financialeducation/FinancialLiteracyGuide.aspx" target="_blank" rel="noopener noreferrer">
              Student Financial Literacy Guide
            </a>
          </button>
        </div><br/>
      </div>
      <div className="row">
        <div className="col-md-4">
          <button className="btn btn-warning btn-block">
            <a href="https://www.forbes.com/advisor/student-loans/best-student-loan-refinancing/" target="_blank" rel="noopener noreferrer">
              Best Student Loan Refinancing Options
            </a>
          </button>
        </div><br/>
        <div className="col-md-4">
          <button className="btn btn-danger btn-block">
            <a href="https://www.northwestern.edu/sfs/financial-aid-and-loans/loan-types/   " target="_blank" rel="noopener noreferrer">
              Understanding Student Loans
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FinancialEducation;