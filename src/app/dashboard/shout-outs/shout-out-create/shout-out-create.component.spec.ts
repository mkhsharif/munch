import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoutOutCreateComponent } from './shout-out-create.component';

describe('ShoutOutCreateComponent', () => {
  let component: ShoutOutCreateComponent;
  let fixture: ComponentFixture<ShoutOutCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoutOutCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoutOutCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
