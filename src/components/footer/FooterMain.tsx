/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import { FooterList, W3C } from './';
const Wrapper = styled.div`
    padding: 25px 0;
    text-align: center;

`;
const FooterMain: React.SFC = () => {
    return (
        <Wrapper>
            <FooterList/>
            <address>
                Copyright©github.com/eastshine94 All Right Reserved
            </address>
            <W3C/>
        </Wrapper>
    )
}

export default FooterMain;

