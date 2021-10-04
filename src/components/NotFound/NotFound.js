import React from 'react';

const NotFound = () => {
    return (
        <div className="d-flex justify-content-center align-items-center mt-5 mb-5">
            <div className="mb-5 mt-5 pb-5">
                <h1><span className="text-danger fs-1 fw-bold">OOPs</span></h1>
                <h2 className="fw-bold">404</h2>
                <h4>Page Not Found</h4>
            </div>
        </div>
    );
};

export default NotFound;