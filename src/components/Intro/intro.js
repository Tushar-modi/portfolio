import React from 'react'
import './intro.css'
import bg from '../../assets/dev.png';
import btnImg from '../../assets/hireme.png';
const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
               <span className='hello'>Hello,</span>
               <span className="introText">I'am <span className='introName'>Tushar</span> <br />Website Designer</span>
               <p className='introPara'>I am a skilledweb designer with experience in creating <br /> visually appealing and user friendly websites.</p>
        </div>
        <img src={bg} alt="profile" className='bg'/>
    </section>
  )
}

export default Intro;