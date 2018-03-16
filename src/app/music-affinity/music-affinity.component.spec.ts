import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicAffinityComponent } from './music-affinity.component';

describe('MusicAffinityComponent', () => {
  let component: MusicAffinityComponent;
  let fixture: ComponentFixture<MusicAffinityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicAffinityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicAffinityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
