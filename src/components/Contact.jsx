import React, { useRef, useState } from "react";
import {
  RiMessengerFill,
  RiMailSendFill,
  RiWhatsappFill,
} from "react-icons/ri";
import emailjs from 'emailjs-com'
import "./contact.css";

const Contact = () => {
  const form = useRef();
  const [showModal, setShowModal] = useState(false);
  const [modalText,setModalText]=useState("")

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ovufgi7",
        "template_ug6nmje",
        form.current,
        "nztylaIKmNW3J0Ray"
      )
      .then(
        (result) => {
         setModalText("Message sent successfully");
         setShowModal(true);
        },
        (error) => {
          setModalText("Sorry, an error occured");
        }
      );
  };

  return (
    <section id="contact">
      <h5 data-aos="flip-left"  data-aos-duration="1000">Contact me for more information</h5>
      <h2 data-aos="fade-up"  data-aos-duration="2000">Contact</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option" data-aos="flip-left"  data-aos-duration="1000">
            <RiMailSendFill className="contact__option-icon" />
            <h4>Email</h4>
            <h5>patrick.doberiner@gmail.com</h5>
            <a href="mailto:patrick.doberiner@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option" data-aos="flip-right"  data-aos-duration="1000">
            <RiMessengerFill className="contact__option-icon" />
            <h4>Facebook</h4>
            <h5>Patrick Nkodo</h5>
            <a href="https://www.facebook.com/profile.php?id=100090584906271" target="_blank">Contact me</a>
          </article>
          <article className="contact__option" data-aos="flip-left"  data-aos-duration="1000">
            <RiWhatsappFill className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+237696950600</h5>
            <a href="https://wa.me/237696950600/?text=Message from portfolio" target="_blank">
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail} data-aos="fade-left"  data-aos-duration="1000">
          <input
          data-aos="fade-left"  data-aos-duration="1000"
            type="text"
            name="name"
            id=""
            placeholder="Enter full name"
            required
          />
          <input data-aos="fade-right"  data-aos-duration="2000"
            type="email"
            name="email"
            id=""
            placeholder="Enter your email"
            required
          />
          <textarea name="message" id="" cols="30" rows="10" data-aos="fade-left"  data-aos-duration="3000"></textarea>
          <button className="btn" type="submit" data-aos="zoom-in"  data-aos-duration="1000">
            Send message
          </button>
        </form>
        {showModal && (
          <div className="modal">
            <h5>{modalText}</h5>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;