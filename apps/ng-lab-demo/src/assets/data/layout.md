### API LAYOUT COMPONENT

<div class="md-card__table">

| **Method** | **Properties** | **Description** |
|:---|:---:|---:|
|  | `display` | *Input display. Default 'flex'* |
|  | `flexDirection` | *Input flexDirection. Default 'column' and @HostBinding('style.flex-direction')* |
|  | `justifyContent` | *Input justifyContent. Default 'null' and @HostBinding('style.justify-content')* |
|  | `flexWrap` | *Input flexWrap. Default 'null' and @HostBinding('style.flex-wrap')* |
|  | `alignItems` | *Input alignItems. Default 'null' and @HostBinding('style.align-items')* |
|  | `alignContent` | *Input alignContent. Default 'null' and @HostBinding('style.align-content')* |
|  | `width` | *Input width. Default 'null' and @HostBinding('style.width')* |
|  | `height` | *Input height. Default 'null' and @HostBinding('style.height')* |
|  | `padding` | *Input padding. Default 'null' and @HostBinding('style.padding')* |
|  | `margin` | *Input margin. Default 'null' and @HostBinding('style.margin')* |
|  | `flexBasis` | *Input flexBasis. Default 'null' and @HostBinding('style.flex-basis')* |
|  | `flexGrow` | *Input flexGrow. Default 'null' and @HostBinding('style.flex-grow')* |
|  | `flexShrink` | *Input flexShrink. Default 'null' and @HostBinding('style.flex-shrink')* |
|  | `order` | *Input order. Default 'null' and @HostBinding('style.order')* |
|  | `alignSelf` | *Input alignSelf. Default 'null' and @HostBinding('style.align-self')* |

</div>

### How to use

Import module on main application module.

```typescript
import { LayoutModule } from '@ng-lab/layout';

@NgModule({
  imports: [
    LayoutModule,
  ],
  exports: [
    LayoutModule
  ]
})
export class ApplicationProvisionModule {}
```

Layout component

```html
<ui-layout-area [flex]="1">
  <h1>My Flex container</h1>
</ui-layout-area>
```
