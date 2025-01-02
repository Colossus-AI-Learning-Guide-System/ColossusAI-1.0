import React from 'react';
<<<<<<< HEAD
=======
import { FaGoogle } from 'react-icons/fa';
>>>>>>> 83995b1a253267d4795086fb3ed77f9b44239279

const Signup: React.FC = () => {
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
      <h1 style={{ textAlign: 'center' }}>Welcome!</h1>
      <p style={{ textAlign: 'center' }}>Signup to your account</p>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          maxWidth: '500px',
        }}
      >
<<<<<<< HEAD
        <input
          type="text"
          placeholder="Username"
          style={{
            width: '100%',
            padding: '12px',
            marginBottom: '10px',
            border: '2px solid #ccc',
            borderRadius: '20px',
            fontSize: '16px',
          }}
        />
=======
        <div
          style={{
            display: 'flex',
            width: '100%',
          }}
        >
          <input
            type="text"
            placeholder="First name"
            style={{
              flex: 1,
              padding: '12px',
              margin: '5px 5px 5px 0',
              border: '2px solid #ccc',
              borderRadius: '20px',
              fontSize: '16px',
            }}
          />
          <input
            type="text"
            placeholder="Surname"
            style={{
              flex: 1,
              padding: '12px',
              margin: '5px 0',
              border: '2px solid #ccc',
              borderRadius: '20px',
              fontSize: '16px',
            }}
          />
        </div>
>>>>>>> 83995b1a253267d4795086fb3ed77f9b44239279
        <input
          type="email"
          placeholder="Email Address"
          style={{
            width: '100%',
            padding: '12px',
            marginBottom: '10px',
            border: '2px solid #ccc',
            borderRadius: '20px',
            fontSize: '16px',
          }}
        />
        <input
          type="password"
          placeholder="Create Password"
          style={{
            width: '100%',
            padding: '12px',
            marginBottom: '10px',
            border: '2px solid #ccc',
            borderRadius: '20px',
            fontSize: '16px',
          }}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          style={{
            width: '100%',
            padding: '12px',
            marginBottom: '10px',
            border: '2px solid #ccc',
            borderRadius: '20px',
            fontSize: '16px',
          }}
        />
        <button
          type="submit"
          style={{
            width: '100%',
            maxWidth: '50%',
            padding: '12px',
            borderRadius: '20px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '5px',
            marginBottom: '5px',
            backgroundColor: '#333',
            color: 'white',
          }}
        >
          Create Account
        </button>
        <p
          style={{
            margin: '10px 0 5px',
            fontSize: '14px',
            textAlign: 'center',
          }}
        >
          Already Registered?{' '}
          <a
            href="#"
            style={{
              color: '#4285F4',
              textDecoration: 'none',
            }}
          >
            Login
          </a>
        </p>
<<<<<<< HEAD
      </form>
      <footer
        style={{
          position: 'absolute',
          bottom: '20px',
          textAlign: 'center',
          width: '100%',
          fontSize: '12px',
          opacity: '0.6',
        }}
      >
        Copyright © Colossus.AI Rights Reserved
      </footer>
=======
        <button
          style={{
            width: '100%',
            maxWidth: '50%',
            padding: '12px',
            borderRadius: '20px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '5px',
            marginBottom: '5px',
            backgroundColor: '#4285F4',
            color: 'white',
          }}
        >
          <FaGoogle style={{ marginRight: '10px' }} />
          Continue with Google
        </button>
      </form>
>>>>>>> 83995b1a253267d4795086fb3ed77f9b44239279
    </div>
  );
};

export default Signup;