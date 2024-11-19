import React from 'react'
import './Navbar.css'
import Wishlist from './Wishlist'
import App from '../../App'
import { createRoutesFromElements, NavLink, Route } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
 

const Navbar = () => {
const route = createBrowserRouter(
  createRoutesFromElements(
    <  Route path='/' element={<App />}>
      <Route path='/wishlist' element={<Wishlist />} />
    </Route>
  )
)

   
  return (
 <>
 <div className="container">
    <img src='/images/Musti_ja_Mirri_logo.png' alt='Logo' />
    <ul>
      <li><NavLink to='/Wishlist' ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" stroke-width="3" stroke="currentColor" fill="none"><path d="M9.06,25C7.68,17.3,12.78,10.63,20.73,10c7-.55,10.47,7.93,11.17,9.55a.13.13,0,0,0,.25,0c3.25-8.91,9.17-9.29,11.25-9.5C49,9.45,56.51,13.78,55,23.87c-2.16,14-23.12,29.81-23.12,29.81S11.79,40.05,9.06,25Z"/></svg>WishList</NavLink></li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
      <select  name="dropdown">
  <option value="option1">Login/Register</option>
  <option value="option2">Login</option>
  <option value="option3">Register as a customer</option>
  <option value="option3">Purchase</option>

</select></li>
    </ul>
    
    
    <div className="textbar">
           <button><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32" width="32px" height="32px"><path d="M 19 3 C 13.488281 3 9 7.488281 9 13 C 9 15.394531 9.839844 17.589844 11.25 19.3125 L 3.28125 27.28125 L 4.71875 28.71875 L 12.6875 20.75 C 14.410156 22.160156 16.605469 23 19 23 C 24.511719 23 29 18.511719 29 13 C 29 7.488281 24.511719 3 19 3 Z M 19 5 C 23.429688 5 27 8.570313 27 13 C 27 17.429688 23.429688 21 19 21 C 14.570313 21 11 17.429688 11 13 C 11 8.570313 14.570313 5 19 5 Z"/></svg></button>
          <input type='text' placeholder='Find a Product' />
    </div>
 </div>
 </>
 )

}

export default Navbar