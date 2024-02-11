import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HAFComponent } from './haf.component';

describe('HAFComponent', () => {
  let component: HAFComponent;
  let fixture: ComponentFixture<HAFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HAFComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HAFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
