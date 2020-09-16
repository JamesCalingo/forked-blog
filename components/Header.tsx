import React from 'react';
import { config } from '../globals';

export const Header: React.FC = () => (
  <div
    style={{
      top: 0,
      width: '100%',
      height: '50px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: config.accentColor,
      padding: '30px',
      fontSize: '12pt',
    
    }}
  >
    <a href="/" style={{ textDecoration: 'none' }}>
      <h1 style={{ color: 'white', fontFamily: 'Helvetica, sans-serif',fontWeight: 'bold' }}>{config.yourName.toUpperCase()}</h1>
    </a>
    <div style={{ flex: 1 }} />
    <a href="https://jamescalingo.dev" style={{ textDecoration: 'none' }}>
      <p style={{ padding: '0px 1em', color: 'white' }}>Portfolio</p>
    </a>
  
  </div>
);
