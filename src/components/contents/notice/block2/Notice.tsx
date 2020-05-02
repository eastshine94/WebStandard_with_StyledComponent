/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import { IR } from '../../../base/Base';


const PM = IR.PM;
const Wrapper = styled.div`
    position: relative;
    & h4{
        font-size: 14px;
        color: #0093bd; 
        padding: 0 0 3px 0;
        font-weight: bold;
    }
    & li {
        position: relative;
        padding: 8px 0 14px 60px;
        & a:hover {
                color: #390;
        }
        & img{
            width: 50px;
            position: absolute;
            top: 0;
            left: 0;
            border: 1px solid #0093bd;
        }
        & strong{
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            
        }
        & span{
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
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
const Notice: React.SFC = () => {
    
    return (
        <Wrapper>
            <h4>HTML Reference</h4>
            <ul>
                <li>
                    <a href="#">
                        <img src="https://user-images.githubusercontent.com/41350459/80073420-b8bf2a00-8582-11ea-8871-9fa98523aeaf.jpg" alt="이미지1" />
                        <strong>[HTML] table</strong>
                        <span>table 태그는 표를 만들 때 사용합니다.</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="https://user-images.githubusercontent.com/41350459/80073471-c96fa000-8582-11ea-9cb6-34771e4dc7a7.jpg" alt="이미지2" />
                        <strong>[HTML] div</strong>
                        <span>div 태그는 문서의 섹션을 만들거나 영역을 나눌 때 사용합니다.</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="https://user-images.githubusercontent.com/41350459/80073428-bb218400-8582-11ea-9a8a-a41bce448430.jpg" alt="이미지3" />
                        <strong>[HTML] dl</strong>
                        <span>dl 태그는 용어를 설명하는 목록형 태그입니다.</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="https://user-images.githubusercontent.com/41350459/80073433-bd83de00-8582-11ea-869d-64b28bcb2306.jpg" alt="이미지4" />
                        <strong>[HTML] em</strong>
                        <span>em 태그는 텍스트를 강조할 때 사용합니다.</span>
                    </a>
                </li>
            </ul>
            <More href="#" title="더보기"><PM>더보기</PM></More>
        </Wrapper>
    );
}


export default Notice;