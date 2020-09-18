import { TestBed } from '@angular/core/testing';

import { PasswordServicService } from './password-servic.service';

describe('PasswordServicService', () => {
  let service: PasswordServicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasswordServicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
