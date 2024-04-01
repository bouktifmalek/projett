import React from 'react'
import './Courses.css'
import img1 from '../../assets/cat-1.jpg'
import img2 from '../../assets/cat-2.jpg'
import img3 from '../../assets/cat-3.jpg'
import img4 from '../../assets/cat-4.jpg'

const Courses = () => {
  return (
    
    <section className='courses'>
<div className='center-text'>
    <h5>COURSES</h5>
    <h2>Explore Populaire Courses</h2>

</div>
<div className='courses-content'>
    <div className='row'>
        <img src={img1} alt="" />
        <div className='courses-text'>
            <h5>50.000DT</h5>
            <h3>Web Design</h3>
            <h6>05 hours 15 minutes </h6>
           
        </div>
    </div>
    <div className='row'>
        <img src={img2} alt="" />
        <div className='courses-text'>
            <h5>100.00DT</h5>
            <h3>Graphic Design</h3>
            <h6>03 hours 15 minutes </h6>
            
        </div>
    </div>
    <div className='row'>
        <img src={img3} alt="" />
        <div className='courses-text'>
            <h5>180.000DT</h5>
            <h3>Video Editing</h3>
            <h6>08 hours 15 minutes </h6>
           
        </div>
    </div>
    <div className='row'>
        <img src={img4} alt="" />
        <div className='courses-text'>
            <h5>200.000T</h5>
            <h3>Online Marketing</h3>
            <h6>18 hours 15 minutes </h6>
        </div>
    </div>
</div>
<div className='main-btn'>
     <button type='submit'>Buy Now</button>
</div>
    </section>
  )
}

export default Courses
