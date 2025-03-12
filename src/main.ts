/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app.routing.module';

bootstrapApplication(AppComponent, {
  providers: [
    AppRoutingModule,
    // Add other providers if needed
  ]
}).catch(err => console.error(err));