import React, { useState } from "react";
import "./Slider.css";
import dataSlider from "./Slider/dataSlider";
import BtnSlider from "./BtnSlider";

export default function Slider() {
  const [slideAnime, setSlideAnim] = useState({ index: 1, inProgress: false });

  const nextSlide = () => {
    if (slideAnime.index !== dataSlider.length && !slideAnime.inProgress) {
      setSlideAnim({ index: slideAnime.index + 1, inProgress: true });
      setTimeout(() => {
        setSlideAnim({ index: slideAnime.index + 1, inProgress: false });
      }, 400);
    } else if (
      slideAnime.index === dataSlider.length &&
      !slideAnime.inProgress
    ) {
      setSlideAnim({ index: 1, inProgress: false });
    }
  };

  const prevSlide = () => {
    if (slideAnime.index !== 1 && !slideAnime.inProgress) {
      setSlideAnim({ index: slideAnime.index - 1, inProgress: true });
      setTimeout(() => {
        setSlideAnim({ index: slideAnime.index - 1, inProgress: false });
      }, 400);
    } else if (slideAnime.index === 1) {
      setSlideAnim({ index: 5, inProgress: false });
    }
  };

  const moveDot = (index) => {
    setSlideAnim({ index: index, inProgress: false });
  };

  return (
    <div className="container-slider">
      {dataSlider.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={
              slideAnime.index === index + 1 ? "slide active-anim" : "slide"
            }
          >
            <img src={`/Imgs/img${index + 1}.jpg`} alt="" />
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <div className="container-dots">
        {Array.from({ length: 5 }).map((item, index) => {
          return (
            <div
              className={slideAnime.index === index + 1 ? "dot-active" : "dot"}
              onClick={() => moveDot(index + 1)}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
