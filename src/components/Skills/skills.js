import React from 'react'
import './skill.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'


const Skills = () => {
  return (
    <section id="skills">
         <span className="skillTitle">What I do</span>
         <span className="skillDesc">Highly motivated and passionate student pursuing a career in web development. Possesses a strong foundation in front-end technologies, combined with a creative and analytical mindset.</span>
         <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p>This is demo texts,you can write your text</p>
                </div>
            </div>
         </div>
         <div className="skillBars">
            <div className="skillBar">
                <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Website Design</h2>
                    <p>This is demo texts,you can write your text</p>
                </div>
            </div>
         </div>
         <div className="skillBars">
            <div className="skillBar">
                <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>App Design</h2>
                    <p>This is demo texts,you can write your text</p>
                </div>
            </div>
         </div>
    </section>
  )
}

export default Skills