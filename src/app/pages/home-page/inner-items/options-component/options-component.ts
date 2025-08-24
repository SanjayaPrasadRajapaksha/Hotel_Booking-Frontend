import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import {StaysContextComponent} from '../stays-context-component/stays-context-component';

@Component({
  selector: 'app-options-component',
  standalone: true,
  imports: [
    MatTabsModule,   // ✅ this gives access to <mat-tab-group> and <mat-tab>
    MatIconModule,
    StaysContextComponent,
    // ✅ this gives access to <mat-icon>
  ],
  templateUrl: './options-component.html',
  styleUrls: ['./options-component.scss']
})
export class OptionsComponent { }
