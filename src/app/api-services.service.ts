import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor() {}
  
  //REGISTRATION FORM
  private readonly STORAGE_KEY = 'submittedForms';
  getSubmittedForms(): any[] {
    const storedForms = localStorage.getItem(this.STORAGE_KEY);
    return storedForms ? JSON.parse(storedForms) : [];
  }

  addSubmittedForm(form: any): void {
    const submittedForms = this.getSubmittedForms();
    submittedForms.push(form);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(submittedForms));
  }

  clearSubmittedForms(): void {
    localStorage.removeItem(this.STORAGE_KEY);
  }

  //HEALTH ASSESSMENT FORM
  private readonly STORAGE_KEY2 ='submittedHealth';

  getHealthForm(): any[] {
    const healthForms = localStorage.getItem(this.STORAGE_KEY2);
    return healthForms? JSON.parse(healthForms) : [];
  }

  addHealthForm(form: any): void {
    const healthForms = this.getHealthForm();
    healthForms.push(form);
    localStorage.setItem(this.STORAGE_KEY2, JSON.stringify(healthForms));
  }
}
