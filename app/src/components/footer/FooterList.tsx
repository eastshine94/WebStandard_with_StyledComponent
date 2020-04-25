/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.ul`
    margin-bottom: 20px;
    & li {
        display: inline;
        padding: 0 7px 0 10px;
        position: relative;
        & + li::before {
            content : '';
            width: 1px;
            height: 12px;
            background: #ccc;
            position: absolute;
            left: 0;
            top: 2px;
        }
    }
`;

const FooterList: React.SFC = () => {
    return(
        <Wrapper>
            <li><a href="#">사이트 도움말</a></li>
            <li><a href="#">사이트 이용약관</a></li>
            <li><a href="#">사이트 운영규칙</a></li>
            <li><a href="#"><strong>개인정보취급방침</strong></a></li>
            <li><a href="#">책임의 한계와 법적고지</a></li>
            <li><a href="#">게시중단요청 서비스</a></li>
            <li><a href="#">고객센터</a></li>
        </Wrapper>
    )
}

export default FooterList;

