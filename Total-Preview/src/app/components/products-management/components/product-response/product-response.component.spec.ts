import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductResponseComponent } from './product-response.component';

describe('ProductResponseComponent', () => {
  let component: ProductResponseComponent;
  let fixture: ComponentFixture<ProductResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
