import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginOrExplore = () => {
    const navigate = useNavigate();
    const goToStore=()=>{
        navigate('/store');
    }
    return (
        <div className='flex flex-col fixed left-1/3 top-1/2 bg-slate-500 border px-40 py-10'>
            <button className='p-4 px-8 border bg-gray-400 text-white rounded-md my-2' >Login</button>
            <button
            onClick={(e)=>{goToStore()}}
             className='p-4 px-8 border bg-gray-400 text-white rounded-md'
             >Explore</button>
             <p className='text-white'>Not have an account ?</p>
             <button className='text-white border bg-slate-400 py-1'>Sign-In</button>
        </div>
    );
};

export default LoginOrExplore;