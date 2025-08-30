import { Component } from '@angular/core';
import { HomeTrendingDestinations } from './inner-items/home-trending-destinations/home-trending-destinations';
import { MainHeader } from './inner-items/main-header/main-header';
import { OffersComponent } from './inner-items/offers-component/offers-component';
import { OptionsComponent } from './inner-items/options-component/options-component';

@Component({
  selector: 'app-home-page',
  standalone: true,           // 👈 if you want standalone
  imports: [
    MainHeader,
    OptionsComponent,
    OffersComponent,
    HomeTrendingDestinations
  ],                // 👈 only if using standalone + importing other modules
  templateUrl: './home-page.html',
  styleUrls: ['./home-page.scss']
})
export class HomePage { }
