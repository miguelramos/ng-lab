### API

<div class="md-card__table">

| **Method** | **Properties** | **Description** |
|:---|:---:|---:|
|  | `observe` | *Observer/listen of events* |
| `emit(event: string, data: any)` |  | *Emit an event on hub.* |
| `on(event: string, cb: fn)` |  | *Listener when event is trigger.* |
| `off(event: string, cb: fn)` |  | *Deactivate listeners on event.* |
| `clear(): void` |  | *Clear all registered events.* |
| `hasEvent(event: string): boolean` |  | *Verify if event exist.* |
| `size(): number` |  | *Size of map events.* |
| `getEventFunctions(event: string): [fn]` |  | *Get events callbak.* |

</div>

### How to use

Import module on main application module.

```typescript
import { HubModule } from '@ng-lab/hub';

@NgModule({
  imports: [
    HubModule,
  ],
  exports: [
    HubModule
  ]
})
export class ApplicationProvisionModule {}
```

Callback typing and observable response.

```typescript
export type fn = (params: any) => any;

export interface HubServiceActionInterface {
  event: string;
  data: any;
  callback: fn;
  action: 'emit' | 'on' | 'off';
}
```

Hubservice to consume, trigger and all api methods.

```typescript
import { HubService } from '@ng-lab/hub';

const hubService: HubService = new HubService();

function bar() {
  // arguments is null
}

hubService.observe.subscribe((rs: HubServiceActionInterface) => {
  // subscriber response
});

hubService.on('foo', bar);
hubService.emit('foo', null);
hubService.size();
hubService.hasEvent('foo');
hubService.getEventFunctions('foo');
hubService.clear();
```
