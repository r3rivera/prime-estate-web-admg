import { TestBed } from '@angular/core/testing';

import { JwtokenhandlerInterceptor } from './jwtokenhandler.interceptor';

describe('JwtokenhandlerInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      JwtokenhandlerInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: JwtokenhandlerInterceptor = TestBed.inject(JwtokenhandlerInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
