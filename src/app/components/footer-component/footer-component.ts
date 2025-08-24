import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-component',
  standalone: true,           // 👈 if you want standalone
  imports: [],                // 👈 only if using standalone + importing other modules
  templateUrl: './footer-component.html',
  styleUrls: ['./footer-component.scss']
})
export class FooterComponent { }
