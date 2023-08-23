import { TestBed } from '@angular/core/testing';

import { ListServicesNamesService } from './list.services.names.service';

describe('ListServicesNamesService', () => {
  let service: ListServicesNamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListServicesNamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
