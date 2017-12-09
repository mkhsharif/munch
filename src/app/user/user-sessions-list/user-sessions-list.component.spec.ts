import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSessionsListComponent } from './user-sessions-list.component';

describe('UserSessionsListComponent', () => {
  let component: UserSessionsListComponent;
  let fixture: ComponentFixture<UserSessionsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSessionsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSessionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
