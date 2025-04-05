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
      title: 'Интерактивное программирование',
      description: 'Читайте книги по программированию и получайте знания',
    },
    {
      image: '../../../assets/svg/books.svg',
      title: 'Программирование высокого качества',
      description: 'Читайте интересные книги',
    },
    {
      image: '../../../assets/svg/mix.svg',
      title: 'Возможность перекрестного обучения',
      description: 'Читайте книги в любом жанре',
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
      title: 'Программирование по основам разработки',
      description: 'Изучите основы мобайл разработки',
    },
  ];
}
