import { Component } from '@angular/core';


@Component({
  selector: 'app-main-header',
  standalone: true,           // 👈 if you want standalone
  imports: [],                // 👈 only if using standalone + importing other modules
  templateUrl: './main-header.html',
  styleUrls: ['./main-header.scss']
})
export class MainHeader { }
