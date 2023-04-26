import { Component } from '../../../core/Component';
import Swiper, { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper';

import './Slider.scss';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

class Slider extends Component {
  static get observedAttributes() {
    return ['slides', 'width', 'height'];
  }

  inintSwiper() {
    new Swiper('.catalog-slider-swiper', {
      modules: [Navigation, Pagination, Autoplay,EffectCoverflow],
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      speed: 5000,
      slidesPerView: 2,
      effect: "coverflow",
      grabCursor: true,
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      autoplay: {
        delay: 2000,
      },
    });
  }

  componentDidMount() {
    this.inintSwiper();
  }

  render() {
    const { width, height } = this.props;
    return `
         <div class="it-slider-swiper swiper" style="height:${height ?? '100hv'}; width:${
      width ?? '100%'
    }">
            <div class="swiper-wrapper">
              ${JSON.parse(this.props.slides)
                .map((slide) => {
                  return `
                    <div class="swiper-slide">${slide}</div> 
              `;
                })
                .join('  ')}
            </div>
            <div class="swiper-pagination"></div>     
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
            </div>
    `;
  }
}

customElements.define('catalog-slider', Slider);
