// components/LoadingSpinner.js
import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black opacity-50 z-50">
            <img src="spinner.png" alt="Loading" className="w-32 h-32 animate-spin" />
        </div>
    );
};

export default LoadingSpinner;