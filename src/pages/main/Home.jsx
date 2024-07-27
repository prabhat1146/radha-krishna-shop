import React, { useState } from 'react';
import "../../index.css"
import LoginOrExplore from './LoginOrExplore';

const Home = () => {

    const [lx,setlx]= useState(false)

    return (
        <div className=' h-screen bg-green-400'>
            <div className='  flex flex-row items-center justify-evenly h-1/4 bg-lime-400'>
                <p className=' text-9xl' >Radha</p>
                <p className=' text-9xl' >Krishna</p>
                <p className=' text-9xl' >Shop</p>
            </div>

            <div className='h-3/4 flex flex-row items-center justify-center'>
                <button onClick={(e)=>{setlx(true)}} className='text-4xl text-white border border-dotted p-2 rounded-md '>Get Started</button>
            </div>

            {lx && 
            <LoginOrExplore/>
            }
            
           
        </div>
        

    );
}

export default Home;