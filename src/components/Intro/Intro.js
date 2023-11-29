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
            Website Developer
          </span> 
          <button className="btn">Work with me</button>
       
        </div>
      </div> 
      <div className="introContent">
        
        <p className="para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Esse itaque, incidunt tempora quam perspiciatis quia totam 
            deserunt, ad amet pariatur obcaecati, consequuntur alias 
            cupiditate laborum magni suscipit omnis beatae dolorum sit 
            ipsum fuga! Laudantium eius maxime laborum dolor, quae distinctio, 
            dolore quo harum nulla corrupti 
            error tempora explicabo pariatur deleniti?
        </p>
        <Link><button className='btn'>Download CV</button></Link>
      </div>          
    </section>
  )
}
export default Intro;