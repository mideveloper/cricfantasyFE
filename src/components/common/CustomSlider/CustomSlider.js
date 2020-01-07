import React from 'react';
import Slider from 'react-slick';
import './CustomSlider.scss';

const CustomSlider = props => {
  const settings = {
    ...props.settings,
  };
  return (
    <>
      <Slider {...settings}>{props.children}</Slider>
    </>
  );
};

export default CustomSlider;
