import { async, TestBed } from '@angular/core/testing';
import { JwtModule } from './jwt.module';
import { JWTService } from './jwt.service';

describe('> JWTModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [JwtModule]
    }).compileComponents();
  }));

  it('# Should have module defined.', () => {
    expect(JwtModule).toBeDefined();
  });

  it('# Should have JWTService on dependency injector.', () => {
    const service = TestBed.get(JWTService, null);

    expect(typeof service === 'object').toBeTruthy();
  });
});
