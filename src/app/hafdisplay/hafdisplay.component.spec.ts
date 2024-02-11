import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HafdisplayComponent } from './hafdisplay.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('HafdisplayComponent', () => {
  let component: HafdisplayComponent;
  let fixture: ComponentFixture<HafdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HafdisplayComponent, NO_ERRORS_SCHEMA]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HafdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
