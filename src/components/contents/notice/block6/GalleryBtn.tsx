/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { MouseEvent } from 'react';
import styled from 'styled-components';
import { IR } from '../../../base/Base';
import { STORES } from '../../../../constants';
import SliderStore from '../../../../stores/Slider/index';
import { inject, observer } from 'mobx-react';

interface InjectedProps {
    [STORES.SLIDER_STORE]?: SliderStore;
}

interface StyledProps {
    position: string;
}

const PM = IR.PM;

const Btn = styled.div`
    position: absolute;
    right: 5px;
    top: 7px;
    & ul {
        display: flex;
        justify-content: space-between;
    }
`;

const Icon = styled.li.attrs((props: StyledProps) => ({
    position: props.position || "0 0",
}))`
    & button{
        display: block;
        width: 23px;
        height: 23px;
        background: url("https://user-images.githubusercontent.com/41350459/79749898-f8033600-834a-11ea-973e-989ebcba431f.png") no-repeat;
        background-position: ${props => props.position};
        margin: 1px 2px;
        border: 0px;
        cursor: pointer;
        &:hover{
            background-position-x: -173px;
        }
    }
`;
const GalleryBtn: React.FC<InjectedProps> = (props) => {
    const sliderStore = props[STORES.SLIDER_STORE] as SliderStore;
    const play = (e: MouseEvent) => {
        e.preventDefault();
        sliderStore.play();       
    }
    const pause = (e: MouseEvent) => {
        e.preventDefault();
        sliderStore.pause();
    }
    const prev = (e: MouseEvent) => {
        e.preventDefault();
        sliderStore.prev();
    }
    const next = (e: MouseEvent) => {
        e.preventDefault();
        sliderStore.next();
    }

    return (
        <Btn>
            <ul>
                <Icon position="-150px -120px"><button onClick={play}><PM>시작</PM></button></Icon>
                <Icon position="-150px -143px"><button onClick={pause}><PM>정지</PM></button></Icon>
                <Icon position="-150px -166px"><button onClick={prev}><PM>이전이미지</PM></button></Icon>
                <Icon position="-150px -189px"><button onClick={next}><PM>다음이미지</PM></button></Icon>
            </ul>
        </Btn>
    );
}

export default inject(STORES.SLIDER_STORE)(observer(GalleryBtn));