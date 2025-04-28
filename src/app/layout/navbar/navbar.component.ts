import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Component, OnInit} from '@angular/core';
import { LanguageService } from '../../services/lang.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{
  menuOpen: boolean = false
  isLanguageMenuOpen = false; 
  langButtonLabel: string = ' ТЧ'
  currentLangValue: string = 'tj';

  
  constructor(public langSerivce: LanguageService) {}

  ngOnInit(): void {
    this.langButtonLabel = this.langSerivce.currentLang === 'ru' ? 'РУ' : 'ТЧ';
  }
  
  switchLangToggle() {
    const nextLang = this.langSerivce.currentLang === 'ru' ? 'tj' : 'ru'
    this.langSerivce.switchLang(nextLang)

    this.langButtonLabel = this.langSerivce.currentLang === 'ru' ? 'РУ' : 'ТЧ';
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
}
