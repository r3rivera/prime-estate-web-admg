import { TestBed } from '@angular/core/testing';

import { UserApplicationService } from './user-application.service';

describe('ApplicationService', () => {
  let service: UserApplicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserApplicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
