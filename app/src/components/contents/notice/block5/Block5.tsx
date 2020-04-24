/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Notice from './Notice';
import BlockFrame from '../BlockFrame';

const Block5: React.FC = () => {
    return (
        <BlockFrame title="Notice" description="가장 웹 페이지에서 기본이 되는 게시판 유형입니다." position="0 -480px">
            <Notice/>
        </BlockFrame>
    );
}


export default Block5;