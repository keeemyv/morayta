import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegdisplayComponent } from './regdisplay.component';

describe('RegdisplayComponent', () => {
  let component: RegdisplayComponent;
  let fixture: ComponentFixture<RegdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegdisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
