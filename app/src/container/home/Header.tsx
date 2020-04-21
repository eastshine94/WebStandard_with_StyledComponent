import React from 'react';
import styled from 'styled-components';
import { HeaderMenu, HeaderTitle, HeaderIcon } from '../../components/header';
import { Container } from '../../components/base/Base';

const Header: React.SFC = () => {
    const Wrapper = styled.div`
        width: 100%;
        height: 325px;
        background: url("https://user-images.githubusercontent.com/41350459/79687133-194b2000-8280-11ea-9c97-d57c2596a5b3.jpg") center top repeat-x;   
    `;
    return(
      <Wrapper>
        <Container>
            <HeaderMenu/>
            <HeaderTitle/>
            <HeaderIcon/>
        </Container>
      </Wrapper>  
    );
    
}

export default Header;