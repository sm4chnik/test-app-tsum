import { TestBed } from '@angular/core/testing';

import { TsumService } from './tsum.service';

describe('TsumService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TsumService = TestBed.get(TsumService);
    expect(service).toBeTruthy();
  });
});
