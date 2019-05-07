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
    LOGO: '@local:/assets/lab-log.svg',
    POSTS: {
      LIST: '@api:/posts',
      SINGLE: '@api:/posts/:id'
    }
  }
};
