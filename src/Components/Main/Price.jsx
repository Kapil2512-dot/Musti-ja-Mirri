import React from 'react'
import './Price.css'

const Price = () => {
  
  return (
    <>
    <div className="price-stock">
    <ul>
      <li>
      <div className="wrapper">
      <b>&euro; 32.99</b>
      <p>Friend price &euro; 26.39</p>
      <div className="tick-text">
        <svg 
  xmlns="http://www.w3.org/2000/svg"
  width="10"
  height="10"
  viewBox="0 0 24 24"
  fill="none"
  stroke="green"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon green-tick"
>
  <circle cx="12" cy="12" r="10" stroke="green" fill="none"></circle>
  <path d="M9 12l2 2 4-4" stroke="green" fill="none"></path>
</svg>
  <p>Available in Stock</p>
      </div>
      <button>Buy it</button>
      

    </div>
      </li>
      <li>
      <div className="wrapper">
      <b style={{color: 'rgb(203, 70, 134)'}}>&euro; 3.50</b>
      <p style={{color: 'black'}}>Lowest price in last 30 days is:4.69</p>
      <div className="tick-text">
        <svg
  xmlns="http://www.w3.org/2000/svg"
  width="13"
  height="13"
  viewBox="0 0 24 24"
  fill="none"
  stroke="green"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon green-tick"
>
  <circle cx="12" cy="12" r="10" stroke="green" fill="none"></circle>
  <path d="M9 12l2 2 4-4" stroke="green" fill="none"></path>
</svg>
  <p>Available in Stock</p>
      </div>
      <button>Buy it</button>


    </div>
      </li>
      <li>
      <div className="wrapper">
      <b>&euro; 1.79</b>
      <p>Friend price &euro; 1.34</p>
      <div className="tick-text">
        <svg
  xmlns="http://www.w3.org/2000/svg"
  width="13"
  height="13"
  viewBox="0 0 24 24"
  fill="none"
  stroke="green"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon green-tick"
>
  <circle cx="12" cy="12" r="10" stroke="green" fill="none"></circle>
  <path d="M9 12l2 2 4-4" stroke="green" fill="none"></path>
</svg>
  <p>Available in Stock</p>
      </div>
      
      <button>Buy it</button>

    </div>
      </li>
      <li>
      <div className="wrapper">
      <b>&euro; 3.59</b>
      <p>Friend price &euro; 2.69</p>
      <div className="tick-text">
        <svg
  xmlns="http://www.w3.org/2000/svg"
  width="13"
  height="13"
  viewBox="0 0 24 24"
  fill="none"
  stroke="green"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon green-tick"
>
  <circle cx="12" cy="12" r="10" stroke="green" fill="none"></circle>
  <path d="M9 12l2 2 4-4" stroke="green" fill="none"></path>
</svg>
  <p>Available in Stock</p>
      </div>
      <button>Buy it</button>

    </div>
      </li>
    </ul>
    </div>
    </>
  )
}

export default Price