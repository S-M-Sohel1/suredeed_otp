// components/FloatingWhatsApp.js
'use client'; 
import React from 'react';

const FloatingWhatsApp = () => {
    const handleClick = () => {
        window.open('https://wa.me/01832650404', '_blank');
    };

    return (
        <div 
            className="fixed bottom-5 right-5 cursor-pointer" 
            onClick={handleClick}
        >
            <img 
                src="/wp.jpeg" 
                alt="WhatsApp" 
                style={{ width: '80px', height: '60px' }} 
            />
        </div>
    );
};

export default FloatingWhatsApp;
