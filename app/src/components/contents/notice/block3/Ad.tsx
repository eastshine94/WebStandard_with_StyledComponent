/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin-top: 15px;
    & h4 {
        font-size: 14px;
        color: #0093bd;
        padding-bottom: 4px;
        font-weight: 700;
    }
    & ul {
        display: flex;
        justify-content: space-between;
    }
    & li {
        width: 93px;
        & + li {
            margin-left: 5px;
        }
        & img{
            width: 100%;
        }
    }
`;

const Ad: React.SFC = () => {
    return (
        <Wrapper>
            <h4>Advertisement</h4>
            <ul>
                <li>
                    <a href="#">
                        <img src="https://user-images.githubusercontent.com/41350459/80281454-3e3f0780-8746-11ea-82e3-d63acab154db.jpg" alt="이미지1" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="https://user-images.githubusercontent.com/41350459/80281455-3f703480-8746-11ea-846a-3d3f2bbf6ed9.jpg" alt="이미지2" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="https://user-images.githubusercontent.com/41350459/80281456-40a16180-8746-11ea-82e9-0a57e678da37.jpg" alt="이미지3" />
                    </a>
                </li>
            </ul>

        </Wrapper>
    );
}

export default Ad;