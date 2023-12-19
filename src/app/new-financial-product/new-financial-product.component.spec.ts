import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFinancialProductComponent } from './new-financial-product.component';

describe('NewFinancialProductComponent', () => {
  let component: NewFinancialProductComponent;
  let fixture: ComponentFixture<NewFinancialProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewFinancialProductComponent]
    });
    fixture = TestBed.createComponent(NewFinancialProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
