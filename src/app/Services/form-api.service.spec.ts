import { TestBed } from '@angular/core/testing';

import { FormAPIService } from './form-api.service';

describe('FormAPIService', () => {
  let service: FormAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
