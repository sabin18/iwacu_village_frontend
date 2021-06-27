import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import img1 from '../../assets/images/crypto/HiV.jpeg';
import img2 from '../../assets/images/crypto/CAW-2021.jpeg';

const items = [
  {
    src: img1,
    altText: 'Slide 1',
    caption: 'Slide 1',
  },
  {
    src: img2,
    altText: 'Slide 2',
    caption: 'Slide 2',
  },
];

const HomeSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => (
    <CarouselItem
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      key={item.src}
    >
      <img
        src={item.src}
        alt={item.altText}
        className="img-responsive"
        style={{ width: ' 100%', height: ' auto' }}
      />
      <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
    </CarouselItem>
  ));
  return (
    <div>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </div>
  );
};

export default HomeSlider;
