import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MunchQueryComponent } from './munch-query.component';

describe('MunchQueryComponent', () => {
  let component: MunchQueryComponent;
  let fixture: ComponentFixture<MunchQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MunchQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MunchQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
