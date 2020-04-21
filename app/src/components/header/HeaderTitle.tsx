import React from 'react';
import styled from 'styled-components';

const HeaderTitle: React.SFC = () => {
    const Title = styled.div`
        text-align: center;
        & h1{
            background: #4aa8d4;
            font-size: 28px;
            font-weight: normal;
            text-transform: uppercase;
            padding: 5px 20px 6px 20px;
            margin-top: 40px;
            display: inline-block;
            color: #fff;
            
        }
        & a{
            display: inline-block;
            background: #2698cb;
            font-size: 18px;
            color: #fff;
            padding: 5px 20px 6px 20px;
            margin-top: -5px; 
        }
    `;
    return (
        <Title>
            <h1>Professional Publisher &amp; Designer</h1><br />
            <a href="https://github.com/eastshine94">eastshine94.co.kr</a>
        </Title>
    );
}


export default HeaderTitle;