/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { MouseEvent, useState } from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import { STORES } from '../../../../constants'
import BaseStore from '../../../../stores/Base';
import WindowPopup from '../../../popup/WindowPopup';

interface InjectedProps {
    [STORES.BASE_STORE]?: BaseStore;
}

const Wrapper = styled.div`
    margin-top: 15px;
    & h4 {
        font-size: 14px;
        color: #0093bd;
        padding-bottom: 4px;
        font-weight: 700;
    }
    & ul {
        display: flex;
        justify-content: space-between;
    }
    & li {
        width: 93px;
        & + li {
            margin-left: 5px;
        }
        & img{
            width: 100%;
        }
    }
`;

const Ad: React.FC<InjectedProps> = (props) => {
    const baseStore = props[STORES.BASE_STORE] as BaseStore;
    const [openWindowPopup, setopenWindowPopup]:[boolean, Function] = useState(false);
    const WP = openWindowPopup? <WindowPopup/> : "";

    const onLayerPopup = (e:MouseEvent) => {
        e.preventDefault();
        baseStore.setVisibleLayerPopup(true);
    }
    const onWindowPopup = (e:MouseEvent) => {
        e.preventDefault();
        setopenWindowPopup(true);
        setTimeout(() => {
            setopenWindowPopup(false);
        },5000);
    }
    return (
        <Wrapper>
            <h4>Advertisement</h4>
            <ul>
                <li>
                    <a href="#" onClick={onLayerPopup}>
                        <img src="https://user-images.githubusercontent.com/41350459/80281454-3e3f0780-8746-11ea-82e3-d63acab154db.jpg" alt="이미지1" />
                    </a>
                </li>
                <li>
                    <a href="#" onClick={onWindowPopup}>
                        <img src="https://user-images.githubusercontent.com/41350459/80281455-3f703480-8746-11ea-846a-3d3f2bbf6ed9.jpg" alt="이미지2" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="https://user-images.githubusercontent.com/41350459/80281456-40a16180-8746-11ea-82e9-0a57e678da37.jpg" alt="이미지3" />
                    </a>
                </li>
            </ul>
            {WP}
        </Wrapper>
        
    );
}

export default inject(STORES.BASE_STORE)(observer(Ad));;