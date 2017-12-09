import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MunchComponent } from './munch.component';

describe('MunchComponent', () => {
  let component: MunchComponent;
  let fixture: ComponentFixture<MunchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MunchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
