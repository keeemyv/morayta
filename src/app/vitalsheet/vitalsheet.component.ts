import { Component, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-vitalsheet',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent],
  templateUrl: './vitalsheet.component.html',
  styleUrl: './vitalsheet.component.scss',
})
export class VitalsheetComponent {
  constructor() {}

  submittedVitals: any[] = [];
  formData: any = {};
  addMode: boolean = false;
  addModder: boolean = false;

  ngOnInit() {
    const storedData = localStorage.getItem('submittedVitals');
    if (storedData) {
      this.submittedVitals = JSON.parse(storedData);
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
    this.submittedVitals.push({ ...this.formData });
    localStorage.setItem(
      'submittedVitals',
      JSON.stringify(this.submittedVitals)
    );
    this.formData = {}; // Clear the form\
    alert('Vital sheet submitted successfully!');
  }

  deleteRow(index: number) {

    const isConfirmed = window.confirm('Are you sure you want to delete this data?');
    
    if (isConfirmed) {
    this.submittedVitals.splice(index, 1);
    localStorage.setItem(
      'submittedVitals',
      JSON.stringify(this.submittedVitals)
    );}
  }

  getTemperatureColor(temperature: number): string {
    if (temperature >= 36.1 && temperature <= 37.5) {
      return 'green';
    } else {
      return 'red';
    }
  }

  getPRColor(pr: number): string {
    if (pr >= 60 && pr <= 100) {
      return 'green';
    } else {
      return 'red';
    }
  }

  getRRColor(rr: number): string {
    if (rr >= 12 && rr <= 16) {
      return 'green';
    } else {
      return 'red';
    }
  }

  getO2SATColor(o2sat: number): string {
    if (o2sat >= 95 && o2sat <= 100) {
      return 'green';
    } else {
      return 'red';
    }
  }

  getSYSColor(sensor: number): string {
    if (sensor >= 90 && sensor <= 120) {
      return 'green';
    }
    if (sensor >= 121 && sensor <= 129) {
      return 'orange';
    }
    if (sensor >= 130 && sensor <= 139) {
      return 'orange';
    } else {
      return 'red';
    }
  }

  getDIAColor(sensor: number): string {
    if (sensor >= 60 && sensor <= 80) {
      return 'green';
    }
    if (sensor >= 81 && sensor <= 89) {
      return 'orange';
    } else {
      return 'red';
    }
  }
}
