/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: relative;
    margin-top: 15px;
    border: 1px solid #ccc;

    & h4{
        font-size: 14px;
        color: #0093bd; 
        padding: 0 0 3px 0;
        font-weight: 700;
        border-bottom: 1px solid #ccc;
        padding : 8px 10px;
        & em {
            color: #cf3292;
        }
    }
    & ul{
        padding: 10px;
    }
    & ul li{
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        background: url("https://user-images.githubusercontent.com/41350459/80065043-6bd45700-8574-11ea-8c34-b555d66bd1d1.gif") no-repeat 0 8px;
        padding-left: 8px;
        & a{
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            width: 65%;
            &:hover {
                color: #390;
            }
        }
        & span {
            width: 30%;
            text-align: right;
        }
    }
`;

const More = styled.a`
    position: absolute;
    top: 9px;
    right: 9px;
`;
const Notice2: React.SFC = () => {
    
    return (
        <Wrapper>
            <h4>최신 <em>공지사항</em></h4>
            <ul>
                <li><a href="#">최신 공지사항입니다. 최신 공지사항입니다. 최신 공지사항입니다.</a><span>2020.04.25</span></li>
                <li><a href="#">최신 공지사항입니다. 최신 공지사항입니다. 최신 공지사항입니다.</a><span>2020.04.25</span></li>
                <li><a href="#">최신 공지사항입니다. 최신 공지사항입니다. 최신 공지사항입니다.</a><span>2020.04.25</span></li>
            </ul>
            <More href="#">더보기</More>
        </Wrapper>

    );
}


export default Notice2;