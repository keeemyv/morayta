import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ApiService } from '../api-services.service';
import { Validators } from '@angular/forms';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { NgModel } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, FormsModule, NavbarComponent],
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnInit {
  //VARIABLES
  registrationForm!: FormGroup;
  submittedForms: any[] = [];
  lastName: string = '';
  firstName: string = '';
  middleName: string = '';
  birthday: any = '';
  religion: string = '';
  contactNumber: any = '';
  address: string = '';
  emergencyContact: string = '';
  emergencyContactNumber: any = '';

  validLN: boolean = false;
  validFN: boolean = false;
  validMN: boolean = false;
  validLoc: boolean = false;
  validRel: boolean = false;
  // validLN: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      lastName: [''],
      firstName: [''],
      middleName: [''],
      birthday: [''],
      religion: [''],
      contactNumber: [''],
      address: [''],
      emergencyContact: [''],
      emergencyContactNumber: [''],
    });
  }

  //GO BACK TO HOME PAGE BUTTON
  goToHomePage(): void {
    this.router.navigate(['/']);
  }

  onSubmit(): void {
    if (!this.lastName) {
      this.validLN = true;
      return;
    }

    if (!this.firstName) {
      this.validFN = true;
      return;
    }

    if (!this.middleName) {
      this.validMN = true;
      return;
    }

    if (!this.address) {
      this.validLoc = true;
      return;
    }

    if (!this.religion) {
      this.validRel = true;
      return;
    }

    this.validLN = false;
    this.validFN = false;
    this.validMN = false;
    this.validLoc = false;
    this.validRel = false;
    this.apiService.addSubmittedForm(this.registrationForm.value);
    this.registrationForm.reset();
    alert('Form submitted successfully!');
  }
}
