import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CustomModalComponent } from '../../shared/custom-modal/custom-modal.component';

@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule, CustomModalComponent],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.scss',
})
export class OffersComponent {
  selectedCard: any = null;
  isModalOpen = false;

  openCardModal(card: any) {
    this.selectedCard = card;
    this.isModalOpen = true;
  }
  
  closeCardModal() {
    this.isModalOpen = false;
    this.selectedCard = null;
  }

  cards = [
    {
      image: '../../../assets/img/interac.jpg',
      title: 'offers.interactive',
      description: 'offers.interDesc',
      modalDesc: 'offers.interModalDesc'
    },
    {
      image: '../../../assets/img/eng_book.jpg',
      title: 'offers.books',
      description: 'offers.booksDesc',
      modalDesc: 'offers.booksModalDesc'
    },
    {
      image: '../../../assets/img/coding.jpg',
      title: 'offers.codeLearn',
      description: 'offers.codeLearnDesc',
      modalDesc: 'offers.codeLearnModalDesc'
    },
    {
      image: '../../../assets/img/python.png',
      title: 'offers.backend',
      description: 'offers.backendDesc',
      modalDesc: 'offers.backendModalDesc'
    },
    {
      image: '../../../assets/img/images.png',
      title: 'offers.frontend',
      description: 'offers.frontendDesc',
      modalDesc: 'offers.frontendModalDesc'
    },
    {
      image: '../../../assets/img/english-apps.png',
      title: 'offers.languageApp',
      description: 'offers.languageAppDesc',
      modalDesc: 'offers.languageAppModalDesc'
    },
  ];  
}
