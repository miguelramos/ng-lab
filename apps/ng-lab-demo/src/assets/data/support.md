### API

<div class="md-card__table">

| **Functions** | **Description** |
|:---|---:|
| `function uniqueID(): string` | *Create unique UUIDS* | 
| `function between(num: number, min: number, max: number, inclusive = true): boolean` | *Check if a number is between interval* | 
| `function getUrlHostname(url: string): string` | *Get the hostname/domain from a url.* | 
| `function isValidNumber(n: any): boolean` | *Check if parameter is a valid number.* | 
| `function flatten(object: object, prefix = '', separator = '.'): Object` | *Flatten a deep object into a one level object with it’s path as key.* | 
| `function chunk(collection: any[], size: number)` | *Split an array in x size chunks.* | 

</div>

### How to use

Import module and use any function you need.

```typescript
import { flatten, GenericType } from '@ng-lab/support';

// Interfaces
export interface ErrorDetails {
  [key: string]: any;
}

export interface GenericType {
  [key: string]: any;
}

```
