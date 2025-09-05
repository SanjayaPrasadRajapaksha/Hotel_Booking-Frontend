import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule, TooltipPosition } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { HotelMapView } from '../hotel-map-view/hotel-map-view';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-hotel-card',
  standalone: true,
  imports: [
    MatIconModule,
    MatTooltipModule,
    MatButtonModule
  ],
  templateUrl: './hotel-card.html',
  styleUrls: ['./hotel-card.scss']
})
export class HotelCard {
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl<TooltipPosition>(this.positionOptions[0]);

  private dialog = inject(MatDialog);

  openModal() {
    this.dialog.open(HotelMapView, {
      width: '1000px',
      data: {},
      disableClose: true
    });
  }
}
