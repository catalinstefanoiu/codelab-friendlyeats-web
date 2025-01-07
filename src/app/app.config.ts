import { ApplicationConfig } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideFunctions, getFunctions } from '@angular/fire/functions';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { getApp } from '@angular/fire/app';
import {
  ReCaptchaEnterpriseProvider,
  initializeAppCheck,
  provideAppCheck,
} from '@angular/fire/app-check';

declare global {
  var FIREBASE_APPCHECK_DEBUG_TOKEN: boolean;
}


export const appConfig: ApplicationConfig = {
  providers: [
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideStorage(() => getStorage()),
    provideMessaging(() => getMessaging()),
    provideRouter(routes),
    provideAppCheck(() => {
      const appCheck = initializeAppCheck(getApp(), {
        provider: new ReCaptchaEnterpriseProvider(
          environment.reCAPTCHAEnterpriseKey.key
        ),
        isTokenAutoRefreshEnabled: true,
      });
      if (location.hostname === 'localhost') {
        self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
      }
      return appCheck;
    }),
  ],
};
