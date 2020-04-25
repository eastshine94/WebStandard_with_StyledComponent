/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react';
import SkipMenu from '../components/skip/SkipMenu';
import styled from 'styled-components';
import {
    GlobalStyle
} from '../components/base/Base';
import { Header, Menu, Title, Banner, Notices, Footer } from '../container/home';

const Wrapper = styled.div`
`;

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <GlobalStyle />
                <SkipMenu/>
                <Wrapper>
                    <Header/>
     
                    <Menu/>
                    <Title/>
                    <Banner/>
                    <Notices/>
                 
                    <Footer/>
                </Wrapper>
            </React.Fragment>
        )
    }
}

export default Home;