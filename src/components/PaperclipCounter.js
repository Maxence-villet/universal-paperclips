import React from 'react';

const PaperclipCounter = ({ paperclipCount, onMakePaperclip }) => {
  return (
    <div className="text-center mb-5">
      <h1 className="display-4 mb-4">Paperclips: {paperclipCount}</h1>
      <button className="btn btn-primary btn-lg" onClick={onMakePaperclip}>
        Make Paperclip
      </button>
    </div>
  );
};

export default PaperclipCounter;