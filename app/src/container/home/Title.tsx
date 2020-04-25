import React from 'react';
import styled from 'styled-components';
import { Container, IR } from '../../components/base/Base';


const PM = IR.PM;
const Wrapper = styled.div`
  background-color: #eaf7fd;
`;
const Tit = styled.div`
    position: relative;
    & h2{
        font-size: 40px;
        text-align: center;
        padding: 5px 0;
        letter-spacing: 2px;
        color: #2c94c4;
        font-family: 'Nanum Brush Script', cursive;
    }
`;
const Btn = styled.a`
    position: absolute;
    top: 5px;
    right: 0;
    width: 60px;
    height: 60px;
    background: url("https://user-images.githubusercontent.com/41350459/79749898-f8033600-834a-11ea-973e-989ebcba431f.png") no-repeat 0 -600px;
    &:hover {
        background-position-x: -60px;
    }
`;

const Title: React.SFC = () => {
    return(
        <Wrapper id="Cont_Tit">
            <Container>
                <Tit>
                    <h2>"나는 웹 개발자다!!"</h2>
                    <Btn><PM>전체 메뉴</PM></Btn>
                </Tit>
            </Container>
        </Wrapper>
    );
}

export default Title;