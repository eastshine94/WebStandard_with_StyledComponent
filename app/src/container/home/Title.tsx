import React,{MouseEvent} from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import { Container, IR } from '../../components/base/Base';
import { STORES } from '../../constants';
import BaseStore from '../../stores/Base/index';

interface StyledProps {
    active: boolean,
    bgPosit : string,
}
interface InjectedProps {
    [STORES.BASE_STORE]?: BaseStore,
}

const PM = IR.PM;
const Wrapper = styled.div`
  background-color: #eaf7fd;
`;
const Tit = styled.div`
    position: relative;
    & h2{
        font-size: 40px;
        text-align: center;
        padding: 5px 0;
        letter-spacing: 2px;
        color: #2c94c4;
        font-family: 'Nanum Brush Script', cursive;
    }
`;
const Btn = styled.span.attrs((props: StyledProps) => ({
    active: props.active || false,
    bgPosit: props.active? "0 -660px":"0 -600px",
}))`
    position: absolute;
    top: 5px;
    right: 0;
    width: 60px;
    height: 60px;
    background: url("https://user-images.githubusercontent.com/41350459/79749898-f8033600-834a-11ea-973e-989ebcba431f.png") no-repeat;
    background-position: ${props => props.bgPosit};
    cursor: pointer;
    &:hover {
        background-position-x: -60px;
    }
`;

const Title: React.FC<InjectedProps> = (props) => {
    const baseStore = props[STORES.BASE_STORE] as BaseStore;
    const is_visible = baseStore.visibleMenu;
    const onBtn = (e:MouseEvent) => {
        e.preventDefault();
        baseStore.setVisibleMenu(!is_visible);
    }
    return(
        <Wrapper id="Cont_Tit">
            <Container>
                <Tit>
                    <h2>"옆 버튼 클릭시 메뉴가 나옵니다."</h2>
                    <Btn active={is_visible} onClick={onBtn}><PM>전체 메뉴</PM></Btn>
                </Tit>
            </Container>
        </Wrapper>
    );
}

export default inject(STORES.BASE_STORE)(observer(Title));