import React from 'react';
import BlockFrame from '../BlockFrame';
import Gallery from './Gallery';

const Block6: React.SFC = () => {

    return (
        <BlockFrame title="Notice" description="가장 웹 페이지에서 기본이 되는 게시판 유형입니다." position="0 -540px">
            <Gallery/>
        </BlockFrame>
    );
}


export default Block6;