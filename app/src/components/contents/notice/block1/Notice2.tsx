/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import { IR } from '../../../base/Base';

const ir = new IR();
const PM = ir.PM;
const Notice2: React.SFC = () => {
    const Wrapper = styled.div`
        position: relative;
        margin-top: 15px;
        & h4{
            font-size: 14px;
            color: #0093bd; 
            padding: 0 0 3px 0;
            font-weight: bold;
        }
        & li{
            display: flex;
            justify-content: space-between;
            background: url("https://user-images.githubusercontent.com/41350459/80065043-6bd45700-8574-11ea-8c34-b555d66bd1d1.gif") no-repeat 0 8px;
            padding-left: 8px;
            font-size: 12px;
            & a{
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                width: 65%;
            }
            & span {
                width: 30%;
                text-align: right;
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
            <h4>Web Designer Notice</h4>
            <ul>
                <li><a href="#">JPG, PNG, GIF의 차이점이 무엇인가요?</a><span>2020.04.23</span></li>
                <li><a href="#">UI 디자인과 UX 디자인의 차이점</a><span>2020.04.23</span></li>
                <li><a href="#">인터랙션 디자인의 핵심은?</a><span>2020.04.23</span></li>
                <li><a href="#">포트폴리오를 하면서 가장 잘 했다고 생각하는 부분은 무엇인가요?</a><span>2020.04.23</span></li>
                <li><a href="#">웹 디자인과 모바일 디자인의 차이?</a><span>2020.04.23</span></li>
            </ul>
            <More href="#" title="더보기"><PM>더보기</PM></More>
        </Wrapper>

    );
}


export default Notice2;