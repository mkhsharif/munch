import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MunchActiveComponent } from './munch-active.component';

describe('MunchActiveComponent', () => {
  let component: MunchActiveComponent;
  let fixture: ComponentFixture<MunchActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MunchActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MunchActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
