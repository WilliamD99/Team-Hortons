import React from 'react'
import img1 from "../assets/slideshow/slide-1.jpg"
import img2 from "../assets/slideshow/slide-2.jpg"
import img3 from "../assets/slideshow/slide-3.jpg"
import { Zoom } from 'react-slideshow-image';

export default function SlideShow() {
    const zoomOutProperties = {
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        indicators: false,
        scale: 0.4,
        arrows: false
    };
    const images = [img1, img2, img3];

    return (
        <div className="slide-container mt-2">
            <div className="title">
                <p>BEST OF</p>
                <h2>INDIA</h2>
            </div>
            <Zoom {...zoomOutProperties}>
                {
                    images.map((each, index) =>
                        <img key={index} style={{ width: "100%" }} src={each} alt="slideshow" />
                    )
                }
            </Zoom>
        </div>
    )
}
