/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import { IR } from '../../../base/Base';

const SU = IR.SU;
const Wrapper = styled.div`
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
                    bottom: 0;
                    background: rgba(0,0,0,0.7);
                    color: #fff;
                    width: 100%;
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
const Notice2: React.SFC = () => {
    
    return (

        <Wrapper>
            <h4><SU>Mouse Hover</SU></h4>
            <ul>
                <li>
                    <a href="#">
                        <span><img src="https://user-images.githubusercontent.com/41350459/80105188-2aaf6780-85b3-11ea-981f-71ce744eb78c.jpg" alt="이미지4"/><em>바로가기</em></span>
                        <strong>HTML</strong>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span><img src="https://user-images.githubusercontent.com/41350459/80105190-2b47fe00-85b3-11ea-8221-191f9ac779c2.jpg" alt="이미지5"/><em>바로가기</em></span>
                        <strong>CSS</strong>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span><img src="https://user-images.githubusercontent.com/41350459/80105197-2d11c180-85b3-11ea-9d7d-b0f868c906f8.jpg" alt="이미지6"/><em>바로가기</em></span>
                        <strong>jQuery</strong>
                    </a>
                </li>
            </ul>
        </Wrapper>
    
    );
}


export default Notice2;