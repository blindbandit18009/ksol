import { TestBed, inject } from '@angular/core/testing';

import { InitializeTableauService } from './initialize-tableau.service';

describe('InitializeTableauService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InitializeTableauService]
    });
  });

  it('should be created', inject([InitializeTableauService], (service: InitializeTableauService) => {
    expect(service).toBeTruthy();
  }));
});
