import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

interface Submission {
  pName: string;
  nePercent: number;
  neNumber: number;
  lyPercent: number;
  lyNumber: number;
  moPercent: number;
  moNumber: number;
  eoPercent: number;
  eoNumber: number;
  baPercent: number;
  baNumber: number;
  nrbPercent: number;
  nrbNumber: number;
  wbc: number;
  rbc: number;
  hgb: number;
  hct: number;
  mcv: number;
  mch: number;
  mchc: number;
  rdw: number;
  plt: number;
  mpv: number;
}

@Component({
  selector: 'app-emr',
  standalone: true,
  imports: [CommonModule, NavbarComponent, ReactiveFormsModule],
  templateUrl: './emr.component.html',
  styleUrl: './emr.component.scss',
})
export class EMRComponent {
  emrForm: FormGroup = new FormGroup({});
  submittedData: Submission[] = [];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.emrForm = this.formBuilder.group({
      pName: ['', Validators.required],
      nePercent: ['', Validators.required],
      neNumber: ['', Validators.required],
      lyPercent: ['', Validators.required],
      lyNumber: ['', Validators.required],
      moPercent: ['', Validators.required],
      moNumber: ['', Validators.required],
      eoPercent: ['', Validators.required],
      eoNumber: ['', Validators.required],
      baPercent: ['', Validators.required],
      baNumber: ['', Validators.required],
      nrbPercent: ['', Validators.required],
      nrbNumber: ['', Validators.required],
      wbc: ['', Validators.required],
      rbc: ['', Validators.required],
      hgb: ['', Validators.required],
      hct: ['', Validators.required],
      mcv: ['', Validators.required],
      mch: ['', Validators.required],
      mchc: ['', Validators.required],
      rdw: ['', Validators.required],
      plt: ['', Validators.required],
      mpv: ['', Validators.required],
    });

    // Load submitted data from localStorage on component initialization
    const savedData = localStorage.getItem('submittedData');
    if (savedData) {
      this.submittedData = JSON.parse(savedData);
    }
  }

  onSubmit(): void {
    console.log('Submit button clicked.'); // Debugging statement
    if (this.emrForm.valid) {
      console.log('Form is valid.'); // Debugging statement
      const newSubmission: Submission = this.emrForm.value;
      console.log('New submission:', newSubmission); // Debugging statement

      // Initialize submittedData if it's not already an array
      if (!Array.isArray(this.submittedData)) {
        this.submittedData = [];
      }

      // Add new submission to the array
      this.submittedData.push(newSubmission);
      console.log('Submitted data:', this.submittedData); // Debugging statement

      // Save updated array of submissions to localStorage
      localStorage.setItem('submittedData', JSON.stringify(this.submittedData));
      alert('Submitted data successfully!');
      // Reset form after submission
      this.emrForm.reset();
    } else {
      alert('Please fill out all of the fields.');
      console.log('Form is invalid.'); // Debugging statement

      // Handle form validation errors
    }
  }
}
