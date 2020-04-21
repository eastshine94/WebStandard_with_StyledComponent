import React from 'react';
import styled from 'styled-components';



const HeaderMenu: React.SFC = () => {
    const Menu = styled.div`
        text-align: right;
        & a{
            color: #fff;
            padding: 10px 0px 10px 13px;
            display: inline-block;
            &:hover{
                color: #666;
            }
        }
    `;
    return (
        <Menu>
            <a href='https'>Desiner</a>
            <a href='https://github.com/eastshine94'>Git</a>
            <a href='https'>Youtube</a>
        </Menu>
    );
}

export default HeaderMenu;