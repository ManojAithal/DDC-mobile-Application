import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import {Http} from '@angular/http';
import { AppLoginPage } from '../pages/app-login/app-login';
import { TransactionTypesPage } from '../pages/transaction-types/transaction-types';
import { WorkListDetailsPage } from '../pages/work-list-details/work-list-details'

import {TranslateService, TranslateLoader, TranslateStaticLoader,TranslateModule} from 'ng2-translate/ng2-translate';// Import required for globalization @ Anuj


@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    AppLoginPage,
    TransactionTypesPage,
    WorkListDetailsPage
  ],
  imports: [
     IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    AppLoginPage,
    TransactionTypesPage,
    WorkListDetailsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})

 //---------------declaration of new language and  To set file path for properties files@ Anuj-----------
export class AppModule {
  constructor(translate: TranslateService) {
   translate.addLangs(["en", "fr"]);
   translate.setDefaultLang('en');
  }
}
export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, 'assets/i18n', '.json');
}
//-----------------declaration ends.----------------------------------------------------------------------