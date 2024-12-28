import { CommonModule } from '@angular/common';
import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild} from '@angular/core';


@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class CarouselComponent implements OnInit {
  testimonials = [
    {
      name: 'Mirvohid Azimov',
      position: 'Software Engineer Intern @ Yandex',
      text: 'I\'m starting a new book as a Software Engineer Intern at Yandex! ...',
      image: '../../../assets/img/azimjon.jpg'
    },
    {
      name: 'Sandra Newman',
      position: 'STEP Intern @ Google',
      text: 'I\'m so excited to announce that I\'m joining Google books as a STEP Intern...',
      image: 'https://s26162.pcdn.co/wp-content/uploads/2019/05/sandra-newman-c-george-baier-color-600x600.jpg'
    },
  ];

  @ViewChild('swiper', { static: false }) swiperElement!: ElementRef

  ngOnInit() {
    import('swiper/element/bundle').then((module) => {
      module.register();
    });
  }

  stopAutoPlay(){
    this.swiperElement.nativeElement.swiper.autoplay.stop()
  }

    startAutoplay() {
    this.swiperElement.nativeElement.swiper.autoplay.start();
  }
}