import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { Purchases } from '@ionic-native/purchases'

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

console.log("in main.js");

Purchases.setup("api_key");
Purchases.setDebugLogsEnabled(true);
const userId = Purchases.getAppUserID();
console.log("user ID is: " + userId);
console.log("after setup");
Purchases.setAttributes({"hey": "hi"});

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

