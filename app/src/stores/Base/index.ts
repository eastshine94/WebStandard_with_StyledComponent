import {observable, action} from 'mobx';

export default class BaseStore {
    @observable visibleMenu: boolean = false;

    @action
    setVisibleMenu = (visible: boolean) => {
        this.visibleMenu = visible;
    }
}