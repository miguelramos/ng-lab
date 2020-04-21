### API JourneyService

Journey service collects all data on listeners that you registered. By default stack log interval is 20 rows. You can increase this value adding on `ConfiguratorService` a property `JOURNEY_STACK_LIMIT` and choose your limit. Be aware that of the value that you assign.

<div class="md-card__table">

| **Method** | **Properties** | **Description** |
|:---|:---:|---:|
| `init(configurator: ConfiguratorService): void` | | *Set configurator with stack option limit and init listeners* |
| | `steps: JourneyStep[]` | *Collection where track-step event are collected* |
| | `meta: JourneyMeta` | *Object where track-meta events are registered* |

</div>

### Events

 - `track-step` : event that collect click, doubleclick, scroll, request
 - `track-meta` : event that collect once performance, gps, user agent, screen width and height

### Trackers

You can use two trackers: registering request intercepting and other to add steps to track-step collection. For request interceptors check example in how to use.

```typescript
export type JOURNEY_TYPE =
  | 'URL_CHANGE'
  | 'SCROLL'
  | 'INTERACTION'
  | 'CLICK'
  | 'TYPING'
  | 'REQUEST'
  | 'NETWORK';

export enum JOURNEY_INTERACTION_TYPE {
  SCROLL = 'SCROLL',
  URL_CHANGE = 'URL_CHANGE',
  INTERACTION = 'INTERACTION',
  CLICK = 'CLICK',
  TYPING = 'TYPING',
  REQUEST = 'REQUEST',
  NETWORK = 'NETWORK',
  ACTION = 'ACTION'
}

function TrackingAction(type: JOURNEY_INTERACTION_TYPE, data: any): void // For your custom needs
function TrackingNavigation(url: string): void // Example bellow

```

### How to use

Import module on main application module only. You can activate all listeners just passing `true` as argument or you
can choose which one you wants to activate

```typescript
import { JourneyModule, TrackingHttpRequest } from '@ng-lab/journey';

// This is the the interface for singular options
interface TrackingOptions {
  network?: boolean; // offline or online events
  location?: boolean; // navigation location api
  performance?: boolean; // navigation performance
  scroll?: boolean; // window scroll event
  interaction?: boolean; // window click, doubleclick and right click
  typing?: boolean; // inputs values
}

@NgModule({
  imports: [
    JourneyModule.forRoot(true), // all options
    /*JourneyModule.forRoot({
      interaction: true
    })*/
  ],
  providers: [
    // Track you api requests
    { provide: HTTP_INTERCEPTORS, useClass: TrackingHttpRequest, multi: true }
  ]
})
export class ApplicationProvisionModule {}

// Registering routing navigation
@Component({
  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    this.router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });
  }

  navigationInterceptor(event: RouterEvent) {
    if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
      TrackingNavigation(event.url);
    }
  }
}
```
