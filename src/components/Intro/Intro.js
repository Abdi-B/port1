import React from 'react'
import "./intro.css";
import pic from "../../assets/Me.JPG";
import bg from "../../assets/codebg4.jpg";
import { Link } from "react-scroll";
const Intro = () => {
  return (
    <section id="intro" style={{ backgroundImage: `url(${bg})`, objectFit: `fill`, }}>
      <div className="bgImg">
        <img src={pic} alt="profile" className="bg" /> 
        <div className="name">
          <span className="hello">Hello,</span>
          <span className="introText">I'm <span className="introName">Samuel B</span> <br/>
            MERN Full-Stack Developer
          </span> 
          <button className="btn">Work with me</button>
       
        </div>
      </div> 
      <div className="introContent">
        
        <p className="para">
        As a Junior MERN (MongoDB, Express.js, React, Node.js) Full-Stack  developer, 
        I possess a solid foundation in full-stack web development, leveraging 
        these technologies to create efficient and dynamic applications. My experience 
        includes utilizing MongoDB for database management, implementing server-side 
        functionalities with Node.js and Express.js, and crafting engaging user interfaces with React. 
        With a keen eye for detail and a passion for learning, I actively seek opportunities to 
        contribute fresh perspectives and innovative solutions while collaborating within a team environment.
        </p>
        <Link><button className='btn'>Download CV</button></Link>
      </div>          
    </section>
  )
}
export default Intro;