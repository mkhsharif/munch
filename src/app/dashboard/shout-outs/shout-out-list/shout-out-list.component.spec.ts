import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoutOutListComponent } from './shout-out-list.component';

describe('ShoutOutListComponent', () => {
  let component: ShoutOutListComponent;
  let fixture: ComponentFixture<ShoutOutListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoutOutListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoutOutListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
