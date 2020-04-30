import React from 'react';
import styled from 'styled-components';
import NewWindow from 'react-new-window';
const Layer = styled.div`

    margin: 0;
    padding: 0;
    & img{
        width: 100%;
        display: block;
    }
`;

const WindowPopup: React.SFC = () => {
    
    return(
        <NewWindow features={{width:800, height:590, left: 50, top: 50}}>
            <Layer>
                <img src='https://user-images.githubusercontent.com/41350459/80709262-f9d9b000-8b27-11ea-8d6a-405006657259.jpg' alt='웹 표준 사이트'/>
            </Layer>
        </NewWindow>
    )
}

export default WindowPopup;