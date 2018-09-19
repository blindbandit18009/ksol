import { TestBed, inject } from '@angular/core/testing';

import { AutoMoveService } from './auto-move.service';

describe('AutoMoveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutoMoveService]
    });
  });

  it('should be created', inject([AutoMoveService], (service: AutoMoveService) => {
    expect(service).toBeTruthy();
  }));
});
