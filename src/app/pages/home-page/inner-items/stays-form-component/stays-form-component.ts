import {ChangeDetectionStrategy, Component} from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-stays-form-component',
  standalone: true,
  imports: [
    MatTabsModule,        // for <mat-tab-group> and <mat-tab>
    MatIconModule,        // for material icons
    MatFormFieldModule,   // for <mat-form-field>
    MatDatepickerModule,  // for datepicker & date range
    MatInputModule,
    MatMenuModule// required for <input matInput>
  ],
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './stays-form-component.html',
  styleUrls: ['./stays-form-component.scss']
})
export class StaysFormComponent { }
