import React from 'react'
import ReactStars from 'react-rating-stars-component';
import './Offer.css'
import Rating from './Rating';
import './Items4.css'

const Items4 = () => {
  const images = [
    { id: 'image1', src: '/images/4gloves.webp' ,Text: 'Rukka ' , description: 'Thermal dog softshell slipper' },
    { id: 'image2', src: '/images/2gloves.webp', Text: 'Feel Active ' , description:'Hiker dog slipper (2 pcs)'},
    { id: 'image3', src: '/images/spray.webp' , Text: 'Topline ',description:'Protective spray paws 300ml'},
    { id: 'image4', src: '/images/cream.webp' , Text: 'Animology',description:'Paws & Nose Balm 50ml'}
   
  ];
  const images2 =[
    { id: 'image1', src: '/images/4gloves.webp' ,Text: 'Rukka ' , description: 'Thermal dog softshell slipper' },
    { id: 'image2', src: '/images/2gloves.webp', Text: 'Feel Active ' , description:'Hiker dog slipper (2 pcs)'},
    { id: 'image3', src: '/images/spray.webp' , Text: 'Topline ',description:'Protective spray paws 300ml'},
    { id: 'image4', src: '/images/cream.webp' , Text: 'Animology',description:'Paws & Nose Balm 50ml'}
  ];

  return (
    <>

   <div className="rating" >
  {images.map((image) => (
    <div key={image.id} style={{ marginBottom: '20px' }}>
      <img src={image.src} alt={`Image ${image.id}`} />
      <div className="icon-and-text">
          <div className="text-with-icon" style={{ display: 'flex', alignItems: 'center' }}>
        <h4 style={{ margin: 0 }}>
          <b>{image.Text}</b> {image.description}
        </h4></div>
        <div className='logo7'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            strokeWidth="3"
            stroke="currentColor"
            fill="none"
          >
            <path d="M9.06,25C7.68,17.3,12.78,10.63,20.73,10c7-.55,10.47,7.93,11.17,9.55a.13.13,0,0,0,.25,0c3.25-8.91,9.17-9.29,11.25-9.5C49,9.45,56.51,13.78,55,23.87c-2.16,14-23.12,29.81-23.12,29.81S11.79,40.05,9.06,25Z"/>
          </svg>
        </div>

      
      
    </div>
    <Rating id={image.id} />
      </div>
      
    
  ))}
</div> 

      
    


    </>
  )
}


export default Items4