import { TestBed } from '@angular/core/testing';

import { BdimemoryService } from './bdimemory.service';

describe('BdimemoryService', () => {
  let service: BdimemoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BdimemoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
