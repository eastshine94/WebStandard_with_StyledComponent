import {observable, action} from 'mobx';
import Slider from 'react-slick';
export default class SliderStore {
    
    @observable slider:Slider|null = null;

    @action
    setSlider(slider: Slider|null){
        this.slider = slider;
    }
    @action
    play = () => {
        if(this.slider){
            this.slider.slickPlay();
        }
    }
    @action
    pause = () => {
        if(this.slider){
            this.slider.slickPause();
        }
    }
    @action
    next = () => {
        if(this.slider){
            this.slider.slickNext();
        }
    }
    @action
    prev = () => {
        if(this.slider){
            this.slider.slickPrev();
        }
    }
}