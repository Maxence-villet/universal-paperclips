import React from 'react';

const Manufacturing = ({
  clipsPerSecond,
  inches,
  manufacturingCost,
  onWireClick,
}) => {
  return (
    
    
    
    
    
    
    
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Manufacturing</h5>
        <div className="mb-3">
          <p className="mb-1">Production: {clipsPerSecond}/s</p>
          <p className="mb-1">Wire: {inches} inches</p>
        </div>
        <button 
          className="btn btn-primary w-100" 
          onClick={onWireClick}
        >
          Buy Wire (${manufacturingCost})
        </button>
      </div>
    </div>
  );
};

export default Manufacturing;