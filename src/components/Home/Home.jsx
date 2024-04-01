import React from 'react'
import educat from '../../assets/educat.jpg'
import './Home.css'

function Home() {
  return (
 <section className='home'>
  <div className='home-text'>
    <h6>Best online learning platform</h6>
    <h1>Accessible Online Courses For All</h1>
    <p>Own your future learning new skills online</p>
    <div>
      <form>
      <input className = 'e' type='email' placeholder='Write your email'></input>
      <input className ='o' type='submit' value="Let_s start"></input>
</form>
    </div>
  </div>
  <div>
    <img src="educat" alt="" />
  </div>
 </section>
  )
}

export default Home
