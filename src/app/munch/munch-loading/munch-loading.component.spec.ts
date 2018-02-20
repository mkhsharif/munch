import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MunchLoadingComponent } from './munch-loading.component';

describe('MunchLoadingComponent', () => {
  let component: MunchLoadingComponent;
  let fixture: ComponentFixture<MunchLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MunchLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MunchLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
