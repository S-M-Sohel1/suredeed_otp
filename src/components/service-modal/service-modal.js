import React from 'react';

const Modal = ({ isOpen, onClose, title, description }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg w-1/2">
                <h2 className="text-xl font-bold">{title}</h2>
                <p className="mt-4">{description}</p>
                <button 
                    onClick={onClose} 
                    className="mt-6 bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;
