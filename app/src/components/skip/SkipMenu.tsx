import React from 'react';
import styled from 'styled-components';
const Skip = styled.div`
    position: relative;
    & a{
        position: absolute;
        left: 0px;
        top: -35px;
        border: 1px solid #fff;
        color: #fff;
        background: #333;
        line-height: 30px;
        width: 160px;
        text-align: center;
        &:active, &:focus{
        top:0;
        }
    }
`;
const SkipMenu: React.FC = () => {
    
    return (
        <Skip>
            <a href="#Cont_Nav">전체 메뉴 바로가기</a>
            <a href="#Cont_Ban">배너 영역 바로가기</a>
            <a href="#Cont_Cont">컨텐츠 영역 바로가기</a>
        </Skip>
    );
}




export default SkipMenu;