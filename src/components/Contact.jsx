import React, { useRef, useState, useEffect } from "react";
import {
  RiMessengerFill,
  RiMailSendFill,
  RiWhatsappFill,
} from "react-icons/ri";
import emailjs from 'emailjs-com'
import "./contact.css";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

const Contact = () => {
  const form = useRef();
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState("")
  const [name, setName] = useState("")
  const [placeholderText, setPlaceholderText] = useState("So, " + name + "What can I do for you?")
  console.log(placeholderText);
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

  useEffect(() => {
    setPlaceholderText(`So, ${name} What can I do for you?`);
  }, [name]);

  return (
    <section id="contact">
      <h5 data-aos="flip-left" data-aos-duration="1000">Contact me for more information</h5>
      <h2 data-aos="fade-up" data-aos-duration="2000">Contact</h2>
      <div className="container contact__container">
        <div className="">
          <h5 className="contact_socials-label">Contact me through</h5>
          <div className="contact-options">
            <div className="socials__container">
              <div className="col-6">
                <article className="contact__option mb" data-aos="flip-left" data-aos-duration="1000">
                  <RiMailSendFill className="contact__option-icon" />
                  <h4>Email</h4>
                  <h5 className="text-xs">patrick.doberiner@gmail.com</h5>
                  <a href="mailto:patrick.doberiner@gmail.com" target="_blank">Send a message</a>
                </article>
                <article className="contact__option mb" data-aos="flip-right" data-aos-duration="1000">
                  <RiMessengerFill className="contact__option-icon" />
                  <h4>Facebook</h4>
                  <h5>Patrick Nkodo</h5>
                  <a href="https://www.facebook.com/profile.php?id=100090584906271" target="_blank">Contact me</a>
                </article>
                <article className="contact__option mb" data-aos="flip-left" data-aos-duration="1000">
                  <RiWhatsappFill className="contact__option-icon" />
                  <h4>Whatsapp</h4>
                  <h5>+237696950600</h5>
                  <a href="https://wa.me/237696950600/?text=Message from portfolio" target="_blank">
                    Send a message
                  </a>
                </article>
              </div>
              <div className="col-6">
                <article className="contact__option mb" data-aos="flip-left" data-aos-duration="1000">
                  <BsLinkedin className="contact__option-icon" />
                  <h4>LinkedIn</h4>
                  <h5>Patrick Nkodo</h5>
                  <a href="https://www.linkedin.com/in/patrick-nkodo-071806227/" target="_blank">
                    View my profile
                  </a>
                </article>
                <article className="contact__option mb" data-aos="flip-left" data-aos-duration="1000">
                  <BsGithub className="contact__option-icon" />
                  <h4>Github</h4>
                  <h5>Patrick Nkodo</h5>
                  <a href="https://github.com/PatrickNkodo" target="_blank"> View my profile</a>
                </article>
                <article className="contact__option mb pb-0" data-aos="flip-left" data-aos-duration="1000">
                  <BsTwitter className="contact__option-icon" />
                  <h4>Twitter</h4>
                  <h5>EssamaPatrick2</h5>
                  <a href="https://twitter.com/EssamaPatrick2" target="_blank"> View my profile</a>
                </article>
              </div>
            </div>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail} data-aos="fade-left" data-aos-duration="1000">
          <h5 className="contact_form-label">Or fill this form to contact me</h5>
          <input
            data-aos="fade-left" data-aos-duration="1000"
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            id=""
            placeholder="Enter your name"
            required
          />
          <input data-aos="fade-right" data-aos-duration="2000"
            type="email"
            name="email"
            id=""
            placeholder={"Okay " + name + ", Enter your email"}
            required
          />
          <textarea name="message" placeholder={placeholderText} id="" cols="30" rows="10" data-aos="fade-left" data-aos-duration="3000"></textarea>
          <button className="btn" type="submit" data-aos="zoom-in" data-aos-duration="1000">
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