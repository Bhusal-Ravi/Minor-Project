//import React, { useState } from 'react';
//import { ethers } from 'ethers';
import './Login.css';

import metamasklogo from './metamask.png';
//import background from './background.jpg'; 
import { metaCall } from "./metamasklogic";




const Login = () => {

  const handleConnectMetamask = async () => {
    await metaCall();
  }
  return (
    
    <div className='container'>
       
        <div className='underline'>
            <div className='metamask'>
            <div className='metamask_inner'>
            <img className="metalogo" src={metamasklogo} alt='metamasklogo'/>
            <h1 className='metatext'>Connect Your Wallet</h1>
            </div>
            <button onClick={handleConnectMetamask}  className='connect_button'> Connect</button>
            </div>   
        </div>
        <div className="block">
          <h1 className="heading1">Securing Your Land With<br/>BlockChain Technology</h1>
        </div>
    </div>
    
        
  );
};

export default Login