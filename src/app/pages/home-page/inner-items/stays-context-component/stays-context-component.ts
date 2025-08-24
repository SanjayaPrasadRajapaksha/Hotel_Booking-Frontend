import { Component } from '@angular/core';
import {StaysFormComponent} from '../stays-form-component/stays-form-component';

@Component({
  selector: 'app-stays-context-component',
  standalone: true,            // ✅ make it standalone
  imports: [
    StaysFormComponent
  ],                  // ✅ add Angular Material modules or CommonModule here if needed
  templateUrl: './stays-context-component.html',
  styleUrls: ['./stays-context-component.scss']  // ✅ fixed typo
})
export class StaysContextComponent { }
