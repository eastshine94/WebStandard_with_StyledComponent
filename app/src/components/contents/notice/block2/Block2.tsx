/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import BlockFrame from '../BlockFrame';
import Notice from './Notice';


const Block2: React.SFC = () => {
    return (
        <BlockFrame title="Notice" description="가장 웹 페이지에서 기본이 되는 게시판 유형입니다." position="0 -300px">
            <Notice/>            
        </BlockFrame>
    );
}

export default Block2;