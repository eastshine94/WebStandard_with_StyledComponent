import React from 'react';
import BlockFrame from '../BlockFrame';
import { Login, Ad } from './';
const Block3: React.SFC = () => {

    return (
        <BlockFrame title="Notice" description="아래 사진을 클릭하면 팝업창이 나옵니다." position="0 -360px">
            <React.Fragment>
                <Login/>
                <Ad/>    
            </React.Fragment>     
        </BlockFrame>
    );
}


export default Block3;