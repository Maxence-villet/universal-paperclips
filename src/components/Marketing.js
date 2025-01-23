import React from 'react';

const Marketing = ({ marketingLevel, marketingCost, onMarketingClick }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Marketing</h5>
        <div className="d-flex justify-content-between align-items-center">
          <button 
            className="btn btn-primary" 
            onClick={onMarketingClick}
          >
            Upgrade Marketing
          </button>
          <span className="badge bg-secondary">Level {marketingLevel}</span>
        </div>
        <small className="text-muted d-block mt-2">
          Cost: ${marketingCost.toFixed(2)}
        </small>
      </div>
  </div>
  );
};

export default Marketing;