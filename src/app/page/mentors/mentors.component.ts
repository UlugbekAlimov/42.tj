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
      authTitle: 'Roxane Payson',
      image: 'https://s26162.pcdn.co/wp-content/uploads/2019/05/roxane-gay.jpg',
      genre:'Английский '
    },
    {
      authTitle: 'Kiran Desai',
      image: 'https://s26162.pcdn.co/wp-content/uploads/2019/05/Kiran-Desai-Jerry-Bauer-1200x1779.jpg',
      genre:'Поэзия'
    },
    {
      authTitle: 'Jeffrey Eugenides ',
      image: 'https://s26162.pcdn.co/wp-content/uploads/2019/05/eugenides01_body-768x803.jpg',
      genre:'Фентези'
    },
    {
      authTitle: 'Ursula K. Le Guin ',
      image: 'https://s26162.pcdn.co/wp-content/uploads/2019/05/UKL-768x953.jpg',
      genre:'История'
    },
    {
      authTitle: 'Donna Tartt',
      image: 'https://s26162.pcdn.co/wp-content/uploads/2019/05/FEA_20131125_LIF_032_29714066_I2.jpg',
      genre:'Приключение'
    },
    {
      authTitle: 'Donna Tartt ',
      image: 'https://s26162.pcdn.co/wp-content/uploads/2019/05/tartt_01_body.jpg',
      genre:'ИТ'
    },
    {
      authTitle: 'Tommy Orange ',
      image: 'https://s26162.pcdn.co/wp-content/uploads/2019/05/Books-PEN-Hemingway_Award.JPG-680x1024.jpg',
      genre:'Комедия'
    },
    {
      authTitle: 'Jesse Ball',
      image: 'https://s26162.pcdn.co/wp-content/uploads/2019/05/fb20140126a1a-e1390618587486-768x1002.jpg',
      genre:'Наука'
    },
    {
      authTitle: 'Claire Messud ',
      image: 'https://s26162.pcdn.co/wp-content/uploads/2019/05/messud-credit-lisa-cohen_custom-bc2cef12e18989c368929d44dc1d9e8409ea53f5-s6-c30-685x1024.jpg',
      genre:'Философия'
    },
    {
      authTitle: 'Leila Slimani ',
      image: 'https://s26162.pcdn.co/wp-content/uploads/2019/05/0119_Leila-Slimani-1000x668.jpg',
      genre:'Комедия'
    },
    {
      authTitle: 'Barry Hannah ',
      image: 'https://s26162.pcdn.co/wp-content/uploads/2019/05/Screen-Shot-2019-05-02-at-11.45.22-AM.png',
      genre:'ИТ'
    },
    {
      authTitle: 'Jim Shepard',
      image: 'https://s26162.pcdn.co/wp-content/uploads/2019/05/Screen-Shot-2019-05-01-at-12.19.13-PM.png',
      genre:'ИТ'
    },
    {
      authTitle: 'William Dalyrumple',
      image: 'https://s26162.pcdn.co/wp-content/uploads/2019/05/william_dalrymple_for_website_r2-600x600.jpg',
      genre:'ИТ'
    },
    {
      authTitle: 'Helen Oyeyemi',
      image: 'https://s26162.pcdn.co/wp-content/uploads/2019/05/f714065e-fa62-11e0-8032-d7dd87ef7de2_UUIDbooks1023dailybox-681x1024.jpg',
      genre:'ИТ'
    },
  ]
}
