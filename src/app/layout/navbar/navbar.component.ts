import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Component} from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  menuOpen: boolean = false
  isLanguageMenuOpen = false; 

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
