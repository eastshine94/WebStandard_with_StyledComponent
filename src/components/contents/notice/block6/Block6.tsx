import React from 'react';
import BlockFrame from '../BlockFrame';
import Gallery from './Gallery';

const Block6: React.SFC = () => {

    return (
        <BlockFrame title="Notice" description="아래 버튼을 클릭하면 이미지를 play할 수 있습니다." position="0 -540px">
            <Gallery/>
        </BlockFrame>
    );
}


export default Block6;