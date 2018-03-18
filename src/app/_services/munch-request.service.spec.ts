import { TestBed, inject } from '@angular/core/testing';

import { MunchRequestService } from './munch-request.service';

describe('MunchRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MunchRequestService]
    });
  });

  it('should be created', inject([MunchRequestService], (service: MunchRequestService) => {
    expect(service).toBeTruthy();
  }));
});
