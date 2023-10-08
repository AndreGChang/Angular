import { TestBed } from '@angular/core/testing';

import { DbpessoasService } from './dbpessoas.service';

describe('DbpessoasService', () => {
  let service: DbpessoasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbpessoasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
