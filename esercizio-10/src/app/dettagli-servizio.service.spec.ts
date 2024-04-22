import { TestBed } from '@angular/core/testing';

import { DettagliServizioService } from './dettagli-servizio.service';

describe('DettagliServizioService', () => {
  let service: DettagliServizioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DettagliServizioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
