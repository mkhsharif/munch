import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoutOutDetailComponent } from './shout-out-detail.component';

describe('ShoutOutDetailComponent', () => {
  let component: ShoutOutDetailComponent;
  let fixture: ComponentFixture<ShoutOutDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoutOutDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoutOutDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
