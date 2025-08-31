import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register-verification',
  standalone: true, 
  imports: [    
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    RouterModule],
  templateUrl: './register-verification.html',
  styleUrl: './register-verification.scss'
})
export class RegisterVerification implements OnInit {
  //activatedRoute = inject(ActivatedRoute);
  email: any;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    //this.email = this.activatedRoute.snapshot.paramMap.get('email');
    this.activatedRoute.paramMap.subscribe(resp => {
      this.email = resp.get('email');
    })
  }
}