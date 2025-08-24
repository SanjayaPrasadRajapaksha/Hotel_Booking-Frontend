import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found-page',
  standalone: true,           // 👈 if you want standalone
  imports: [],                // 👈 only if using standalone + importing other modules
  templateUrl: './not-found-page.html',
  styleUrls: ['./not-found-page.scss']
})
export class NotFoundPage { }
