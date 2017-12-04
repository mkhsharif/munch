import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MunchLiveComponent } from './munch-live.component';

describe('MunchLiveComponent', () => {
  let component: MunchLiveComponent;
  let fixture: ComponentFixture<MunchLiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MunchLiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MunchLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
