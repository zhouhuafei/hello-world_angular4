import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
} else {
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => {
      const domStyles: any = document.head.querySelectorAll('style');
      const arrStyles: any = Array.prototype.slice.call(domStyles);
      arrStyles
        .filter((style: any) => style.innerText.indexOf('_ng') !== -1)
        .map((el: any) => document.head.removeChild(el));
    });
  }
}

platformBrowserDynamic().bootstrapModule(AppModule);
