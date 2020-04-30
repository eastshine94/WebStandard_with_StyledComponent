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

const RightBox: React.SFC = () => {
    return(
        <NewWindow>
            <Layer>
                <img src='https://user-images.githubusercontent.com/41350459/80709262-f9d9b000-8b27-11ea-8d6a-405006657259.jpg' alt='img2'/>
                <img src='https://user-images.githubusercontent.com/41350459/80709268-fc3c0a00-8b27-11ea-861c-0c616f36993c.jpg' alt='img3'/>
            </Layer>
        </NewWindow>
    )
}

export default RightBox;