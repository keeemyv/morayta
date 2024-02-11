import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { ApiService } from '../api-services.service';

@Component({
  selector: 'app-haf',
  standalone: true,
  imports: [
    NavbarComponent,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  templateUrl: './haf.component.html',
  styleUrl: './haf.component.scss',
})
export class HAFComponent {
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private apiService: ApiService
  ) {}

  healthForm!: FormGroup;
  submittedForms: any[] = [];

  fullName: string = '';
  health: any = '';
  q2: string = '';
  q3: string = '';
  q4: string = '';
  q5: string = '';
  q6: string = '';
  q7: string = '';
  q8: string = '';
  q9: string = '';
  q10: string = '';
  q11: string = '';
  q12: string = '';
  q13: string = '';
  q14: string = '';
  q15: string = '';
  q16: string = '';

  validName: boolean = false;
  validHealth: boolean = false;
  validField: boolean = false;

  ngOnInit(): void {
    this.healthForm = this.fb.group({
      fullName: [''],
      health: [''],
      q2: [''],
      q3: [''],
      q4: [''],
      q5: [''],
      q6: [''],
      q7: [''],
      q8: [''],
      q9: [''],
      q10: [''],
      q11: [''],
      q12: [''],
      q13: [''],
      q14: [''],
      q15: [''],
      q16: [''],
    });
  }

  onSubmit(): void {
    if (!this.fullName) {
      this.validName = true;
      return;
    }

    if (!this.health) {
      this.validHealth = true;
      return;
    }

    if (
      !this.q2 ||
      !this.q3 ||
      !this.q3 ||
      !this.q4 ||
      !this.q5 ||
      !this.q6 ||
      !this.q7 ||
      !this.q8 ||
      !this.q9 ||
      !this.q10 ||
      !this.q11 ||
      !this.q12 ||
      !this.q13 ||
      !this.q14 ||
      !this.q15 ||
      !this.q16
    ) {
      this.validField = true;
      return;
    }

    this.validField = false;
    this.validName = false;
    this.validHealth = false;

    this.apiService.addHealthForm(this.healthForm.value);
    this.healthForm.reset();
    alert('Form submitted successfully!');

  }
}
