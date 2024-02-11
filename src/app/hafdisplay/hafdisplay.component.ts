import { Component } from '@angular/core';
import { ApiService } from '../api-services.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hafdisplay',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  templateUrl: './hafdisplay.component.html',
  styleUrl: './hafdisplay.component.scss',
})
export class HafdisplayComponent {
  healthForms: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.healthForms = this.apiService.getHealthForm();
  }

  // clearHealthForms(): void {
  //   this.apiService.clearHealthForms();
  //   this.healthForms = [];
  // }
}
