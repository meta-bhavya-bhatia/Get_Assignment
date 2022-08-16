import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAddItemToCartComponent } from './show-add-item-to-cart.component';

describe('ShowAddItemToCartComponent', () => {
  let component: ShowAddItemToCartComponent;
  let fixture: ComponentFixture<ShowAddItemToCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAddItemToCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAddItemToCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
