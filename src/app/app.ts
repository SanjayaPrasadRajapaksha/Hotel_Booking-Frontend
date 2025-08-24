import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer-component/footer-component';

@Component({
  selector: 'app-root',
  standalone: true,             // 👈 add this
  imports: [RouterOutlet, FooterComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']     // 👈 fix typo
})
export class App {
  protected readonly title = signal('hotel-client');
}
