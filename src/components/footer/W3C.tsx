import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin-top: 15px;
`;

const W3C: React.SFC = () => {
    return (
        <Wrapper>
            <a href="http://validator.w3.org/check?uri=referer">
                <img src="http://www.w3.org/Icons/valid-xhtml10" alt="Valid XHTML 1.0 Transitional" />
            </a>
            <a href="http://jigsaw.w3.org/css-validator/check/referer">
                <img src="http://jigsaw.w3.org/css-validator/images/vcss-blue" alt="올바른 CSS입니다!" />
            </a>
        </Wrapper>
    )
}

export default W3C;

