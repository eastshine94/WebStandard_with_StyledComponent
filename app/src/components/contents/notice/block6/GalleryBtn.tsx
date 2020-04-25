/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import { IR } from '../../../base/Base';

interface StyledProps {
    position: string;
}

const PM = IR.PM;

const Btn = styled.div`
    position: absolute;
    right: 5px;
    top: 7px;
    & ul {
        display: flex;
        justify-content: space-between;
    }
`;

const Icon = styled.li.attrs((props: StyledProps) => ({
    position: props.position || "0 0",
}))`
    & a{
        display: block;
        width: 23px;
        height: 23px;
        background: url("https://user-images.githubusercontent.com/41350459/79749898-f8033600-834a-11ea-973e-989ebcba431f.png") no-repeat;
        background-position: ${props => props.position};
        margin: 1px 2px;
        &:hover{
            background-position-x: -173px;
        }
    }
`;
const GalleryBtn: React.SFC = () => {
    return (
        <Btn>
            <ul>
                <Icon position="-150px -120px"><a href="#"><PM>시작</PM></a></Icon>
                <Icon position="-150px -143px"><a href="#"><PM>정지</PM></a></Icon>
                <Icon position="-150px -166px"><a href="#"><PM>이전이미지</PM></a></Icon>
                <Icon position="-150px -189px"><a href="#"><PM>다음이미지</PM></a></Icon>
            </ul>
        </Btn>
    );
}

export default GalleryBtn;