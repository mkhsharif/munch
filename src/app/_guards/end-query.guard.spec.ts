import { TestBed, async, inject } from '@angular/core/testing';

import { EndQueryGuard } from './end-query.guard';

describe('EndQueryGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EndQueryGuard]
    });
  });

  it('should ...', inject([EndQueryGuard], (guard: EndQueryGuard) => {
    expect(guard).toBeTruthy();
  }));
});
