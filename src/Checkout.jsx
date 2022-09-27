import { useParams } from "react-router-dom";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Component/Contact/Contacts.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Typography } from "@mui/material";


import ScrollToTop from 'react-scroll-to-top';
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";
import GoToTop from "./Component/Gototop";

const Checkout = () => {
  const { topic } = useParams();

  const form = useRef();

  const [sendName, setSendName] = useState();
  const [sendNumber, setSendNumber] = useState();
  const [sendMailing, setSendMailing] = useState();
  const [sendMessage, setSendMessage] = useState();
  const [sendDate, setSendDate] = useState();
  const [jobtype, setJobtype] = useState();
  

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
          setJobtype("");
          setSendNumber("");
          setSendDate('');
        }
      });
  };

  return (
    <div id="checkout"  className="convic">

      <div className="another">

      </div>
      
        <div  id="check-back" className="none">


      <form
        ref={form}
        onSubmit={handleSubmit}
        style={{ marginBottom: "30px" }}
        className="form-container"
        id="form-container"
       
      >
        <p style={{ color: "green", fontSize: "20px", fontWeight: "600" }}>
          Checkout details
        </p>
        <Slide left>
          <div className="contact-form">
            <label className="form-label" style={{ marginTop: "10px" }}>
              Full Name
            </label>
            <input
              value={sendName}
              onChange={(e) => setSendName(e.target.value)}
              className="form-control"
              type="text"
              name="name"
              required
              autoFocus
              placeholder="John Peterson"
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
              placeholder="+2347034916900"
            />
          </div>
        </Fade>

        <Slide right>
          <div className="contact-form">
            <label className="form-label" style={{ marginTop: "10px" }}>
              Email Address
            </label>
            <input
              value={sendMailing}
              onChange={(e) => setSendMailing(e.target.value)}
              className="form-control"
              type="email"
              name="email"
              placeholder="john678@gmail.com"
            />
          </div>
        </Slide>

        <Slide left>
          <div className="contact-form">
            <label className="form-label" style={{ marginTop: "10px" }}>
             Deadline
            </label>
            <input
              value={sendDate}
              onChange={(e) => setSendDate(e.target.value)}
              className="form-control"
              type="date"
              name="deadline"
            />
          </div>
        </Slide>

        <Slide left>
          <div className="contact-form">
            <label className="form-label">Category</label>
            <select
              value={jobtype}
              onChange={(e) => setJobtype(e.target.value)}
              className="form-select"
              name="category"
              required
              placeholder="Select"
            >
              <option>Select</option>
              <option>Banner</option>
              <option>Birthday Design</option>
              <option>Book Cover</option>
              <option>Branding</option>
              <option>Bussiness Card</option>
              <option>Flyer</option>
              <option>Mockup Design</option>
              <option>Other</option>
              <option>Logo</option>
              <option>Wedding IV</option>
            </select>
          </div>
        </Slide>

        <Slide right>
          <div className="contact-form">
            <label className="form-label" style={{ marginTop: "10px" }}>
              Message
            </label>
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

        <Bounce buttom>
          <div className="form-submit">
            <input type="submit" value="submit" />
          </div>
        </Bounce>
      </form>
      
      </div>
       <ScrollToTop
      height='20'
      smooth={true}
      width='20'
      
      style={{borderRadius:'90px', zIndex:"9999", marginBottom:'40px', backgroundColor:'#01411c'}}
      color='white'
      component={<p style={{ color: "white", marginTop:'10px' }}>Up</p>}
       />

      <ToastContainer
        draggable={true}
        hideProgressBar={true}
        closeOnClick
        pauseOnHover
        autoClose={10000}
      />

        <GoToTop/>
    </div>
  );
};

export default Checkout;
