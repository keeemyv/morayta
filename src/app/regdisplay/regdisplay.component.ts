import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api-services.service';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-regdisplay',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './regdisplay.component.html',
  styleUrl: './regdisplay.component.scss',
})
export class RegdisplayComponent {
  submittedForms: any[] = [];
  
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.submittedForms = this.apiService.getSubmittedForms();
  }

  clearSubmittedForms(): void {
    const isConfirmed = window.confirm('Are you sure you want to clear all data?');
    
    if (isConfirmed) {
    this.apiService.clearSubmittedForms();
    this.submittedForms = [];
  }}
}
