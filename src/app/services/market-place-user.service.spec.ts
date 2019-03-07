import { TestBed } from '@angular/core/testing';

import { MarketPlaceUserService } from './market-place-user.service';

describe('MarketPlaceUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarketPlaceUserService = TestBed.get(MarketPlaceUserService);
    expect(service).toBeTruthy();
  });
});
