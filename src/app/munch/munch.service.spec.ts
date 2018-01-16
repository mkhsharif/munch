import { TestBed, inject } from '@angular/core/testing';

import { MunchService } from './munch.service';

describe('MunchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MunchService]
    });
  });

  it('should be created', inject([MunchService], (service: MunchService) => {
    expect(service).toBeTruthy();
  }));
});
