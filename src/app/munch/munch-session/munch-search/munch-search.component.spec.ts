import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MunchSearchComponent } from './munch-search.component';

describe('MunchSearchComponent', () => {
  let component: MunchSearchComponent;
  let fixture: ComponentFixture<MunchSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MunchSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MunchSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
