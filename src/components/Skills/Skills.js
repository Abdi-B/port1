import React from 'react'
import "./Skills.css";
import checked from '../../assets/circlechecked.svg';

const Skills = () => {
  return (
    <section id="skills">
        <span className="Title">MY SKILLS</span>
        <span className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur eum 
            ipsum fuga incidunt obcaecati vitae reprehenderit similique earum 
            quia sunt, ad optio voluptatibus suscipit sit nulla animi at nemo 
            asperiores pariatur. Nemo repellendus sit accusamus odio ipsum error 
            voluptate omnis ratione totam soluta rerum in excepturi tempora, 
            vel iste suscipit.</span>
        
        <div className="lang">
            <div className="front">
                <h1 className='fed'>Front End Development</h1>
                <div className="frontlist">
                    <div className="one">
                        <div className="html1">
                            <img src={checked} alt="" className="circle" />
                            <div>
                                <span className="name">Html</span>
                                <span className="level">Experienced</span>
                            </div>
                        </div>
                        <div className="html1">
                            <img src={checked} alt="" className="circle" />
                            <div>
                                <span className="name">CSS</span>
                                <span className="level">Experienced</span>
                            </div>
                        </div>
                        <div className="html1">
                            <img src={checked} alt="" className="circle" />
                            <div>
                                <span className="name">Javascript</span>
                                <span className="level">Intermediate</span>
                            </div>
                        </div>
                        
                        
                    </div>
                    <div className="two">
                            <div className="html1">
                                <img src={checked} alt="" className="circle" />
                                <div>
                                    <span className="name">Typescript</span>
                                    <span className="level">Experienced</span>
                                </div>
                            </div>
                            <div className="html1">
                                <img src={checked} alt="" className="circle" />
                                <div>
                                    <span className="name">React js</span>
                                    <span className="level">Experienced</span>
                                </div>
                            </div>
                            <div className="html1">
                                <img src={checked} alt="" className="circle" />
                                <div>
                                    <span className="name">Next js</span>
                                    <span className="level">Intermediate</span>
                                </div>
                            </div>

                    </div>
                </div>

            </div>
            <div className="back">
                <h1 className='fed'>Back End Development</h1>
                <div className="frontlist">
                    <div className="one">
                        <div className="html1">
                            <img src={checked} alt="" className="circle" />
                            <div>
                                <span className="name">Node js</span>
                                <span className="level">Intermediate</span>
                            </div>
                        </div>
                        <div className="html1">
                            <img src={checked} alt="" className="circle" />
                            <div>
                                <span className="name">Express js</span>
                                <span className="level">Intermediate</span>
                            </div>
                        </div>
                        <div className="html1">
                            <img src={checked} alt="" className="circle" />
                            <div>
                                <span className="name">Mongodb</span>
                                <span className="level">Intermediate</span>
                            </div>
                        </div>
                        
                        
                    </div>
                    <div className="two">
                            <div className="html1">
                                <img src={checked} alt="" className="circle" />
                                <div>
                                    <span className="name">SQL</span>
                                    <span className="level">Intermediate</span>
                                </div>
                            </div>
                            <div className="html1">
                                <img src={checked} alt="" className="circle" />
                                <div>
                                    <span className="name">Firebase</span>
                                    <span className="level">Intermediate</span>
                                </div>
                            </div>
                            <div className="html1">
                                <img src={checked} alt="" className="circle" />
                                <div>
                                    <span className="name">PHP</span>
                                    <span className="level">Intermediate</span>
                                </div>
                            </div>

                    </div>
                </div>    

            </div>
        </div>
    </section>
  )
}

export default Skills