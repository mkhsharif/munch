import { TestBed, inject } from '@angular/core/testing';

import { ShoutOutService } from './shout-out.service';

describe('ShoutOutService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShoutOutService]
    });
  });

  it('should be created', inject([ShoutOutService], (service: ShoutOutService) => {
    expect(service).toBeTruthy();
  }));
});
