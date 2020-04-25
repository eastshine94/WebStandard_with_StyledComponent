import React from 'react';
import BlockFrame from '../BlockFrame';
import { Login, Ad } from './';
const Block3: React.SFC = () => {

    return (
        <BlockFrame title="Notice" description="가장 웹 페이지에서 기본이 되는 게시판 유형입니다." position="0 -360px">
            <React.Fragment>
                <Login/>
                <Ad/>    
            </React.Fragment>     
        </BlockFrame>
    );
}


export default Block3;