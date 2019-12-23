import { TestBed } from '@angular/core/testing';

import { State2Service } from './state2.service';

describe('State2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: State2Service = TestBed.get(State2Service);
    expect(service).toBeTruthy();
  });
});
