import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  OnInit,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  ViewChild,
  inject,
  PLATFORM_ID,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CarouselComponent implements OnInit, AfterViewInit {
  isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  currentIndex: number = 0;
  testimonials = [
    {
      name: 'Mirvohid Azimov',
      position: 'Software Engineer Intern @ Yandex',
      text: "I'm starting a path as a Software Engineer Intern at Yandex! ...",
      image: '../../../assets/img/azimjon.jpg',
    },
    {
      name: 'Sandra Newman',
      position: 'STEP Intern @ Google',
      text: "I'm so excited to announce that I'm joining Google dev as a STEP Intern...",
      image:
        'https://s26162.pcdn.co/wp-content/uploads/2019/05/sandra-newman-c-george-baier-color-600x600.jpg',
    },
  ];

  @ViewChild('swiper', { static: false }) swiperElement?: ElementRef;

  async ngOnInit() {
    if (this.isBrowser) {
      const swiper = await import('swiper/element/bundle');
      swiper.register();
    }
  }

  get swiperInstance() {
    return this.swiperElement?.nativeElement?.swiper;
  }

  ngAfterViewInit() {
    if (this.isBrowser && this.swiperElement?.nativeElement?.swiper) {
      this.swiperElement.nativeElement.swiper.on('slideChange', () => {
        this.currentIndex = this.swiperElement?.nativeElement.swiper.realIndex;
      });

      // сразу инициализировать
      this.currentIndex = this.swiperElement.nativeElement.swiper.realIndex;
    }
  }

  stopAutoPlay() {
    if (this.isBrowser && this.swiperElement?.nativeElement?.swiper?.autoplay) {
      this.swiperElement.nativeElement.swiper.autoplay.stop();
    }
  }

  startAutoplay() {
    if (this.isBrowser && this.swiperElement?.nativeElement?.swiper?.autoplay) {
      this.swiperElement.nativeElement.swiper.autoplay.start();
    }
  }
}
