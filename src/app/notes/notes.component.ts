import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss',
})
export class NotesComponent implements OnInit {
  title: string = '';
  content: string = '';
  notes: { title: string; content: string }[] = [];
  addMode: boolean = false;

  constructor() {}

  ngOnInit(): void {
    // Retrieve existing notes from storage
    const storedNotes = JSON.parse(localStorage.getItem('notes') || '[]');
    this.notes = storedNotes;
  }

  onSubmit(): void {
    if ((this.title && this.content) !== '') {
      this.notes.push({ title: this.title, content: this.content });
      // Store notes in localStorage
      localStorage.setItem('notes', JSON.stringify(this.notes));
      this.title = '';
      this.content = '';
    } else {
      alert('Fields cannot be blank!');
      return;
    }
  }

  enterAddMode(): void {
    this.addMode= true;
  }

  cancelAddMode(): void {
    this.addMode= false;
  }
}
