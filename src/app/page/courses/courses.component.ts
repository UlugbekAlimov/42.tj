import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

type TabKey = 'language' | 'frontend' | 'backend';

interface LanguageCourse {
  title: string;
  items: string[];
  price: string;
  note: string;
  image: string;
}

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [RouterModule, CommonModule, RouterLink],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  activeTab: TabKey = 'language';
  isDropdownOpen = false;
  selectedLanguage = 'Английский';

  languages = ['Английский', 'Русский', 'Немецкий', 'Китайский'];

  languageCourses: Record<string, LanguageCourse> = {
    Английский: {
      title: 'Английский',
      items: [
        'Группа 13 (±1) учеников',
        'Students’ App и книга (English Book)',
        'Фирменная тетрадь Grammar (English)',
        'Academic Support',
        'Видео уроки по английскому',
        'Speaking Club',
      ],
      price: '1 000 000 UZS',
      note: 'Для филиалов Сергели и Самарканда',
      image: 'assets/images/english.jpg',
    },
    Русский: {
      title: 'Русский',
      items: [
        'Группа 15 учеников',
        'Учебники русского языка',
        'Специальные упражнения по грамматике',
        'Поддержка преподавателей',
        'Видео контент на русском',
      ],
      price: '950 000 UZS',
      note: 'Доступно в онлайн формате',
      image: 'assets/images/russian.jpg',
    },
    Немецкий: {
      title: 'Немецкий',
      items: [
        'Группа 10 учеников',
        'Учебники и разговорные практики',
        'Поддержка носителей языка',
        'Видео и аудио материалы',
      ],
      price: '1 100 000 UZS',
      note: 'Для начального и среднего уровней',
      image: 'assets/images/german.jpg',
    },
    Китайский: {
      title: 'Китайский',
      items: [
        'Малые группы — 8 человек',
        'Погружение в культуру',
        'Специальные разговорные классы',
        'Видео материалы и практика',
      ],
      price: '1 200 000 UZS',
      note: 'Интенсивный курс с носителями',
      image: 'assets/images/chinese.jpg',
    },
  };

  tabs: Record<
    TabKey,
    {
      title: string;
      items: string[];
      price: string;
      note: string;
      image: string;
    }
  > = {
    language: this.languageCourses[this.selectedLanguage],
    frontend: {
      title: 'Frontend',
      items: [
        'HTML, CSS, JavaScript',
        'React или Angular',
        'Проектная работа и практика',
        'Макеты и адаптивность',
      ],
      price: '1 200 000 UZS',
      note: 'Доступно онлайн и оффлайн',
      image: 'assets/images/frontend.jpg',
    },
    backend: {
      title: 'Backend',
      items: [
        'Python, SQL, REST API',
        'Базы данных: PostgreSQL, MongoDB',
        'Аутентификация и безопасность',
        'Практика с реальными проектами',
      ],
      price: '1 300 000 UZS',
      note: 'Для учеников которые хотят стать бекендерами',
      image: 'assets/images/backend.jpg',
    },
  };

  constructor() {}

  selectLanguage(lang: string) {
    this.selectedLanguage = lang;
    this.isDropdownOpen = false;

    // Обновляем активные данные курса для языков
    this.tabs.language = this.languageCourses[lang];
  }
}
