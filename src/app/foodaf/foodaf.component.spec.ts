import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodafComponent } from './foodaf.component';

describe('FoodafComponent', () => {
  let component: FoodafComponent;
  let fixture: ComponentFixture<FoodafComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodafComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
