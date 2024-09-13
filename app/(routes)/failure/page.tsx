"use client";

import { CSSProperties, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const FailurePage = () => {
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

    const messageStyle: CSSProperties = {
        color: '#FF6347', // Tomato red
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
        backgroundColor: '#FF6347', // Tomato red
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
                    viewBox="0 0 24 24"
                >
                    <circle cx="12" cy="12" r="12" fill="#FF6347" />
                    <path
                        d="M7.757 16.243l8.486-8.486m-8.486 0l8.486 8.486"
                        stroke="#000"
                        strokeWidth="2"
                    />
                </svg>
            </div>
            <div style={messageStyle}>Payment not processed</div>
            <h1 style={headingStyle}>Please try again later</h1>
            <p>You will be redirected to the home page shortly.</p>
            <button style={buttonStyle} onClick={() => router.push('/')}>Home</button>
        </div>
    );
};

export default FailurePage;