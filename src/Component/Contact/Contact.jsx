import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import './Contacts.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {   Typography, useTheme } from '@mui/material';
import { FiPhoneCall  } from "react-icons/fi";
import {AiOutlineWhatsApp} from 'react-icons/ai';
import {GoMailRead} from 'react-icons/go'

import ScrollToTop from 'react-scroll-to-top';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Slide from 'react-reveal/Slide';

const Contact = () => {
  const form = useRef();

  const [sendName, setSendName] = useState();
  const [sendMailing, setSendMailing] = useState();
  const [sendMessage, setSendMessage] = useState();

  const [sendNumber, setSendNumber] = useState();

  

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_21y8v1i",
        "template_yodtkii",
        form.current,
        "4jQCY4nB1PBkEFi9C"
      )

      .then((result) => {
        if (result.error) {
          toast.error(result.error, { position: toast.POSITION.TOP_RIGHT });
        } else {
          toast.success("Your Order has been placed", {
            position: toast.POSITION.TOP_RIGHT,
          });
          setSendName("");
          setSendMailing("");
          setSendMessage("");
          setSendNumber('');
        }
      });
  };

   const theme = useTheme();

  return (
    <div className="container contact-cont" style={{ marginTop: "80px" }}>
     
      <div className="cont">
        <Bounce top >
      <Typography
          sx={{
            fontWeight: 500,
            padding: 4,
            [theme.breakpoints.down("md")]: {
              fontSize:'25px',
              fontWeight:'700'
            },
    
          fontFamily: "Montserrat",
            color: "#01411c",
          }}
          display={"flex"}
          justifyContent={"center"}
          variant="h3"
          component={"h1"}
        >
          CONTACT US
        </Typography>
        </Bounce>
        <Zoom>
        <Typography 
        sx={{backgroundColor:'#01411c', width:'110px',borderRadius:'10px', height:'8px', display:'block' , margin: '-30px auto 50px auto'}}
        
        display={"flex"}
          justifyContent={"center"}
          variant="h3"
          component={"h1"}
          
          >
           <span></span>

        </Typography>
        </Zoom>
      </div>

                
       <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
        
        <Fade>

      <form ref={form} onSubmit={handleSubmit} className="form-container">

        <p style={{color:'white', fontSize:'20px', fontWeight:'600'}}>Contact Form</p>
           <Slide left>
        <div className="contact-form">
       
            <label className="form-label" style={{ marginTop: "10px" }}>Name</label>
        <input
          value={sendName}
          onChange={(e) => setSendName(e.target.value)}
          className="form-control"
          type="text"
          name="name"
          required
          autoFocus
          placeholder="Mary Peterson"
        />
        </div>
          </Slide>

        <Slide right>

      <div className="contact-form">

        <label className="form-label" style={{ marginTop: "10px" }}>Email</label>
        <input
          value={sendMailing}
          onChange={(e) => setSendMailing(e.target.value)}
          className="form-control"
          type="email"
          name="user_email"
          required
          placeholder="mary262@gmail.com"
        />
      </div>
        </Slide>


            

                     <Fade left>
          <div className="contact-form">
            <label className="form-label" style={{ marginTop: "10px" }}>
              Phone Number
            </label>
            <input
              value={sendNumber}
              onChange={(e) => setSendNumber(e.target.value)}
              className="form-control"
              type="phone"
              name="number"
              required
              placeholder="+2347067113500"
            />
          </div>
        </Fade>
            

             <Slide right>
              
                <div className="contact-form">

        <label className="form-label" style={{ marginTop: "10px" }}>Message</label>
        <textarea
          value={sendMessage}
          onChange={(e) => setSendMessage(e.target.value)}
          className="form-control"
          rows={4}
          name="message"
          required
          placeholder="Type your message here..."
        />
                </div>
            </Slide>

            <Bounce top>
              
        <div className="form-submit">

        <input
        
          type="submit"
          value="submit"
        />
        </div>
            </Bounce>
      </form>
        </Fade>

     


      </div>

          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">

            <div className="contact-us">
              
              <div className="row bottom">
                <div className="call col-xl-4 col-lg-4 col-md-12 col-sm-12" >
                  <div className="call-container">
                    <Bounce bottom>

                      <div className="call-icon">
                        <h5>
                          <FiPhoneCall size={40} />
                        </h5>
                      </div>
                    </Bounce>
                   <h3>08136326188</h3>
                  </div>
                   
                </div>
                <div className="call col-xl-4 col-lg-4 col-md-12 col-sm-12" >

        <div className="call-container">
                       <Bounce bottom>

                      <div className="call-icon">
                        <h5>
                          <AiOutlineWhatsApp size={40} />
                        </h5>
                      </div>
                    </Bounce>
                   <h3>+2348136326188</h3>
                  </div>
                   
                </div>
                <div className="call col-xl-4 col-lg-4 col-md-12 col-sm-12" >
                 <div className="call-container">
                      <Bounce bottom>

                      <div className="call-icon">
                        <h5>
                          <GoMailRead size={40} />
                        </h5>
                      </div>
                    </Bounce>
                   <h3> othniel4christ@gmail.com</h3>
                  </div>
                   
                </div>
           

              </div>
            </div>
          </div>

       
     
      
 <ScrollToTop
      height='20'
      smooth={true}
      width='20'
      style={{borderRadius:'90px', zIndex:"9999", marginBottom:'40px', backgroundColor:'#01411c'}}
      color='white'
      component={<p style={{ color: "white", marginTop:'10px' }}>UP</p>}
       />

      <ToastContainer
        draggable={true}
        hideProgressBar={true}
        closeOnClick
        pauseOnHover
        autoClose={10000}
      />
    </div>
  );
};

export default Contact;
