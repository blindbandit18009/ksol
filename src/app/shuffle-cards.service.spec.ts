import { TestBed, inject } from '@angular/core/testing';

import { ShuffleCardsService } from './shuffle-cards.service';

describe('ShuffleCardsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShuffleCardsService]
    });
  });

  it('should be created', inject([ShuffleCardsService], (service: ShuffleCardsService) => {
    expect(service).toBeTruthy();
  }));
});
