/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
const Nav = styled.div`
    overflow:hidden;
    padding: 30px 0;
    & > div {
        float: left;
        width: 40%;
        & h3 {
            font-size: 18px;
            color: #25a2d0;
            margin-bottom: 4px;
        }

        & ol{
            overflow: hidden;   
        }
        & ol li{
            float: left;
            width: 50%;
            & a:hover{
                text-decoration: underline;         
                color: #390;
            }
        }
        &:last-child{
            width: 20%;
            & ol li{
                width: 100%;
            }
        }
    }       
`;
const ContNav: React.SFC = () => {
    

    return (
        <Nav>
            <div>
                <h3>HTML Reference</h3>
                <ol>
                    <li><a href='#'>HTML 태그(Tag)</a></li>
                    <li><a href="#">블록 요소/인라인 요소</a></li>
                    <li><a href="#">DTD 선언</a></li>
                    <li><a href="#">언어 속성 설정</a></li>
                    <li><a href="#">HTML {`<title>`}</a></li>
                    <li><a href="#">HTML {`<meta>`}</a></li>
                    <li><a href="#">특수문자</a></li>
                    <li><a href="#">하이퍼 링크</a></li>
                    <li><a href="#">HTML {`<style>`}</a></li>
                    <li><a href="#">HTML {`<html>`}</a></li>
                    <li><a href="#">HTML {`<head>`}</a></li>
                    <li><a href="#">HTML {`<div>`}</a></li>
                    <li><a href="#">HTML {`<colgroup>`}</a></li>
                    <li><a href="#">HTML {`<caption>`}</a></li>
                </ol>
            </div>
            <div>
                <h3>CSS  Reference</h3>
                <ol>
                    <li><a href="#">CSS 선택자</a></li>
                    <li><a href="#">CSS 단위</a></li>
                    <li><a href="#">CSS 색상</a></li>
                    <li><a href="#">CSS 선언 방법</a></li>
                    <li><a href="#">상대주소와 절대주소</a></li>
                    <li><a href="#">CSS float</a></li>
                    <li><a href="#">이미지 표현 방법</a></li>
                    <li><a href="#">이미지 스프라이트</a></li>
                    <li><a href="#">IR 효과</a></li>
                    <li><a href="#">이미지 최적화</a></li>
                    <li><a href="#">background-color</a></li>
                    <li><a href="#">border-style</a></li>
                    <li><a href="#">font-size</a></li>
                    <li><a href="#">text-align</a></li>
                </ol>
            </div>
            <div>
                <h3>Webstandard</h3>
                <ol>
                    <li><a href="#">웹 표준</a></li>
                    <li><a href="#">웹 접근성</a></li>
                    <li><a href="#">W3C</a></li>
                    <li><a href="#">웹 접근성 연구소</a></li>
                    <li><a href="#">네이버 널리</a></li>
                    <li><a href="#">다음 다룸</a></li>
                    <li><a href="#">Webstandard</a></li>
                </ol>
            </div>
        </Nav>
    )
}

export default ContNav;