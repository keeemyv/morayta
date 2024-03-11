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
  q17: string = '';
  q18: string = '';
  q19: string = '';
  q20: string = '';
  q21: string = '';
  q22: string = '';
  q23: string = '';
  q24: string = '';
  q25: string = '';
  q26: string = '';
  q27: string = '';
  q28: string = '';
  q29: string = '';
  q30: string = '';
  q31: string = '';
   q32: string = '';
  q33: string = '';
  q34: string = '';
  q35: string = '';
  q36: string = '';
  q37: string = '';
  q38: string = '';
  q39: string = '';
  q40: string = '';
  q401: string = '';
  q402: string = '';
  q403: string = '';


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
      q17: [''],
      q18: [''],
      q19: [''],
      q20: [''],
      q21: [''],
      q22: [''],
      q23: [''],
      q24: [''],
      q25: [''],
      q26: [''],
      q27: [''],
      q28: [''],
      q29: [''],
      q30: [''],
      q31: [''],
      q32: [''],
      q33: [''],
      q34: [''],
      q35: [''],
      q36: [''],
      q37: [''],
      q38: [''],
      q39: [''],
      q40: [''],
      q401: [''],
      q402: [''],
      q403: [''],
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

    // if (
    //   !this.q2 ||
    //   !this.q3 ||
    //   !this.q3 ||
    //   !this.q4 ||
    //   !this.q5 ||
    //   !this.q6 ||
    //   !this.q7 ||
    //   !this.q8 ||
    //   !this.q9 ||
    //   !this.q10 ||
    //   !this.q11 ||
    //   !this.q12 ||
    //   !this.q13 ||
    //   !this.q14 ||
    //   !this.q15 ||
    //   !this.q16 || !this.q17 ||!this.q18 || !this.q19 || !this.q20 || !this.q21 ||   !this.q22 ||
    //   !this.q23 ||
    //   !this.q23 ||
    //   !this.q24 ||
    //   !this.q25 ||
    //   !this.q26 ||
    //   !this.q27 ||
    //   !this.q28 ||
    //   !this.q29 ||
    //   !this.q30 ||
    //   !this.q31 ||
    //   !this.q32 ||
    //   !this.q33 ||
    //   !this.q34 ||
    //   !this.q35 ||
    //   !this.q36 || !this.q37 || !this.q39 || !this.q40 ) {
    //   this.validField = true;
    //   return;
    // }

    this.validField = false;
    this.validName = false;
    this.validHealth = false;

    this.apiService.addHealthForm(this.healthForm.value);
    this.healthForm.reset();
    alert('Form submitted successfully!');

  }
}
