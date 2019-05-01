import { JWTService } from './jwt.service';
import { JWTSplitDecodeError, JWTIllegalBaseDecodeError } from './jwt-errors';

describe('> JWTService', () => {
  let jwtService: JWTService;
  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJUZXN0IFRva2VuIiwiaWF0IjoxNDkzNTEyNzgxLCJleHAiOjE1MjQ5NjIzODEsImF1ZCI6Ind3dy5leGFtcGxlLmNvbSIsInN1YiI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJHaXZlbk5hbWUiOiJKb2hubnkiLCJTdXJuYW1lIjoiUm9ja2V0IiwiRW1haWwiOiJqcm9ja2V0QGV4YW1wbGUuY29tIiwiUm9sZSI6WyJNYW5hZ2VyIiwiUHJvamVjdCBBZG1pbmlzdHJhdG9yIl19.SvbfH5galrs6gbM6hcB4zdhBTK7rW1-ZCS90wMmtDTE";
  const tokenInvalid = "bGciOiJIUzI1NiJ9.eyJpc3MiOiJUZXN0ImF1ZCI6Ind3dy5leGFtcGxlLmNvbSIsInN1YiI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJHaXZlbk5hbWUiOiJKb2hubnkiLCJTdXJuYW1lIjoiUm9ja2V0IiwiRW1haWwiOiJqcm9ja2V0QGV4YW1wbGUuY29tIIl19.SvbfH5galrs6gbM6hcB4zdhBTK7rW1-ZCS90wMm";
  const tokenIncomplete = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJUZXN0IFRva2VuIiwiaWF0IjoxNDkzNTEyNzgxLCJleHAiOjE1MjQ5NjIzODEsImF1ZCI6Ind3dy5leGFtcGxlLmNvbSIsInN1YiI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJHaXZlbk5hbWUiOiJKb2hubnkiLCJTdXJuYW1lIjoiUm9ja2V0IiwiRW1haWwiOiJqcm9ja2V0QGV4YW1wbGUuY29tIiwiUm9sZSI6WyJNYW5hZ2VyIiwiUHJvamVjdCBBZG1pbmlzdHJhdG9yIl19";

  beforeEach(() => {
    jwtService = new JWTService();
  });

  it('# Should decode jwt token.', () => {
    const jwt = jwtService.decodeToken(token);

    expect(jwt).toEqual({
      iss: 'Test Token',
      iat: 1493512781,
      exp: 1524962381,
      aud: 'www.example.com',
      sub: 'jrocket@example.com',
      GivenName: 'Johnny',
      Surname: 'Rocket',
      Email: 'jrocket@example.com',
      Role: ['Manager', 'Project Administrator']
    });
  });

  it('# Should have been expired.', () => {
    const isExpired = jwtService.isTokenExpired(token);

    expect(isExpired).toBeTruthy();
  });

  it('# Should throw JWTSplitDecodeError', () => {
    expect(() => { jwtService.decodeToken(tokenIncomplete); }).toThrow(JWTSplitDecodeError);
  });

  it('# Should throw JWTIllegalBaseDecodeError', () => {
    expect(() => { jwtService.decodeToken(tokenInvalid); }).toThrow(JWTIllegalBaseDecodeError);
  });
});
