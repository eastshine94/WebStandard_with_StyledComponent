/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Slider, { Settings } from 'react-slick';
import styled from 'styled-components';

const Ban = styled.div`
    position: relative;
    padding: 24px 0 40px 0;
    
    & .slick-slider{
        overflow: hidden;
    }
    
    & .slick-track {
        display: flex;
        justify-content: space-between;
    }
    & .slick-slide{
        margin: 10px;
    }
    & .slick-prev {
        position: absolute;
        left: -80px;
        top: 80px;
        width: 43px;
        height: 43px;
        background: #ccc;
        background: url("https://user-images.githubusercontent.com/41350459/79749898-f8033600-834a-11ea-973e-989ebcba431f.png") no-repeat -150px 0;
        text-indent: -9999px;
        border: 0px;
        &:hover{
            background-position-x: -193px;
        }
    }
    & .slick-next{
        position: absolute;
        right: -80px;
        top: 80px;
        width: 43px;
        height: 43px;
        background: #ccc;
        background: url("https://user-images.githubusercontent.com/41350459/79749898-f8033600-834a-11ea-973e-989ebcba431f.png") no-repeat -150px -43px;
        text-indent: -9999px;
        border: 0px;
        &:hover{
            background-position-x: -193px;
        }
    }
    & .slick-dots {
        position: absolute; 
        bottom: 15px; 
        display: block; 
        width: 100%; 
        text-align: center;
        & li {
            display: inline-block; 
            width: 15px; 
            height: 15px; 
            margin: 5px;
            & button{
                font-size: 0;
                line-height: 0;
                display: block; 
                width: 15px; 
                height: 15px;
                cursor: pointer;
                background: #5dbfeb; 
                border-radius: 50%;
                border: 0px;
            }
            &.slick-active button {
                background: #2b91c8;
            }
        }    
    }
    & img {
        display: block;
        margin: auto;
        border: 4px solid #dcdcdc;
        &:hover{
            border-color: #98bcdc;
        }
    }
`;
const BannerList: React.SFC = () => {
    const settings: Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
    };
    return (
        <Ban>
            <Slider {...settings} >
                <div>
                    <a href="#">
                        <img src="https://user-images.githubusercontent.com/41350459/79964018-14c37900-84c5-11ea-8011-6da17cd0249d.jpg" alt="웹 표준 지침서 보기" />
                    </a>
                </div>
                <div>
                    <a href="#">
                        <img src="https://user-images.githubusercontent.com/41350459/79964034-18ef9680-84c5-11ea-8e02-d19887527a6c.jpg" alt="CSS 버튼 만들기" />
                    </a>
                </div>
                <div>
                    <a href="#">
                        <img src="https://user-images.githubusercontent.com/41350459/79964046-1d1bb400-84c5-11ea-93ed-44a6fdbac689.jpg" alt="로그인 폼 만들기" />
                    </a>
                </div>
                <div>
                    <a href="#">
                        <img src="https://user-images.githubusercontent.com/41350459/79964018-14c37900-84c5-11ea-8011-6da17cd0249d.jpg" alt="웹 표준 지침서 보기" />
                    </a>
                </div>
                <div>
                    <a href="#">
                        <img src="https://user-images.githubusercontent.com/41350459/79964034-18ef9680-84c5-11ea-8e02-d19887527a6c.jpg" alt="CSS 버튼 만들기" />
                    </a>
                </div>
                <div>
                    <a href="#">
                        <img src="https://user-images.githubusercontent.com/41350459/79964046-1d1bb400-84c5-11ea-93ed-44a6fdbac689.jpg" alt="로그인 폼 만들기" />
                    </a>
                </div>
            </Slider>
        </Ban>
    );
}

export default BannerList;