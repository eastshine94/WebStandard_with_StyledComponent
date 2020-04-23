/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import { IR } from '../../../base/Base';

const ir = new IR();
const PM = ir.PM;
const Notice1: React.SFC = () => {
    const Wrapper = styled.div`
        position: relative;
        & h4{
            font-size: 14px;
            color: #0093bd; 
            padding: 0 0 3px 0;
            font-weight: bold;
        }
        & li{
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            background: url("https://user-images.githubusercontent.com/41350459/80065043-6bd45700-8574-11ea-8c34-b555d66bd1d1.gif") no-repeat 0 8px;
            padding-left: 8px;
            & a{
                font-size: 12px;
            }
        }
    `;
    const More = styled.a`
        position: absolute;
        right: 0;
        top: 0;
        display: block;
        background:url("https://user-images.githubusercontent.com/41350459/79749898-f8033600-834a-11ea-973e-989ebcba431f.png") no-repeat -150px -90px;
        width: 17px;
        height: 17px;
    `;
    return (
        <Wrapper>
            <h4>Web Publisher Notice</h4>
            <ul>
                <li><a href="#">display:inline과 display:block의 차이점은 무엇인가요?</a></li>
                <li><a href="#">HTML 태그 중에 dl,dd,ul,ol,li의 차이점이 무엇인가요?</a></li>
                <li><a href="#">HTML 태그 중에 strong과 em 태그의 차이점은 무엇인가요?</a></li>
                <li><a href="#">컨텐츠 요소를 가운데로 오게 하는 방법을 알려주세요!</a></li>
                <li><a href="#">독타입을 선언하는 이유에 대해서 설명하세요.</a></li>
            </ul>
            <More href="#" title="더보기"><PM>더보기</PM></More>
        </Wrapper>
    );
}


export default Notice1;