import { TestBed } from '@angular/core/testing';

import { MarketPlaceUserDataService } from './market-place-user-data.service';

describe('MarketPlaceUserDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarketPlaceUserDataService = TestBed.get(MarketPlaceUserDataService);
    expect(service).toBeTruthy();
  });
});
