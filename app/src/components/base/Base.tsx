import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body, div, ul, li, dl, dt, ol, h1, h2, h3, h4, h5, h6, input, fieldset, legend, p, select, table, th, td, tr, textarea, button, form {
      padding: 0;
      margin: 0;
    }
    a{
      color: #222;
      text-decoration:none;
      &:hover {
        color: #390;
      }
    }
    body, input, textarea, select, button, table {
      font-family: 'Nanum Gothic', sans-serif;
      color: #222;
      font-size: 13px;
      line-height: 1.5;
    }
    /* 폰트 스타일 초기화 */
    em {
      font-style: normal
    }
    /* 불릿 기호 초기화 */
    dl, ul, li, ol, menu {
      list-style: none;
    }
    /* 제목 태그 초기화 */
    h1, h2, h3, h4, h5, h6 {
      font-size: 13px;
      color: #222;
      font-weight: normal;
    }
`;
export class IR {
  
  // 의미있는 이미지의 대체 텍스트를 제공하는 경우
  PM = styled.span`
    display: block; overflow: hidden; font-size: 0; line-height: 0; text-indent: -9999px;
  `;
  //의미있는 이미지의 대체 텍스트로 이미지가 없어도 대체 텍스트를 보여주고자 할 때
  WA = styled.span`
    display: block; overflow: hidden; position:relative; z-index: -1; width:100%; height:100%;
  `;
  // 대체 텍스트가 아닌 접근성을 위한 숨김 텍스트를 제공할 때
  SU = styled.span`
    overflow: hidden; position:absolute; width: 0; height: 0; line-height: 0; text-indent: -9999px;
  `;
} 


export const Wrap = styled.div`
    width: 100%;
`;

/* Contents */
export const Contents = styled.div`

`;



/* Footer */
export const Footer = styled.div`

    height: 200px;
    background: #333;
`;

/* 컨테이너 */
export const Container = styled.div`
    width: 990px;
    margin: 0 auto;
    height: inherit;
    background: rgba(255,255,255,0);
`;