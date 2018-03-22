import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MunchMatchedClientComponent } from './munch-matched-client.component';

describe('MunchMatchedClientComponent', () => {
  let component: MunchMatchedClientComponent;
  let fixture: ComponentFixture<MunchMatchedClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MunchMatchedClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MunchMatchedClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
