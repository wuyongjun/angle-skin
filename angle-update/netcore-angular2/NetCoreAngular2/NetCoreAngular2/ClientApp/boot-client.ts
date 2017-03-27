import './__2.1.1.workaround.ts';
import 'angular2-universal-polyfills/browser';
import { enableProdMode } from '@angular/core';
import { platformUniversalDynamic } from 'angular2-universal';
import { AppModule } from './app/app.module';

import './modernizr.js'; // 'npm run modernizr' to create this file

// Enable either Hot Module Reloading or production mode
if (module['hot']) {
    module['hot'].accept();
    module['hot'].dispose(() => { platform.destroy(); });
} else {
    enableProdMode();
}

// Boot the application, either now or when the DOM content is loaded
const platform = platformUniversalDynamic();

const bootApplication = () => {
    platform
        .bootstrapModule(AppModule)
        .then(() => { (<any>window).appBootstrap && (<any>window).appBootstrap(); })
};

if (document.readyState === 'complete') {
    bootApplication();
} else {
    document.addEventListener('DOMContentLoaded', bootApplication);
}