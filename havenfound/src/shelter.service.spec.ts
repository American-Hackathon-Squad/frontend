import { TestBed } from '@angular/core/testing';

import { ShelterServiceService } from './shelter-service.service';

describe('ShelterServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShelterServiceService = TestBed.get(ShelterServiceService);
    expect(service).toBeTruthy();
  });
});
