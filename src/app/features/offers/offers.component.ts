import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.scss',
})
export class OffersComponent {
  cards = [
    {
      image: '../../../assets/svg/interactive.svg',
      title: 'offers.interactive',
      description: 'offers.interDesc',
    },
    {
      image: '../../../assets/svg/books.svg',
      title: 'offers.books',
      description: 'offers.booksDesc',
    },
    {
      image: '../../../assets/svg/mix.svg',
      title: 'offers.codeLearn',
      description: 'offers.codeLearnDesc',
    },
    {
      image: '../../../assets/svg/backend.svg',
      title: 'offers.backend',
      description: 'offers.backendDesc',
    },
    {
      image: '../../../assets/svg/frontend.svg',
      title: 'offers.frontend',
      description: 'offers.frontendDesc',
    },
    {
      image: '../../../assets/svg/mobile.svg',
      title: 'offers.languageApp',
      description: 'offers.languageAppDesc',
    },
  ];  
}
