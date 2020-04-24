/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import { IR } from '../../../base/Base';

interface StyledProps {
    active: boolean,
    bgColor: string,
    fontColor: string,
}

const ir = new IR();
const SU = ir.SU;
const Wrapper = styled.div.attrs((props: StyledProps) => ({
    active: false,
}))`
    border: 1px solid #ccc;
    padding: 8px;
    height: 105px;
    & ul{
        display: flex;
        justify-content: flex-start;
        border-bottom: 1px solid #ccc;    
    }
`;

const StyledList = styled.li.attrs((props: StyledProps) => ({
    active: false,
    bgColor: props.active ? "#2c94c4" : "inherit",
    fontColor: props.active ? "#fff" : "inherit",
}))`
    position: relative;
    border: 1px solid #ccc;
    margin-right: -1px;
    margin-bottom: -1px;
    background-color: ${props => props.bgColor};
    &:nth-child(1) ul{
        display: block;
    }
    & a{
        padding: 5px 10px;
        display: block;   
    }
    & > a {
        color: ${props => props.fontColor};
    }
    
    & ul{       
        display: none;
        position: absolute;
        border: 0;
        width: 270px;
        top: 38px;
        left: 0;
        & li {
            border: 0;
            background: url("https://user-images.githubusercontent.com/41350459/80065043-6bd45700-8574-11ea-8c34-b555d66bd1d1.gif") no-repeat 0 8px;
            padding-left: 18px;
            & a{
                overflow: hidden;
                text-overflow: ellipsis;
                white-space:nowrap;
                width: 100%;
                padding: 0 0 3px 0;
                &:hover{
                    color: #390;
                }
            }
        }
    }
`;
const Notice: React.SFC = () => {

    return (
        <Wrapper>
            <h4><SU>탭 메뉴</SU></h4>
            <ul>
                <StyledList active={true}><a href="#"> 공지사항1</a>
                    <ul>
                        <li><a href="#">첫 번째 공지사항 탭 메뉴 테스트 목록입니다. 첫 번째 공지사항 탭 메뉴 테스트 목록입니다.</a></li>
                        <li><a href="#">첫 번째 공지사항 탭 메뉴 테스트 목록입니다. 첫 번째 공지사항 탭 메뉴 테스트 목록입니다.</a></li>
                        <li><a href="#">첫 번째 공지사항 탭 메뉴 테스트 목록입니다. 첫 번째 공지사항 탭 메뉴 테스트 목록입니다.</a></li>
                    </ul>
                </StyledList>
                <StyledList><a href="#"> 공지사항2</a>
                    <ul>
                        <li><a href="#">두 번째 공지사항 탭 메뉴 테스트 목록입니다.</a></li>
                        <li><a href="#">두 번째 공지사항 탭 메뉴 테스트 목록입니다.</a></li>
                        <li><a href="#">두 번째 공지사항 탭 메뉴 테스트 목록입니다.</a></li>
                    </ul>
                </StyledList>
                <StyledList><a href="#"> 공지사항3</a>
                    <ul>
                        <li><a href="#">세 번째 공지사항 탭 메뉴 테스트 목록입니다.</a></li>
                        <li><a href="#">세 번째 공지사항 탭 메뉴 테스트 목록입니다.</a></li>
                        <li><a href="#">세 번째 공지사항 탭 메뉴 테스트 목록입니다.</a></li>
                    </ul>
                </StyledList>
            </ul>
        </Wrapper>
    );
}


export default Notice;