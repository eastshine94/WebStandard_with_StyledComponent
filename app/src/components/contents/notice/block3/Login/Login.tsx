import React from 'react';
import styled from 'styled-components';
import { IR } from '../../../../base/Base';
import { LoginHeader, LoginContent, LoginFooter } from './';

const SU = IR.SU;
const Wrapper = styled.div`
    background: #f2f4f5;
    padding: 15px;
`;


const Login: React.SFC = () => {
    return(
        <Wrapper>
            <h4><SU>로그인 정보</SU></h4>
            <form id="login_form" name="login_form" action="post">
                <fieldset>
                    <legend><SU>로그인 관련 설정</SU></legend>
                    <LoginHeader/>
                    <LoginContent/>
                    <LoginFooter/>
                </fieldset>
            </form>
        </Wrapper>
    )
}

export default Login;

