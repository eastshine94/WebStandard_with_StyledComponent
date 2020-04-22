import React from 'react';
import styled from 'styled-components';
import { Container, IR } from '../../components/base/Base';

interface StyledProps {
    position: string;
}
const ir = new IR();
const PM = ir.PM;

const Notice: React.SFC = () => {
    const Wrapper = styled.div`
        padding-top: 30px;
    `;
    const Cont = styled.div`
        display: flex;
        justify-content:space-between;
        flex-wrap:wrap;
    `;
    const Column = styled.div`
        width: 289px;
        height: 363px;
        margin: 0 0 30px 0;
        padding-right: 30px;
        border-right: 1px solid #c8c8c8;
        position: relative;
        &:nth-child(3n){
            border-right: 0px;
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
    `;
    return (
        <Wrapper id="Cont_Cont">
            <Container>
                <Cont>
                    <Column>
                        <IconImg position = "0px -240px"><PM>아이콘</PM></IconImg>
                        <IconTit>Notice</IconTit>
                        <IconDesc>가장 웹 페이지에서 기본이 되는 게시판 유형입니다.</IconDesc>
                    </Column>
                    <Column>
                        <IconImg position = "0px -300px"><PM>아이콘</PM></IconImg>
                        <IconTit>Notice</IconTit>
                        <IconDesc>가장 웹 페이지에서 기본이 되는 게시판 유형입니다.</IconDesc>
                    </Column>
                    <Column>
                        <IconImg position = "0px -360px"><PM>아이콘</PM></IconImg>
                        <IconTit>Notice</IconTit>
                        <IconDesc>가장 웹 페이지에서 기본이 되는 게시판 유형입니다.</IconDesc>
                    </Column>
                    <Column>
                        <IconImg position = "0px -420px"><PM>아이콘</PM></IconImg>
                        <IconTit>Notice</IconTit>
                        <IconDesc>가장 웹 페이지에서 기본이 되는 게시판 유형입니다.</IconDesc>
                    </Column>
                    <Column>
                        <IconImg position = "0px -480px"><PM>아이콘</PM></IconImg>
                        <IconTit>Notice</IconTit>
                        <IconDesc>가장 웹 페이지에서 기본이 되는 게시판 유형입니다.</IconDesc>
                    </Column>
                    <Column>
                        <IconImg position = "0px -540px"><PM>아이콘</PM></IconImg>
                        <IconTit>Notice</IconTit>
                        <IconDesc>가장 웹 페이지에서 기본이 되는 게시판 유형입니다.</IconDesc>
                    </Column>
                </Cont>
            </Container>
        </Wrapper>
    );
}

export default Notice;