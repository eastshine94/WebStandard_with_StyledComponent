import React from 'react';
import styled from 'styled-components';
import { Container } from '../../components/base/Base';
import { Block1, Block2, Block3, Block4, Block5, Block6 } from '../../components/contents/notice';

const Wrapper = styled.div`
    padding-top: 30px;
    background-color: #f6fdff;
`;
const Cont = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;
const Notices: React.SFC = () => {
    
    
    return (
        <Wrapper id="Cont_Cont">
            <Container>
                <Cont>
                    <Block1/>
                    <Block2/>
                    <Block3/>
                    <Block4/>
                    <Block5/>
                    <Block6/>
                </Cont>
            </Container>
        </Wrapper>
    );
}

export default Notices;