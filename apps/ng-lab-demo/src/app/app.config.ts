import { environment } from '../environments/environment';

export const CONFIG = {
  ENV: environment,
  PRODUCTION: environment.production,
  DOMAINS_API: [
    { HOST: '', KEY: '@local' },
    { HOST: '', KEY: '@origin', ORIGIN: true },
    { HOST: environment.api, KEY: '@api' }
  ],
  ENDPOINTS: {
    LOGOS: {
      CONFIGURATOR: '@local:/assets/configurator-logo.svg',
      SUPPORT: '@local:/assets/support-logo.svg',
      JWT: '@local:/assets/jwt-logo.svg',
      RESPONSIVE: '@local:/assets/responsive-logo.svg',
      HUB: '@local:/assets/hub-logo.svg',
      HS: '@local:/assets/hs-logo.svg',
      HU: '@local:/assets/hu-logo.svg'
    },
    POSTS: {
      LIST: '@api:/posts',
      SINGLE: '@api:/posts/:id'
    },
    HOME: {
      FETCH: `@local:${environment.production ? '/ng-lab/' : ''}/assets/data/home.json`
    },
    PACKAGES: {
      FETCH: `@local:${environment.production ? '/ng-lab/' : ''}/assets/data/packages.json`
    }
  }
};
