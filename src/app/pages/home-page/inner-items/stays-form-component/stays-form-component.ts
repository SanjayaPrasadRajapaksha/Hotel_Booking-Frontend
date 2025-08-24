import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-stays-form-component',
  standalone: true,
  imports: [
    MatTabsModule,   // ✅ this gives access to <mat-tab-group> and <mat-tab>
    MatIconModule,],  // add other modules if needed
  templateUrl: './stays-form-component.html',
  styleUrls: ['./stays-form-component.scss']  // ✅ fixed
})
export class StaysFormComponent { }
