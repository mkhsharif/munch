import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoInterestComponent } from './no-interest.component';

describe('NoInterestComponent', () => {
  let component: NoInterestComponent;
  let fixture: ComponentFixture<NoInterestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoInterestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
