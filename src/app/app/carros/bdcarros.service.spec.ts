import { TestBed } from '@angular/core/testing';

import { BdcarrosService } from './bdcarros.service';

describe('BdcarrosService', () => {
  let service: BdcarrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BdcarrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
