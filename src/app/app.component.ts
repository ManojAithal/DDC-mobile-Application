import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';

import {TranslateService} from 'ng2-translate'; // Import required for globalization @ Anuj


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  translate:TranslateService;// @Anuj
  rootPage: any = Page1;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform,translate:TranslateService) {
    this.initializeApp();
     this.translate = translate;

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Page One', component: Page1 },
      { title: 'Page Two', component: Page2 }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

   changefr(){
          console.log(this.translate);
          this.translate.use('fr');
         

    }
    changeen(){
          console.log(this.translate);
          this.translate.use('en');

    }
}
