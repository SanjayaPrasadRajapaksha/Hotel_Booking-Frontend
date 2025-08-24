import { Component } from '@angular/core';
import {MainHeader} from './inner-items/main-header/main-header';

@Component({
  selector: 'app-home-page',
  standalone: true,           // 👈 if you want standalone
  imports: [
    MainHeader
  ],                // 👈 only if using standalone + importing other modules
  templateUrl: './home-page.html',
  styleUrls: ['./home-page.scss']
})
export class HomePage { }
