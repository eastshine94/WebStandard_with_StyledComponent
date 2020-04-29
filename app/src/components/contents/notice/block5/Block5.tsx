/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {Notice1, Notice2} from './';
import BlockFrame from '../BlockFrame';

const Block5: React.FC = () => {
    return (
        <BlockFrame title="Notice" description="공지사항 1, 2, 3을 누르면 탭에 따른 게시글이 나옵니다." position="0 -480px">
            <React.Fragment>
                <Notice1/>
                <Notice2/>
            </React.Fragment>
        </BlockFrame>
    );
}


export default Block5;