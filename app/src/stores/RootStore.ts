import BaseStore from './Base';
import SliderStore from './Slider';


export default class RootStore {
    baseStore = new BaseStore();
    sliderStore = new SliderStore();
}