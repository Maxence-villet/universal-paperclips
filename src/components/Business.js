import React from 'react';

const Business = ({
  availableFunds,
  unsoldInventory,
  pricePerClip,
  publicDemand,
  onLowerPrice,
  onRaisePrice,
}) => {
  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-body">
        <h3 className="card-title">Business</h3>
        <hr />
        <div className="row g-3">
          <div className="col-md-6">
            <p className="mb-2">Available Funds: ${availableFunds.toFixed(2)}</p>
            <p className="mb-2">Unsold Inventory: {unsoldInventory}</p>
          </div>
          <div className="col-md-6">
            <div className="d-grid gap-2 d-md-block mb-3">
              <button className="btn btn-outline-secondary me-2" onClick={onLowerPrice}>
                Lower
              </button>
              <button className="btn btn-outline-secondary" onClick={onRaisePrice}>
                Raise
              </button>
            </div>
            <p className="mb-1">Price per Clip: ${pricePerClip.toFixed(2)}</p>
            <p className="mb-0">Public Demand: {publicDemand.toFixed(0)}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;