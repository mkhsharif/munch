import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MunchSessionComponent } from './munch-session.component';

describe('MunchSessionComponent', () => {
  let component: MunchSessionComponent;
  let fixture: ComponentFixture<MunchSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MunchSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MunchSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
