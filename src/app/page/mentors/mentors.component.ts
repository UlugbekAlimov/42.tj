import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-mentors',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './mentors.component.html',
  styleUrl: './mentors.component.scss'
})
export class MentorsComponent {
  authors = [
    {
      authTitle: 'Рахматуллаев Хусниддин',
      // image: 'https://s26162.pcdn.co/wp-content/uploads/2019/05/roxane-gay.jpg',
      genre:'Английский '
    },
    {
      authTitle: 'Алижонов Абдулазиз',
      // image: 'https://s26162.pcdn.co/wp-content/uploads/2019/05/roxane-gay.jpg',
      genre:'Английский '
    },
    {
      authTitle: 'Сангинова Зарина',
      // image: 'https://s26162.pcdn.co/wp-content/uploads/2019/05/roxane-gay.jpg',
      genre:'Английский '
    },
    {
      authTitle: 'Джураева Навбахор',
      // image: 'https://s26162.pcdn.co/wp-content/uploads/2019/05/roxane-gay.jpg',
      genre:'Английский '
    },
  ]
}
