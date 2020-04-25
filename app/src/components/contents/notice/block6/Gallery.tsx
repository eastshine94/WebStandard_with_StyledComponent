/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import { GalleryBtn, GalleryImg } from './';


const Wrapper = styled.div`
    border: 1px solid #ccc;
    height: 254px;
    position: relative;
    overflow: hidden;
    & h4{
        font-size: 14px;
        color: #0093bd;
        border-bottom: 1px solid #ccc;
        padding: 10px 0 8px 11px;
        font-weight: bold;
    }
`;

const Gallery: React.SFC = () => {
    return (
        <Wrapper>
            <h4>포트폴리오</h4>
            <GalleryBtn/>
            <GalleryImg/>
        </Wrapper>
    );
}

export default Gallery;