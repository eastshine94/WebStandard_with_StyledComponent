/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import { Container, IR } from '../../components/base/Base';
import { FooterMain } from '../../components/footer';

const SU = IR.SU;

const Wrapper = styled.div`
  border: 1px solid #eee;
`;
const Footer: React.SFC = () => {

  return (
    <Wrapper>
      <Container>
        <h2><SU>푸터 영역</SU></h2>
        <FooterMain/>
      </Container>
    </Wrapper>
  );

}

export default Footer;