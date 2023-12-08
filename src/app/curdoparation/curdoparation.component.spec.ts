import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurdoparationComponent } from './curdoparation.component';

describe('CurdoparationComponent', () => {
  let component: CurdoparationComponent;
  let fixture: ComponentFixture<CurdoparationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurdoparationComponent]
    });
    fixture = TestBed.createComponent(CurdoparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
