import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDietsComponent } from './user-diets.component';

describe('UserDietsComponent', () => {
  let component: UserDietsComponent;
  let fixture: ComponentFixture<UserDietsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDietsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDietsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
