import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule, FaIconLibrary } from "@fortawesome/angular-fontawesome";
import { fas } from '@fortawesome/pro-solid-svg-icons';
import { far } from '@fortawesome/pro-regular-svg-icons';
import { fal } from '@fortawesome/pro-light-svg-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FontAwesomeModule
],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ejercicios-part2.0');
  
  constructor(private library: FaIconLibrary) {
    // Registrar todos los iconos de cada paquete
    library.addIconPacks(fas, far, fal);
  }
}