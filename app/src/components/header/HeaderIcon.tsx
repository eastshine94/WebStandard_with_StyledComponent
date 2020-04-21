import React from 'react';
import styled from 'styled-components';
import { IR } from '../base/Base';

interface StyledProps {
    position: string;
}

const HeaderIcon: React.SFC = () => {
    /*
        이미지를 background 속성 - 웹 표준 준수하기 위해서
        가상으로 대체를 문자를 만들어줌(IR 효과) => alt를 대신 해줄 요소
        이미지 스프라이트 효과
    */
    const IconWrapper = styled.div`
        text-align: center;
        margin-top: 30px;
    `;

    const Icon = styled.a.attrs((props: StyledProps) => ({
        position: props.position || "0 0",
    }))`
        width: 60px;
        height: 60px;
        display: inline-block;
        background: url("https://user-images.githubusercontent.com/41350459/79749898-f8033600-834a-11ea-973e-989ebcba431f.png");
        background-position: ${props => props.position};
        margin: 0 3px;
        &:hover{
        background-position-x : -60px;
        }
    `;
    const ir = new IR();
    const PM = ir.PM;
    return (
        <IconWrapper>
            <Icon href="#"><PM>icon1</PM></Icon>
            <Icon href="#" position="0 -60px"><PM>icon2</PM></Icon>
            <Icon href="#" position="0 -120px"><PM>icon3</PM></Icon>
            <Icon href="#" position="0 -180px"><PM>icon4</PM></Icon>
        </IconWrapper>
    );
}


export default HeaderIcon;