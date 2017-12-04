import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MunchExitComponent } from './munch-exit.component';

describe('MunchExitComponent', () => {
  let component: MunchExitComponent;
  let fixture: ComponentFixture<MunchExitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MunchExitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MunchExitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
