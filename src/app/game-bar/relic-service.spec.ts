import { TestBed } from '@angular/core/testing';

import { RelicService } from './relic-service';

describe('RelicService', () => {
  let service: RelicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RelicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
