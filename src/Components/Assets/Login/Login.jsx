//import React, { useState } from 'react';
//import { ethers } from 'ethers';
import './Login.css';
import Logo from './Land_Logo.png';
import metamasklogo from './metamask.png';
import background from './background.jpg'; 



const Login = () => {
  return (
    
    <div style={{backgroundImage:`url(${background})`}}className='container'>
        <div className='header'>
            <img className="site_logo"src={Logo} alt='Site_Logo'/>
            <h1 className='heading'>LORS</h1>
        </div>
        <div className='underline'>
            <div className='metamask'>
            <div className='metamask_inner'>
            <img className="metalogo" src={metamasklogo} alt='metamasklogo'/>
            <h1 className='metatext'>Connect Your Wallet</h1>
            </div>
            <button onClick={async () => {
    try {
      if (typeof window.ethereum !== 'undefined') {
        // Request Metamask to connect
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log('Metamask connected!');
        // You can now interact with the user's wallet using web3
      } else {
        console.log('Metamask not available.');
      }
    } catch (error) {
      console.error('Error connecting to Metamask:', error);
    }
  }}  className='connect_button'> Connect</button>
            </div>
            
            
        </div>
    </div>
    
        
  )
}

export default Login