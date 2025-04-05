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
      title: 'Основы Python',
      author: 'Азимчон',
      duration : '15',
      image: '../../../assets/img/Thumbnail-2.png',
      link: '#'
    },
    {
      title: 'Основы Frontend',
      author: 'Улугбек',
      duration : '15',
      image: '../../../assets/img/Thumbnail-2.png',
      link: '#'
    },
    {
      title: 'Английский язык',
      author: 'Хусниддин',
      duration : '15',
      image: '../../../assets/img/Thumbnail-2.png',
      link: '#'
    },

  ];
}
