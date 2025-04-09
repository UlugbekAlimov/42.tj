import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.scss',
})
export class OffersComponent {
  cards = [
    {
      image: '../../../assets/svg/interactive.svg',
      title: 'Интерактивное занятие',
      description: 'Изучайте что то новое каждый день и получайте знания.',
    },
    {
      image: '../../../assets/svg/books.svg',
      title: 'Книги высокого качества',
      description: 'текст.',
    },
    {
      image: '../../../assets/svg/mix.svg',
      title: 'Возможность обучения кодингом',
      description: 'Изучайте основы программирования и станьте программистом',
    },
    {
      image: '../../../assets/svg/backend.svg',
      title: 'Программирование по основам бэкэнда',
      description: 'Изучите основы бэкэнда',
    },
    {
      image: '../../../assets/svg/frontend.svg',
      title: 'Программирование по основам Фронтенд',
      description: 'Изучите основы фронтенда',
    },
    {
      image: '../../../assets/svg/mobile.svg',
      title: 'Приложение для вашего английского',
      description: 'Изучайте английский с помощью приложение',
    },
  ];
}
