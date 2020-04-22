/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import { Container, IR } from '../../components/base/Base';
import { BannerList } from '../../components/contents/banner';

const Banner: React.SFC = () => {
    const ir = new IR();
    const PM = ir.PM;
    const Wrapper = styled.div`
        background-color: #dceff7;
    `;
    const Ban = styled.div`
        position: relative;
        padding: 20px 0;
        & ul {
            display: flex;
            justify-content: space-between;
        }
        & ul li img {
            display: block;
            border: 4px solid #dcdcdc;
            &:hover{
                border-color: #98bcdc;
            }
        }
    `;
    const Prev = styled.a`
        position: absolute;
        left: -80px;
        top: 60px;
        width: 43px;
        height: 43px;
        background: url("https://user-images.githubusercontent.com/41350459/79749898-f8033600-834a-11ea-973e-989ebcba431f.png") no-repeat -150px 0;
        &:hover{
            background-position-x: -193px;
        }
    `;
    const Next = styled.a`
        position: absolute;
        right: -80px;
        top: 60px;
        width: 43px;
        height: 43px;
        background: url("https://user-images.githubusercontent.com/41350459/79749898-f8033600-834a-11ea-973e-989ebcba431f.png") no-repeat -150px -43px;
        &:hover{
            background-position-x: -193px;
        }
    `;
    return (
        <Wrapper id="Cont_Ban">
            <Container>
                <Ban>
                    <Prev href="#"><PM>이전 이미지</PM></Prev>
                    <BannerList/>
                    <Next href="#"><PM>다음 이미지</PM></Next>
                </Ban>
            </Container>
        </Wrapper>
    );
}

export default Banner;