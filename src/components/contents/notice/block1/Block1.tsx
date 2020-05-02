/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import BlockFrame from '../BlockFrame';
import {Notice1, Notice2} from './';

const Block1: React.SFC = () => {
    
    return (
        <BlockFrame title="Notice" description="기본 게시판 유형입니다. 링크는 걸려있지 않습니다." position="0 -240px">
            <React.Fragment>
                <Notice1/>
                <Notice2/>
            </React.Fragment>
        </BlockFrame>
    );
}


export default Block1;