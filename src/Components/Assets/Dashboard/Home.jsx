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
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>REGISTER LAND</h3>
                    <GiArchiveRegister className='card_icon'/>
                </div>
              
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>BUY LAND</h3>
                    <FaCartPlus className='card_icon'/>
                </div>
              
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>SELL LAND</h3>
                    <FaCartPlus className='card_icon'/>
                </div>
               
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>ALERTS</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
               
            </div>
        </div>

       
    </main>
  )
}

export default Home
