import { TestBed } from '@angular/core/testing';

import { MedicalCheckService } from './medical-check.service';

describe('MedicalCheckService', () => {
  let service: MedicalCheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicalCheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
