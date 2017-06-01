import { TestBed, inject } from '@angular/core/testing';

import { LoginWardService } from './login-ward.service';

describe('LoginWardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginWardService]
    });
  });

  it('should ...', inject([LoginWardService], (service: LoginWardService) => {
    expect(service).toBeTruthy();
  }));
});
