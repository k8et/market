import React, { useEffect } from 'react';

const Alert = ({ type, message, onClose }) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            onClose();
        }, 4000);

        return () => {
            clearTimeout(timeout);
        };
    }, [onClose]);

    return (
        <div className={`fixed bottom-4 right-4 z-50 ${type === 'success' ? 'text-green-900 bg-green-100 border-green-500' : 'text-red-900 bg-red-100 border-red-500'} border-t-4 rounded-b px-4 py-3 shadow-md`} role="alert">
            <div className="flex">
                <div className="py-1">
                    {type === 'success' ? (
                        <svg className="fill-current h-6 w-6 text-green-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm4.95 7.28l-4.5 4.5-2.5-2.5a1.5 1.5 0 0 0-2.12 2.12l3 3a1.5 1.5 0 0 0 2.12 0l5-5a1.5 1.5 0 0 0-2.12-2.12z"/>
                        </svg>
                    ) : (
                        <svg className="fill-current h-6 w-6 text-red-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm0 16a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm-.7-5.3a.7.7 0 0 1 1.4 0v3.6a.7.7 0 0 1-1.4 0v-3.6zm1.4-6.3c-.1 0-.3 0-.4.1l-5.6 5.6a.7.7 0 1 0 1 1.1l5.6-5.6a.7.7 0 0 0 0-1.1.7.7 0 0 0-.6-.1zm-5.6 0l-5.6 5.6a.7.7 0 0 0 1 1.1l5.6-5.6a.7.7 0 0 0 0-1.1c-.1-.1-.3-.1-.4-.1zm5.6 12.6a.7.7 0 0 1 0-1.4h.7a.7.7 0 0 1 0 1.4h-.7z"/>
                        </svg>
                    )}
                </div>
                <div>
                    <p className="font-bold">{message}</p>
                </div>
            </div>
        </div>
    );
};

export default Alert;
