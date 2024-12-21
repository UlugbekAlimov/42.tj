import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  faqItems = [
    {
      question: 'Как зарегистрироваться на сайте?',
      answer:
        'Для регистрации перейдите на главную страницу и нажмите кнопку "Регистрация". Заполните необходимые поля и подтвердите свой аккаунт через электронную почту.',
      open: false,
    },
    {
      question: 'Можно ли читать книги бесплатно?',
      answer:
        'Да, на нашем сайте доступен раздел с бесплатными книгами, которые можно читать онлайн без ограничений.',
      open: false,
    },
    {
      question: 'Как найти нужную книгу?',
      answer:
        'Вы можете использовать строку поиска на сайте или перейти в раздел "Категории", где книги распределены по жанрам.',
      open: false,
    },
    {
      question: 'Как скачать книгу?',
      answer:
        'Для скачивания книги выберите интересующую книгу и нажмите на кнопку "Скачать". Доступ к скачиванию зависит от вашего тарифа.',
      open: false,
    },
    {
      question: 'Какие форматы книг поддерживаются?',
      answer:
        'Наши книги доступны в форматах PDF, EPUB и MOBI, что позволяет читать их на любом устройстве.',
      open: false,
    },
  ];

  toggleItem(index: number): void {
    this.faqItems[index].open = !this.faqItems[index].open;
  }
}
