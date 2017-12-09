import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryFriendsComponent } from './query-friends.component';

describe('QueryFriendsComponent', () => {
  let component: QueryFriendsComponent;
  let fixture: ComponentFixture<QueryFriendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryFriendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
