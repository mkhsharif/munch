import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoutOutsComponent } from './shout-outs.component';

describe('ShoutOutsComponent', () => {
  let component: ShoutOutsComponent;
  let fixture: ComponentFixture<ShoutOutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoutOutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoutOutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
