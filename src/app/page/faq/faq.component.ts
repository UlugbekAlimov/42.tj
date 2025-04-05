import { CommonModule } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  faqItems = [
    { question: 'Что такое ICD School?', answer: 'ICD School (Intellectual Capital Development School) — это образовательный центр, предлагающий курсы иностранных языков и IT.' },
    { question: 'Какие курсы предлагает ICD School?', answer: 'Английский, русский, немецкий, китайский языки, а также IT-курсы (HTML CSS, JS, Python).' },
    { question: 'Кто может обучаться в ICD School?', answer: 'Обучение доступно для всех от 7 лет: школьники, студенты, специалисты, взрослые.' },
    { question: 'Где находится ICD School?', answer: 'ICD School находится в Таджикистане, с планами расширения в Центральной Азии.' },
    { question: 'Какова продолжительность курсов?', answer: 'Курсы длятся в среднем от 3 до 6 месяцев, есть ускоренные и выходные группы.' },
    { question: 'Получаю ли я сертификат после окончания курса?', answer: 'Да, после итоговой оценки выдается официальный сертификат ICD School.' },
    { question: 'Есть ли у вас бесплатные или социальные программы?', answer: 'Да, у нас есть разговорные клубы, бесплатные мастер-классы, стипендии и книжные полки.' },
    { question: 'Как записаться на курс?', answer: 'Можно зарегистрироваться онлайн или прийти в офис для тестирования и выбора уровня.' },
    { question: 'Кто преподаёт в ICD School?', answer: 'Опытные сертифицированные преподаватели, применяющие современные методы.' },
    { question: 'Есть ли возможность учиться онлайн?', answer: 'Да, предлагаются очные и онлайн-занятия.' },
    { question: 'Почему стоит выбрать ICD School?', answer: 'Методика Oxford, индивидуальный подход, Student App, акцент на разговорную речь, наставничество и бесплатные учебники.' }
  ];

  openIndex: WritableSignal<number | null> = signal(null);

  toggle(index: number): void {
    this.openIndex.set(this.openIndex() === index ? null : index);
  }
}
