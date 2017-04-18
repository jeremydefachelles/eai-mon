/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PlatformsService } from './platforms.service';

describe('Service: PlatformService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlatformsService]
    });
  });

  it('should ...', inject([PlatformsService], (service: PlatformsService) => {
    expect(service).toBeTruthy();
  }));
});
