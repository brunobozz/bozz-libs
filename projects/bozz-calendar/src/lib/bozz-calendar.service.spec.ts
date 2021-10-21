import { TestBed } from '@angular/core/testing';

import { BozzCalendarService } from './bozz-calendar.service';

describe('BozzCalendarService', () => {
  let service: BozzCalendarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BozzCalendarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
