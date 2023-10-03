import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { MenuComponent } from './shared/components/menu/menu.component';

// Configuracion del locale de la app
import localeEsBO from '@angular/common/locales/es-BO';
import localefrCA from '@angular/common/locales/fr-CA';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEsBO);
registerLocaleData(localefrCA);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  exports: [],
  providers: [{ provide: LOCALE_ID, useValue: 'es-BO' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
