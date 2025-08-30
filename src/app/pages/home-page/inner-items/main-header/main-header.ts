import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [
    MatIconModule,  // ✅ use the module
    RouterModule    // ✅ needed for routerLink
  ],
  templateUrl: './main-header.html',
  styleUrls: ['./main-header.scss']
})
export class MainHeader { }
