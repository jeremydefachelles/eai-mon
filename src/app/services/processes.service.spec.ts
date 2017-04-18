/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProcessesService } from './processes.service';

describe('ProcessesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProcessesService]
    });
  });

  it('should ...', inject([ProcessesService], (service: ProcessesService) => {
    expect(service).toBeTruthy();
  }));
});
