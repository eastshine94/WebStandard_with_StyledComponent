import React from 'react';
import styled from 'styled-components';
import { IR } from '../../../../base/Base';

const SU = IR.SU;
const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    font-size: 12px;
    height: 30px;
    & .lh_check {
        padding-right: 15px;
        & .input_check{
            vertical-align: -2px;
            margin-right: 2px;
        }
    }
    & .lh_ip{
        & em {
            color: #0093bd;
            text-decoration: underline;
        }
    }
`;


const LoginHeader: React.SFC = () => {
    return (
        <Wrapper>
            <h5><SU>로그인 보안</SU></h5>
            <div className="lh_check">
                <label>
                    <input id="info_check" type="checkbox" className="input_check" />
                    로그인 상태 유지
                </label>
            </div>
            <div className="lh_ip">
                IP 보안 <em>ON</em>
            </div>
        </Wrapper>

    )
}

export default LoginHeader;

