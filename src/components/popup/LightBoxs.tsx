import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { inject, observer } from 'mobx-react';
import { STORES } from '../../constants'
import BaseStore from '../../stores/Base';


interface InjectedProps {
    [STORES.BASE_STORE]?: BaseStore;
}
const images = [
    'https://user-images.githubusercontent.com/41350459/80274347-9c52f700-8714-11ea-940f-d8e7e4258933.jpg',
    'https://user-images.githubusercontent.com/41350459/80274349-9d842400-8714-11ea-9f0e-156ef6a8b135.jpg',
    'https://user-images.githubusercontent.com/41350459/80274350-9f4de780-8714-11ea-86de-d5fd2cbacb2c.jpg',
    "https://user-images.githubusercontent.com/41350459/80274351-a07f1480-8714-11ea-9edf-0dbbfd34307a.jpg",
    "https://user-images.githubusercontent.com/41350459/80274354-a248d800-8714-11ea-8c91-9cada0c3f96c.jpg",
];

class Lightboxs extends Component<InjectedProps> {
    state = {
        photoIndex: 0,
    };


    render() {
        const { photoIndex } = this.state;
        const baseStore = this.props[STORES.BASE_STORE] as BaseStore;
        return (
            <div>
                {baseStore.visibleLightBox && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => baseStore.setVisibleLightBox(false)}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length,
                            })
                        }
                    />
                )}
            </div>
        );
    }
}
export default inject(STORES.BASE_STORE)(observer(Lightboxs));