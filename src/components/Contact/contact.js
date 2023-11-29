import React from 'react'
import './contact.css'
import pic from '../../assets/pic.jpg'
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import linkedin from '../../assets/linkedin.svg';
import youtube from '../../assets/youtube.svg';

const Contact = () => {
  return (
    <section id='contactPage'>
        <div id="clients">
            <h1 className="contactPageTitle">My Clients</h1>
            <p className="clientDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Itaque obcaecati optio iure aut blanditiis accusantium 
                 velit numquam officia reiciendis quam laudantium illo qui molestias 
                maiores sapiente officiis, error doloremque explicabo!
            </p>
            <div className="clientImgs">
                <img src={pic} alt="" className="clientImg" />
                <img src={pic} alt="" className="clientImg" />
                <img src={pic} alt="" className="clientImg" />
                <img src={pic} alt="" className="clientImg" />
            </div>
        </div>
        <div id="contact">
              <h1 className="contactPageTitle">Contact Me</h1>
              <span className="contactDesc">
                  Lorem ipsum dolor sit amet consectetur 
                  adipisicing elit. Voluptatem, odit distinctio. Facilis corporis 
                  cupiditate sequi similique? Autem dignissimos eaque ipsa?
              </span>
              <form action="" className='contactForm'>
                  <input type="text" className="fullname" placeholder='Your Name' />
                  <input type="email" className="email" placeholder='Your Email' />
                  <textarea className='msg' name="message" cols='20'  rows="8" placeholder='Your Message'></textarea>
                  <button type='submit' value='send' className="submitBtn">Submit</button>
                  <div className="links" >
                    <img src={linkedin} alt="" className="link" />
                    <img src={instagram} alt="" className="link" />
                    <img src={facebook} alt="" className="link" />
                    <img src={youtube} alt="" className="link" />
                  </div>
              </form>
        </div>
    </section>
  )
}
export default Contact 