import React from 'react';

const LoadingBar: React.FC = () => {
  return (
    <div className="loading-container">
      <div className="loading-bar">
        <div className="loading-progress"></div>
      </div>
    </div>
  );
};
export default LoadingBar;