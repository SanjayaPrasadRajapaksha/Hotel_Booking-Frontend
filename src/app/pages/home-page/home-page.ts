import { Component } from '@angular/core';
import {MainHeader} from './inner-items/main-header/main-header';
import {OptionsComponent} from './inner-items/options-component/options-component';

@Component({
  selector: 'app-home-page',
  standalone: true,           // 👈 if you want standalone
  imports: [
    MainHeader,
    OptionsComponent
  ],                // 👈 only if using standalone + importing other modules
  templateUrl: './home-page.html',
  styleUrls: ['./home-page.scss']
})
export class HomePage { }
