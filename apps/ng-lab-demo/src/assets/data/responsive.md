### API

<div class="md-card__table">

| **Method** | **Properties** | **Description** |
|:---|:---:|---:|
|  | `responsiveChange` | *Property to subscribe for changes. It triggers every time browser window is resized.* |

</div>

### How to use

Import module on main application module. Responsive module as default breakpoints token that can be override.

```typescript
import { ResponsiveModule } from '@ng-lab/responsive';

/*
Default responsive breakpoinst
{
  XS: 575,
  SM: 767,
  MD: 991,
  LG: 1199,
  XL: 1200
}
*/

@NgModule({
  imports: [
    ResponsiveModule,
  ],
  exports: [
    ResponsiveModule
  ]
})
export class ApplicationProvisionModule {}
```

Set new breakpoints and just override token values. Breakpoints keys must exist as defined (XS|SM...).

```typescript
import { ResponsiveModule, RESPONSIVE_BREAKPOINTS_TOKEN } from '@ng-lab/responsive';

const BREAKPOINTS = {
  XS: 575,
  SM: 767,
  MD: 991,
  LG: 1199,
  XL: 1200
};

@NgModule({
  imports: [
    ResponsiveModule,
  ],
  exports: [
    ResponsiveModule
  ],
  providers: [
    {
      provide: RESPONSIVE_BREAKPOINTS_TOKEN,
      useValue: BREAKPOINTS
    }
  ]
})
export class ApplicationProvisionModule {}
```

Responsive directive can be set in any html tag to trigger changes in window resize event.

```html
<p ngResponsive (responsiveChange)="whenResponsiveChange">A responsive directive</p>
```

```typescript
export interface ResponsiveChangeInterface {
  width: number;
  key: keyof Breakpoints;
}

whenResponsiveChange({width: number, key: 'XS'|'SM'|'MD'|'LG'|'XL'})
```
