import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {
  books = [
    {
      title: 'Читать Основы бекенд',
      author: 'Азимчон',
      pages: 32,
      image: '../../../assets/img/Thumbnail-2.png',
      link: '#'
    },
    {
      title: 'Node.js и Express',
      author: 'Иван Иванов',
      pages: 220,
      image: '../../../assets/img/thumb-exp-ux2x_XzL9BUr.png',
      link: '#'
    },
    {
      title: 'Алгоритмы',
      author: 'Петр Петров',
      pages: 150,
      image: '../../../assets/img/Thumbnail_JK75iA5.png',
      link: '#'
    },
  ];  
}
