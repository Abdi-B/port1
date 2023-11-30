import React from 'react'
import './port.css'
import bg from '../../assets/bg.jpg'

const Port = () => {
  return (
    <section id="works">
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="workDesc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Beatae aspernatur repudiandae, sequi nesciunt libero suscipit 
              asperiores maiores quaerat architecto. Placeat officia architecto, 
              sed itaque cupiditate molestias laborum voluptate officiis libero 
              error accusamus! Pariatur itaque perspiciatis sunt nesciunt, 
              at praesentium nostrum?
        </span>
        <div className="worksImgs">
                <img src={bg} alt="" className="worksImg" />
                <img src={bg} alt="" className="worksImg" />
                <img src={bg} alt="" className="worksImg" />
                {/* <img src={bg} alt="" className="worksImg" />
                <img src={bg} alt="" className="worksImg" />
                <img src={bg} alt="" className="worksImg" /> */}
        </div>
        <button className="workBtn">See More</button>
    </section>
  )
}

export default Port;