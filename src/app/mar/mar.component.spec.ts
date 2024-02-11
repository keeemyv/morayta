import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MARComponent } from './mar.component';

describe('MARComponent', () => {
  let component: MARComponent;
  let fixture: ComponentFixture<MARComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MARComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MARComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
