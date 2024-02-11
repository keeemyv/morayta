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
  constructor(private el: ElementRef<HTMLInputElement>) {}
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
    this.submittedVitals.splice(index, 1);
    localStorage.setItem(
      'submittedVitals',
      JSON.stringify(this.submittedVitals)
    );
  }
}
