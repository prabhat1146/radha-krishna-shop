// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import {  Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import {Home,Layout,Store } from './AllPages';

const router=createBrowserRouter(
   
   createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
         <Route path='' element={<Home/>}></Route>
         <Route path='store' element={<Store/>}></Route>
         
      </Route>
   )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode >
   <RouterProvider router={router}/>
 </React.StrictMode>

);