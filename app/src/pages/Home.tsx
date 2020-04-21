/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react';
import SkipMenu from '../components/skip/SkipMenu';
import {
    GlobalStyle, Wrap, Container,
    Contents, Cont_Cont, Cont_Ban, Footer, 
} from '../components/base/Base';
import { Header, Menu, Title } from '../container/home';
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
                        <Cont_Ban id="Cont_Ban">
                            <Container>cont_ban</Container>
                        </Cont_Ban>
                        <Cont_Cont id="Cont_Cont">
                            <Container>cont_cont</Container>
                        </Cont_Cont>
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