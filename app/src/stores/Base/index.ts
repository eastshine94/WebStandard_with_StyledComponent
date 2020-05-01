import {observable, action} from 'mobx';

export default class BaseStore {
    @observable visibleMenu: boolean = false;
    @observable visibleLayerPopup: boolean = false;
    @observable visibleLightBox: boolean = false;
    
    @action
    setVisibleMenu = (visible: boolean) => {
        this.visibleMenu = visible;
    }
    @action
    setVisibleLayerPopup = (visible: boolean) => {
        this.visibleLayerPopup = visible;
    }

    @action
    setVisibleLightBox = (visible: boolean) => {
        this.visibleLightBox = visible;
    }  
}