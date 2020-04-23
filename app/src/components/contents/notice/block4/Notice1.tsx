/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';

const Notice1: React.SFC = () => {
    const Wrapper = styled.div`
        & + div {
            margin-top: 15px;
        }
        & h4{
            font-size: 14px;
            color: #0093bd; 
            padding: 0 0 3px 0;
            font-weight: bold;
            
        }
        & ul{
            display: flex;
            justify-content: space-between;
        }
        & li {
            width: 93px;
            text-align:center;
            & a{
                & span{
                    position: relative;
                    display: block;
                    width: 93px;
                    height: 93px;

                    &:hover em{
                        visibility: visible;
                    }

                    & img{
                        width:100%;
                    }
                    & em{
                        visibility: hidden;
                        position: absolute;
                        left: 0;
                        top: 0;
                        background: rgba(0,0,0,0.7);
                        color: #fff;
                        width: 100%;
                        height: 100%;
                        line-height: 93px;
                    }
                }
                & strong{
                    padding-top: 3px;
                    font-size: 12px;
                    display: inline-block;
                }
            }
            & + li{
                margin-left: 5px;
            }
        }
    `;
    return (

        <Wrapper>
            <h4>Mouse Over</h4>
            <ul>
                <li>
                    <a href="#">
                        <span><img src="https://user-images.githubusercontent.com/41350459/80099934-38142400-85aa-11ea-8781-17c7d660a422.jpg" alt="이미지1" /><em>바로가기</em></span>
                        <strong>와이어 프레임</strong>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span><img src="https://user-images.githubusercontent.com/41350459/80099941-39455100-85aa-11ea-9f19-10e0c9212555.jpg" alt="이미지2" /><em>바로가기</em></span>
                        <strong>스케치 작업</strong>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span><img src="https://user-images.githubusercontent.com/41350459/80099944-3b0f1480-85aa-11ea-962d-9686eca016d5.jpg" alt="이미지3" /><em>바로가기</em></span>
                        <strong>UI 디자인</strong>
                    </a>
                </li>
            </ul>
        </Wrapper>
    
    );
}


export default Notice1;