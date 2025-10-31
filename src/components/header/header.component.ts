import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  isMenuOpen = signal(false);

  navLinks = [
    { name: 'About', url: '#about' },
    { name: 'Experience', url: '#experience' },
    { name: 'Skills', url: '#skills' },
    { name: 'Contributions', url: '#contributions' },
    { name: 'Work', url: '#projects' },
    { name: 'Contact', url: '#contact' },
  ];

  toggleMenu() {
    this.isMenuOpen.update(val => !val);
  }

  scrollTo(event: Event, selector: string) {
    event.preventDefault();
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (this.isMenuOpen()) {
        this.toggleMenu();
    }
  }
}