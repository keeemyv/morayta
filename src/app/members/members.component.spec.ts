import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersComponent } from './members.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('MembersComponent', () => {
  let component: MembersComponent;
  let fixture: ComponentFixture<MembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MembersComponent, NO_ERRORS_SCHEMA]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
