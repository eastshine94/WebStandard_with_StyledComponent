import React, {useState} from 'react';
import styled from 'styled-components';
import NewWindow from 'react-new-window';
const Layer = styled.div`

    margin: 0;
    padding: 0;
    & img{
        width: 100%;
        display: block;
    }
    & h5{
        font-size: 16px;
        font-weight: bold;
        padding: 10px 5px;
        & em{
            color: #c0392b;
        }
    }
`;

const WindowPopup: React.SFC = () => {
    const [time, setTime] = useState(5);

    const countDown = setInterval(() => {
        setTime(time-1);
    },1000);
    
    setTimeout(() => {
        clearInterval(countDown);
    },5000);
    return(
        <NewWindow features={{width:800, height:590, left: 50, top: 50}}>
            <Layer>
                <img src='https://user-images.githubusercontent.com/41350459/80709262-f9d9b000-8b27-11ea-8d6a-405006657259.jpg' alt='웹 표준 사이트'/>
                <h5><em>{time}</em> 후에 팝업창이 꺼집니다.</h5>
            </Layer>
        </NewWindow>
    )
}

export default WindowPopup;