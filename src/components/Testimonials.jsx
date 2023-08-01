import React from "react";
import "./testimonials.css";
import img from "../assets/Me.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>What they sayabout me</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        spaceBetween={50}
        slidesPerView={1}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        loop={true}
      >
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={img} alt="avatar" />
          </div>
          <h5 className="client__name">Emmanuel Bruno</h5>
          <small className="client__review">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
            cumque quibusdam distinctio ullam vero nihil ducimus modi,
            consectetur inventore nostrum ipsam, sapiente laborum aliquam
            consequatur rem vitae aliquid corporis autem.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={img} alt="avatar" />
          </div>
          <h5 className="client__name">Emmanuel Bruno</h5>
          <small className="client__review">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
            cumque quibusdam distinctio ullam vero nihil ducimus modi,
            consectetur inventore nostrum ipsam, sapiente laborum aliquam
            consequatur rem vitae aliquid corporis autem.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={img} alt="avatar" />
          </div>
          <h5 className="client__name">Emmanuel Bruno</h5>
          <small className="client__review">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
            cumque quibusdam distinctio ullam vero nihil ducimus modi,
            consectetur inventore nostrum ipsam, sapiente laborum aliquam
            consequatur rem vitae aliquid corporis autem.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={img} alt="avatar" />
          </div>
          <h5 className="client__name">Emmanuel Bruno</h5>
          <small className="client__review">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
            cumque quibusdam distinctio ullam vero nihil ducimus modi,
            consectetur inventore nostrum ipsam, sapiente laborum aliquam
            consequatur rem vitae aliquid corporis autem.
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
