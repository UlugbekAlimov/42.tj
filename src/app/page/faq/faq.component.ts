import { CommonModule } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  faqItems = [
    { question: 'faq.icd', answer: 'faq.icdDesc' },
    { question: 'faq.icdCourse', answer: 'faq.icdCourseDesc' },
    { question: 'faq.icdLearn', answer: 'faq.icdLearnDesc' },
    { question: 'faq.icdLocation', answer: 'faq.icdLocationDesc' },
    { question: 'faq.courseTime', answer: 'faq.courseTimeDesc' },
    { question: 'faq.icdCertificate', answer: 'faq.icdCertificateDesc' },
    { question: 'faq.icdFreeCourse', answer: 'faq.icdFreeCourseDesc' },
    { question: 'faq.icdRegister', answer: 'faq.icdRegisterDesc' },
    { question: 'faq.icdTeachers', answer: 'faq.icdTeachersDesc' },
    { question: 'faq.icdOnline', answer: 'faq.icdOnlineDesc' },
    { question: 'faq.whyIcd', answer: 'faq.whyIcdDesc' }
  ];  

  openIndex: WritableSignal<number | null> = signal(null);

  toggle(index: number): void {
    this.openIndex.set(this.openIndex() === index ? null : index);
  }
}
