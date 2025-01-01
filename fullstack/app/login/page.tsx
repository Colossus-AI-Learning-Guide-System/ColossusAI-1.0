import React from 'react';
import { FaGoogle } from 'react-icons/fa';

const Login: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#fff',
      }}
    >
      <h2 style={{ fontSize: '24px', color: '#333', marginBottom: '10px' }}>Let's get</h2>
      <h1 style={{ textAlign: 'center' }}>Started!</h1>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          maxWidth: '320px',
          marginBottom: '20px',
        }}
      >
        <input
          type="text"
          placeholder="Email address / Username"
          style={{
            width: '100%',
            padding: '12px',
            marginBottom: '10px',
            border: '2px solid #ccc',
            borderRadius: '25px',
            fontSize: '16px',
            backgroundColor: '#f7f7f7',
          }}
        />
        <input
          type="password"
          placeholder="Password"
          style={{
            width: '100%',
            padding: '12px',
            marginBottom: '10px',
            border: '2px solid #ccc',
            borderRadius: '25px',
            fontSize: '16px',
            backgroundColor: '#f7f7f7',
          }}
        />
        <a
          href="#"
          style={{
            alignSelf: 'flex-end',
            marginBottom: '20px',
            color: '#555',
            textDecoration: 'none',
            fontSize: '14px',
          }}
        >
          Forgot Password?
        </a>
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '12px',
            border: 'none',
            borderRadius: '25px',
            marginBottom: '10px',
            cursor: 'pointer',
            fontSize: '16px',
            textAlign: 'center',
            backgroundColor: '#333',
            color: 'white',
          }}
        >
          Login
        </button>
        <div style={{ marginBottom: '10px' }}>
          Not Registered?{' '}
          <a
            href="#"
            style={{
              color: '#4285F4',
              textDecoration: 'none',
            }}
          >
            Create an account
          </a>
        </div>
        <button
          style={{
            width: '100%',
            padding: '12px',
            border: 'none',
            borderRadius: '25px',
            marginBottom: '10px',
            cursor: 'pointer',
            fontSize: '16px',
            textAlign: 'center',
            backgroundColor: '#f8fafe',
            color: 'rgb(32, 32, 32)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <FaGoogle style={{ marginRight: '10px' }} />
          Continue with Google
        </button>
      </form>
    </div>
  );
};

export default Login;