### API

<div class="md-card__table">

| **Method** | **Properties** | **Description** |
|:---|:---:|---:|
| `urlBase64Decode(str: string): string` | | *Decode a base64 string.* |
| `decodeToken(token: string): any` | | *Decode a jwt token.* |
| `getTokenExpirationDate(token: string): Date or null` | | *Get expiration date from token.* |
| `isTokenExpired(token: string, offsetSeconds?: number): boolean` | | *Verify it token is expired.* |

</div>

### How to use

Import module on main application module.

```typescript
import { JwtModule } from '@ng-lab/jwt';

@NgModule({
  imports: [
    JwtModule,
  ],
  exports: [
    JwtModule
  ]
})
export class ApplicationProvisionModule {}
```

JWT service can then been called/injected on other services/guards.

```typescript
import { JWTService } from '@ng-lab/jwt';

const jwtService: JWTService = new JWTService();

jwtService.urlBase64Decode('mybase64stringencoded');
jwtService.decodeToken('myawesomejwttoken');
jwtService.getTokenExpirationDate('myawesomejwttoken');
jwtService.isTokenExpired('myawesomejwttoken');
```
