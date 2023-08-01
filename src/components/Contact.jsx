import React, { useRef } from "react";
import {
  RiMessengerFill,
  RiMailSendFill,
  RiWhatsappFill,
} from "react-icons/ri";
import "./contact.css";
const Contact = () => {
  const form = useRef();
  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   emailjs
  //     .sendForm(
  //       "YOUR_SERVICE_ID",
  //       "YOUR_TEMPLATE_ID",
  //       form.current,
  //       "YOUR_PUBLIC_KEY"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };
  return (
    <section id="contact">
      <h5>Contact me for more information</h5>
      <h2>Contact</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <RiMailSendFill className="contact__option-icon" />
            <h4>Email</h4>
            <h5>patrick.doberiner@gmail.com</h5>
            <a href="mailto:patrick.doberiner@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerFill className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Patrick Nkodo</h5>
            <a href="https://m.me/patricknkodo">Write me on messenger</a>
          </article>
          <article className="contact__option">
            <RiWhatsappFill className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+237696950600</h5>
            <a href="whatsapp.com/send?phone=+237696950600">
              Send Whatsapp message
            </a>
          </article>
        </div>
        <form action="" ref={form}>
          <input
            type="text"
            name="name"
            id=""
            placeholder="Enter full name"
            required
          />
          <input
            type="email"
            name="email"
            id=""
            placeholder="Enter your email"
            required
          />
          <textarea name="message" id="" cols="30" rows="10"></textarea>
          <button className="btn" type="submit">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
