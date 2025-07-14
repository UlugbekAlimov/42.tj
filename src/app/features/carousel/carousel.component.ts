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
import { TestimonialService } from '../../services/testimonial.service';

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
  testimonials: any[] = [];
  private testimonialService = inject(TestimonialService);

  @ViewChild('swiper', { static: false }) swiperElement?: ElementRef;

  async ngOnInit() {
    if (this.isBrowser) {
      const swiper = await import('swiper/element/bundle');
      swiper.register();
      
      // Загружаем отзывы из API
      this.loadTestimonials();
    }
  }

  loadTestimonials() {
    this.testimonialService.getTestimonials().subscribe({
      next: (data: any[]) => {
        this.testimonials = data;
      },
      error: (error: any) => {
        console.error('Ошибка при загрузке отзывов:', error);
        // Если API недоступен, используем статические данные
        this.testimonials = [
          {
            name: 'Mirvohid Azimov',
            position: 'Software Engineer Intern @ Yandex',
            text: "I'm starting a path as a Software Engineer Intern at Yandex! This is an amazing opportunity to work with cutting-edge technology and learn from the best engineers in the industry.",
          },
          {
            name: 'Sandra Newman',
            position: 'STEP Intern @ Google',
            text: "I'm so excited to announce that I'm joining Google dev as a STEP Intern! This program will help me develop my technical skills and work on real-world projects.",
          },
        ];
      }
    });
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
