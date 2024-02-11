import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VitalsheetComponent } from './vitalsheet.component';

describe('VitalsheetComponent', () => {
  let component: VitalsheetComponent;
  let fixture: ComponentFixture<VitalsheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VitalsheetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VitalsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
