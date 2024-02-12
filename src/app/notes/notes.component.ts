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
  name: string = '';
  content: string = '';
  notes: { title: string; content: string }[] = [];
  addMode: boolean = false;
  editMode: boolean = false;
  selectedNote: { title: string; content: string } = {
    title: '',
    content: '',
  };
  originalTitle: string = '';
  originalContent: string = '';

  constructor() {}

  ngOnInit(): void {
    // Retrieve existing notes from storage
    const storedNotes = JSON.parse(localStorage.getItem('notes') || '[]');
    this.notes = storedNotes;
  }

  onSubmit(): void {
    if (this.title && this.content) {
      this.notes.push({
        title: this.title,
        
        content: this.content,
      });
      // Store notes in localStorage
      localStorage.setItem('notes', JSON.stringify(this.notes));
      this.title = '';
      this.name = '';
      this.content = '';
      alert('Note has submitted successfully!');
    } else {
      alert('Fields cannot be blank!');
    }
  }

  enterAddMode(): void {
    this.addMode = true;
  }

  cancelAddMode(): void {
    this.addMode = false;
  }

  editCard(note: { title: string; content: string }): void {
    this.editMode = true;
    this.selectedNote = { ...note };
    this.originalTitle = note.title;
    this.originalContent = note.content;
  }

  saveChanges(): void {
    const index = this.notes.findIndex((note) => note === this.selectedNote);
    if (index !== -1) {
      this.notes[index] = { ...this.selectedNote };
      localStorage.setItem('notes', JSON.stringify(this.notes));
    }
    this.editMode = false;
  }

  cancelEdit(): void {
    this.editMode = false;
    this.selectedNote.title = this.originalTitle;
    this.selectedNote.content = this.originalContent;
  }
}
