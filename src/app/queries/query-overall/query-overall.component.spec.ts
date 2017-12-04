import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryOverallComponent } from './query-overall.component';

describe('QueryOverallComponent', () => {
  let component: QueryOverallComponent;
  let fixture: ComponentFixture<QueryOverallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryOverallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryOverallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
