import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-mar',
  standalone: true,
  imports: [NavbarComponent, CommonModule, FormsModule],
  templateUrl: './mar.component.html',
  styleUrl: './mar.component.scss',
})
export class MARComponent {
  constructor() {}

  submittedMAR: any[] = [];
  formData: any = {};
  addMode: boolean = false;
  addModder: boolean = false;

  ngOnInit() {
    const storedData = localStorage.getItem('submittedMAR');
    if (storedData) {
      this.submittedMAR = JSON.parse(storedData);
    }
  }

  toggleAddModder() {
    this.addMode = !this.addMode;
  }

  AddMode() {
    this.addMode = true;
  }

  cancelAdd() {
    this.addMode = false;
  }

  submitVital() {
    this.submittedMAR.push({ ...this.formData });
    localStorage.setItem(
      'submittedMAR', // Update the key to 'submittedMAR'
      JSON.stringify(this.submittedMAR)
    );
    this.formData = {}; // Clear the form
    alert('Vital sheet submitted successfully!');
  }

  deleteRow(index: number) {
    this.submittedMAR.splice(index, 1);
    localStorage.setItem(
      'submittedMAR', // Update the key to 'submittedMAR'
      JSON.stringify(this.submittedMAR)
    );
  }
  
  getADMColorClass(admOption: string): string {
    switch (admOption) {
      case 'GIVEN':
        return 'given-color';
      case 'NOT GIVEN':
        return 'not-given-color';
      case 'DELAYED':
        return 'delayed-color';
      case 'DISCONTINUED':
        return 'discontinued-color';
      default:
        return '';
    }
  }
}
