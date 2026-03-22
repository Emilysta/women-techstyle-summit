import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHighlightOptions } from 'ngx-highlightjs';
import { routes } from './app.routes';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideBrowserGlobalErrorListeners(),
    provideHighlightOptions({
      lineNumbersLoader: () => import('ngx-highlightjs/line-numbers'),
      coreLibraryLoader: () => import('highlight.js/lib/core'),
      languages: {
        typescript: () => import('highlight.js/lib/languages/typescript'),
        scss: () => import('highlight.js/lib/languages/scss'),
        xml: () => import('highlight.js/lib/languages/xml')
      },
    })
  ]
};
