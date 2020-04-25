import React from 'react';
import styled from 'styled-components';
import { IR } from '../../../../base/Base';

const SU = IR.SU;
const Wrapper = styled.div`
    position: relative;

    & .input_text{
        width: 182px;
        height: 16px;
        padding: 2px 5px;
        border: 1px solid #bebebe;
        margin-bottom: 3px;
        background: #fff;
    }
    & .lc_btn {
        position: absolute;
        right: 0;
        top: 0;
        width: 62px;
        height: 47px;
        background: #fff;
        border: 1px solid #bebebe;
    }
`;

const LoginContent: React.SFC = () => {
    return(
        <Wrapper>
            <h5><SU>로그인 영역</SU></h5>
            <div className="lc_text">
                <label>
                    <SU>아이디</SU>
                    <input type="text" id="uid" name="uid" className= "input_text" maxLength= {20}/>
                </label>
                
                <label>
                    <SU>비밀번호</SU>
                    <input type="password" id="upw" name="upw" className= "input_text" maxLength= {20}/>
                </label>
                
                <button className="lc_btn" type="submit">로그인</button>
            </div>
        </Wrapper>
    )
}

export default LoginContent;

