import React from "react";
import "./testimonials.css";
import img from "../assets/profile.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaQuoteLeft } from "react-icons/fa";
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5 data-aos="flip-left"  data-aos-duration="1000">What they sayabout me</h5>
      <h2 data-aos="fade-up"  data-aos-duration="2000">Testimonials</h2>
      <Swiper
        data-aos="flip-up"  data-aos-duration="2500"
        className="container testimonials__container"
        spaceBetween={50}
        slidesPerView={1}
        modules={[Pagination,EffectCards,Autoplay]}
        effect="card"
        pagination={{ clickable: true }}
        loop={true}
        autoplay= {{
          delay: 5000,
          disableOnInteraction: true 
        }}
      >
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={img} alt="avatar" />
          </div>
          <h5 className="client__name">Emmanuel Bruno</h5>
          <small className="client__review">
          <FaQuoteLeft/> Patrick is a passionated of software development. This is noticeable in the way he works hard. I love that.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={img} alt="avatar" />
          </div>
          <h5 className="client__name">Hongla Dominic </h5>
          <small className="client__review">
          <FaQuoteLeft/> I like the way he works. And he knows how to adapt in teamwork. That's a grat quality of his.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={img} alt="avatar" />
          </div>
          <h5 className="client__name">Ebene Marie</h5>
          <small className="client__review">
          <FaQuoteLeft/> I recommend you Patrick, you will not regret.
           I trust his determination. He will be the suitable person to complete a team of serious developers
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
