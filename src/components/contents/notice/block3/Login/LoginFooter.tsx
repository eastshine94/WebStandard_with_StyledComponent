/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import { IR } from '../../../../base/Base';

const SU = IR.SU;
const Wrapper = styled.div`
    margin-top: 5px;
    & li{
        display: inline;
        & a{
            font-size: 12px;
            &:hover {
                text-decoration: underline;
            }
        }
        
    }
`;


const LoginFooter: React.SFC = () => {
    return (
        <Wrapper>
            <h5><SU>로그인 문제해결</SU></h5>
            <ul>
                <li><a href="#"><strong>회원가입</strong></a> / </li>
                <li><a href="#">아이디</a>·<a href="#">비밀번호 찾기</a></li>
            </ul>

        </Wrapper>
    )
}

export default LoginFooter;

