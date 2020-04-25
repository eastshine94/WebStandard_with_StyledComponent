import React from 'react';
import styled from 'styled-components';
import { IR } from '../../base/Base';

interface StyledProps {
    position: string;
}
interface Props {
    title: string;
    position?: string;
    description: string;
    children: React.ReactChild;
}

const PM = IR.PM;
const Column = styled.div`
    width: 289px;
    height: 363px;
    margin: 0 30px 30px 0;
    padding-right: 30px;
    border-right: 1px solid #c8c8c8;
    position: relative;
    &:nth-child(3n){
        border-right: 0px;
        margin-right: 0; 
        padding-right: 0;
    }
`;

const IconImg = styled.div.attrs((props: StyledProps) => ({
    position: props.position || "0 0",
}))`
    display: block;
    width: 60px;
    height: 60px;
    background: url("https://user-images.githubusercontent.com/41350459/79749898-f8033600-834a-11ea-973e-989ebcba431f.png") no-repeat;
    background-position: ${props => props.position};
    position: absolute;
    left: 0;
    top: 0;
    &:hover {
        background-position-x: -60px;
    }
`;
const IconTit = styled.h3`
    padding-left: 70px;
    font-size: 16px;
    color: #2c94c4;
`;
const IconDesc = styled.p`
    padding: 0 0 15px 70px;
    border-bottom: 1px solid #d0d0d0;
    margin-bottom: 15px;
`;
const BlockFrame: React.SFC<Props> = ({title, position, description, children}) => {

    return (
        <Column>
            <IconImg position={position}><PM>아이콘</PM></IconImg>
            <IconTit>{title}</IconTit>
            <IconDesc>{description}</IconDesc>
            {children}
        </Column>
    );
}

export default BlockFrame;