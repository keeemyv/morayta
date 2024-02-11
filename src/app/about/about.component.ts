import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  @ViewChild('vision') visionElement!: ElementRef;

  scrollToVision() {
    this.visionElement.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
