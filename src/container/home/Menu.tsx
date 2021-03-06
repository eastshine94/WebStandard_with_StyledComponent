/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import { Container, IR } from '../../components/base/Base';
import {ContNav} from '../../components/contents/nav'


const Su = IR.SU;

const Wrapper = styled.div`
    background-color: #f6fdff;
`;
const Menu: React.SFC = () => {   
    return (
        <Wrapper id="Cont_Nav">
            <Container>
                <h2><Su>전체 메뉴</Su></h2>
                <ContNav/>
            </Container>
        </Wrapper>
    );
}

export default Menu;