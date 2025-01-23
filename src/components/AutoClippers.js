import React from 'react';

const AutoClippers = ({
  autoClippersCount,
  autoClippersCost,
  onAutoClippersClick,
}) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Auto Clippers</h5>
        <div className="d-flex justify-content-between align-items-center">
          <button 
            className="btn btn-primary" 
            onClick={onAutoClippersClick}
          >
            Buy AutoClippers
          </button>
          <span className="badge bg-secondary">Level {autoClippersCount}</span>
        </div>
        <small className="text-muted d-block mt-2">
          Cost: ${autoClippersCost.toFixed(2)}
        </small>
      </div>
  </div>

  );
};

export default AutoClippers;