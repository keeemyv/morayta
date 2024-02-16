import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IvsheetComponent } from './ivsheet.component';

describe('IvsheetComponent', () => {
  let component: IvsheetComponent;
  let fixture: ComponentFixture<IvsheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IvsheetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IvsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
