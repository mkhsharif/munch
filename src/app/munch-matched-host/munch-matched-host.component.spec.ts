import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MunchMatchedHostComponent } from './munch-matched-host.component';

describe('MunchMatchedHostComponent', () => {
  let component: MunchMatchedHostComponent;
  let fixture: ComponentFixture<MunchMatchedHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MunchMatchedHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MunchMatchedHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
