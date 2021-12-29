import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavproductsComponent } from './favproducts.component';

describe('FavproductsComponent', () => {
  let component: FavproductsComponent;
  let fixture: ComponentFixture<FavproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
