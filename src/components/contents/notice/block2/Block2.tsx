/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import BlockFrame from '../BlockFrame';
import Notice from './Notice';


const Block2: React.SFC = () => {
    return (
        <BlockFrame title="Notice" description="기본 게시판 유형입니다. 링크는 걸려있지 않습니다." position="0 -300px">
            <Notice/>            
        </BlockFrame>
    );
}

export default Block2;