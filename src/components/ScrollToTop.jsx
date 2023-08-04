import React, { useState, useEffect } from 'react'
import { RiArrowUpLine } from 'react-icons/ri';
import './scroll.css'
const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 0.8 * window.innerHeight) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <div
            className={`scroll-to-top ${isVisible ? "visible" : ""}`}
            onClick={scrollToTop}
        >
            <RiArrowUpLine />
        </div>
    );
};
export default ScrollToTop;