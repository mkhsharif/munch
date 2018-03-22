import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MunchSetupComponent } from './munch-setup.component';

describe('MunchSetupComponent', () => {
  let component: MunchSetupComponent;
  let fixture: ComponentFixture<MunchSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MunchSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MunchSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
