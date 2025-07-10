import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  constructor(private meta: Meta, private title: Title) {}

  ngOnInit() {
    this.title.setTitle('О нас - ICD School | Образовательный центр в Ч.Расулове');
    this.meta.addTags([
      { name: 'description', content: 'ICD School – современный образовательный центр в Ч.Расулове, предлагающий языковые и компьютерные курсы для детей и взрослых.' },
      { name: 'keywords', content: 'ICD School, образовательный центр, языковые курсы, компьютерные курсы, Ч.Расулов' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'ICD School' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]);
  }
}
