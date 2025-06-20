import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Component, OnInit} from '@angular/core';
import { LanguageService } from '../../services/lang.service';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{
  menuOpen: boolean = false
  isLanguageMenuOpen = false; 
  langButtonLabel: string = ' ТЧ'
  currentLangValue: string = 'tj';

  
  constructor(
    public langSerivce: LanguageService,
    private translate: TranslateService
  ) {}

   ngOnInit(): void {
     this.setLangButtonLabel();
     this.translate.onLangChange.subscribe(() => {
       this.setLangButtonLabel();
     });
   }

   setLangButtonLabel() {
     this.langButtonLabel = this.langSerivce.currentLang === 'ru' ? 'РУ' : 'ТЧ';
   }
  
   switchLangToggle() {
    const nextLang = this.langSerivce.currentLang === 'ru' ? 'tj' : 'ru';
    this.langSerivce.switchLang(nextLang);
    // Не обновляйте langButtonLabel здесь!
  }

  switchLang(lang: string) {
    this.langSerivce.switchLang(lang);
  }


  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    if (!this.menuOpen) {
      this.isLanguageMenuOpen = false; 
    }
  }

  toggleLanguageMenu(event: Event) {
    event.stopPropagation(); 
    this.isLanguageMenuOpen = !this.isLanguageMenuOpen;
  }

  // Методы для улучшения доступности
  onMenuKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.toggleMenu();
    }
  }

  onLangKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.switchLangToggle();
    }
  }
}
