import React,{MouseEvent} from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import { STORES } from '../../constants';
import BaseStore from '../../stores/Base';

interface InjectedProps {
    [STORES.BASE_STORE]?: BaseStore;
}
interface StyledProps {
    active: boolean;
}

const Layer = styled.div.attrs((props: StyledProps) => ({
    active: props.active || false,
    isDisplay: props.active? 'block':'none',
}))`
    display: ${props => props.isDisplay};
    position: fixed;
    left: 50px;
    top: 50px;
    width: 780px;
    border: 10px solid #dceff7;
    box-shadow: 3px 3px 10px rgba(0,0,0,0.4);
    & img{
        width: 100%;
        display: block;
    }
`;
const Close = styled.button`
    position: absolute;
    right: 20px;
    top: 20px;
    background: #0093bd;
    padding: 1px 6px;
    color: #fff;
    &:hover {
        text-decoration: underline;
    }
`;

const LayerPopup: React.FC<InjectedProps> = (props) => {

    const baseStore = props[STORES.BASE_STORE] as BaseStore;
    const onClose = (e:MouseEvent) => {
        e.preventDefault();
        baseStore.setVisibleLayerPopup(false);
    }
    return(
        <Layer active={baseStore.visibleLayerPopup}>
            <img src='https://user-images.githubusercontent.com/41350459/80709257-f6debf80-8b27-11ea-81b4-17ab8207ad0f.jpg' alt='웹 표준 사이트'/>
            <Close onClick={onClose}>Close</Close>
        </Layer>
    )
}

export default inject(STORES.BASE_STORE)(observer(LayerPopup));