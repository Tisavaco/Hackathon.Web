import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};

export const environment = {
  production: true,
  apiBaseUrl: 'https://lcthackathon.ddns.net'
};
