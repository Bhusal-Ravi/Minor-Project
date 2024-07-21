import React from 'react'
import 
{BsFillBellFill}
 from 'react-icons/bs';
 import { GiArchiveRegister } from "react-icons/gi";
 import { FaCartPlus } from "react-icons/fa";

function Home() {

   

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>ADMIN DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>REQUESTS</h3>
                    <GiArchiveRegister className='card_icon'/>
                </div>
              
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>COMPLETED REQUESTS</h3>
                    <FaCartPlus className='card_icon'/>
                </div>
              
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>REPORTS</h3>
                    <FaCartPlus className='card_icon'/>
                </div>
               
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>ALERTS</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
               
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>TOTAL ACCEPTED</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
               <h1>1000</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>TOTAL REJECTED</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>1000</h1>
               
            </div>
        </div>

       
    </main>
  )
}

export default Home
