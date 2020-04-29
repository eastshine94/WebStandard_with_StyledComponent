/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import Slider, { Settings } from 'react-slick';

const Img = styled.div`
    & .slick-track {
        display: flex;
        justify-content: flex-start;
    }
    & img {
        width: 100%;
    }
`;

const GalleryImg: React.FC = () => {
    const settings: Settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    }

    return (
        <Img>
            <Slider ref={slider => console.log(slider)} {...settings}>
                <div><a href="#"><img src="https://user-images.githubusercontent.com/41350459/80274347-9c52f700-8714-11ea-940f-d8e7e4258933.jpg" alt="갤러리1" /></a></div>
                <div><a href="#"><img src="https://user-images.githubusercontent.com/41350459/80274349-9d842400-8714-11ea-9f0e-156ef6a8b135.jpg" alt="갤러리2" /></a></div>
                <div><a href="#"><img src="https://user-images.githubusercontent.com/41350459/80274350-9f4de780-8714-11ea-86de-d5fd2cbacb2c.jpg" alt="갤러리3" /></a></div>
                <div><a href="#"><img src="https://user-images.githubusercontent.com/41350459/80274351-a07f1480-8714-11ea-9edf-0dbbfd34307a.jpg" alt="갤러리4" /></a></div>
                <div><a href="#"><img src="https://user-images.githubusercontent.com/41350459/80274354-a248d800-8714-11ea-8c91-9cada0c3f96c.jpg" alt="갤러리5" /></a></div>
            </Slider>
        </Img>
    );
}

export default GalleryImg;