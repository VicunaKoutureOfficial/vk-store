"use client";

import { CSSProperties, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const SuccessPage = () => {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/');
        }, 5000); // Redirects after 5 seconds

        return () => clearTimeout(timer);
    }, [router]);

    const containerStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'column' as 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
        backgroundColor: 'white',
    };

    const thankYouStyle: CSSProperties = {
        color: '#90ee90', // Light green
        fontSize: '32px',
        fontWeight: 600, // Less bold than 'bold'
        marginBottom: '20px',
    };

    const headingStyle: CSSProperties = {
        fontWeight: 600, // Less bold than 'bold'
        marginBottom: '20px',
    };

    const buttonStyle: CSSProperties = {
        marginTop: '20px',
        padding: '10px 20px',
        backgroundColor: '#90ee90', // Light green
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    };

    return (
        <div style={containerStyle}>
            <div style={{ marginBottom: '20px' }}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100"
                    height="100"
                    fill="#90ee90" // Light green
                    viewBox="0 0 24 24"
                >
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12C24 5.373 18.627 0 12 0zm-1.292 16.292l-4-4a1.003 1.003 0 011.414-1.414L11 13.586l5.292-5.293a1.003 1.003 0 011.414 1.414l-6 6a1.003 1.003 0 01-1.414 0z" />
                </svg>
            </div>
            <div style={thankYouStyle}>Thank You!</div>
            <h1 style={headingStyle}>Payment done successfully</h1>
            <p>You will be redirected to the home page shortly.</p>
            <button style={buttonStyle} onClick={() => router.push('/')}>Home</button>
        </div>
    );
};

export default SuccessPage;