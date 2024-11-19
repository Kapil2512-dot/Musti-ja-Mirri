import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Header/Navbar'
import Content from './Components/Main/Content'
import Images from './Components/Main/Images'
import Feature from './Components/Main/Feature'
import Photos from './Components/Main/Photos'
import Offer from './Components/Main/Offer'
import Price from './Components/Main/Price'
import Talent from './Components/Header/Talent'
import { BrowserRouter } from 'react-router-dom'
import Bigimg from './Components/Main/Bigimg'
import Price2 from './Components/Main/Price2'
import Price3 from './Components/Main/Price3'
import Bigimg2 from './Components/Main/Bigimg2'
import Rating1 from './Components/Main/Rating1'
import Price4 from './Components/Main/Price4'
import Items4 from './Components/Main/Items4'
import Price6 from './Components/Main/Price6'
function App() {

  return (
    <>
    <BrowserRouter>
    
    <Talent />
    <Navbar />
    <br></br>
    <Content />
    <br></br>
    <Images />
    <br></br><br></br>
    <Feature />
    <br></br>
    <Photos />
    <br></br>
    <Offer />
    <br></br>
    <Price />
    
    <Bigimg />
    <Price2 />
    <br></br> 
    <Price3 />
    <Bigimg2 />
    <Rating1 />
    <Price4 />
    <Items4 />
    <Price6 />
    </BrowserRouter>

    



    {/* <Price /> */}
    </>
  )
}

export default App
