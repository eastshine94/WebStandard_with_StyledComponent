/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import BlockFrame from '../BlockFrame';
import { Notice1, Notice2 } from './';
const Block4: React.SFC = () => {

    return (
        <BlockFrame title="Notice" description="이미지에 마우스를 올리면 바로가기가 나옵니다." position="0 -420px">
            <React.Fragment>
                <Notice1/>
                <Notice2/>
            </React.Fragment>       
        </BlockFrame>
    );
}


export default Block4;