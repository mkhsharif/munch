import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MunchMatchedComponent } from './munch-matched.component';

describe('MunchMatchedComponent', () => {
  let component: MunchMatchedComponent;
  let fixture: ComponentFixture<MunchMatchedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MunchMatchedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MunchMatchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
