/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react';
import SkipMenu from '../components/skip/SkipMenu';
import {
    GlobalStyle, Wrap, Container,
    Contents, Footer, 
} from '../components/base/Base';
import { Header, Menu, Title, Banner, Notices } from '../container/home';
class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <GlobalStyle />
                <SkipMenu/>
                <Wrap>
                    <Header/>
                    <Contents>
                        <Menu/>
                        <Title/>
                        <Banner/>
                        <Notices/>
                    </Contents>

                    <Footer>
                        <Container>footer</Container>
                    </Footer>

                </Wrap>
            </React.Fragment>
        )
    }
}

export default Home;