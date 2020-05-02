/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import { Container } from '../../components/base/Base';
import { BannerList } from '../../components/contents/banner';

const Wrapper = styled.div`
    background-color: #dceff7;
`;

const Banner: React.SFC = () => {    
    return (
        <Wrapper id="Cont_Ban">
            <Container>
                <BannerList/>
            </Container>
        </Wrapper>
    );
}

export default Banner;