import { Component } from '@angular/core';


import { NavController , AlertController} from 'ionic-angular';

import { Globalization } from 'ionic-native';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
 constructor(public navCtrl: NavController,public alertCtrl:AlertController) {
    
  }

  test(){
    Globalization.getPreferredLanguage().then((value)=>{
             // console.log();
              let alert = this.alertCtrl.create({
                  title: 'Global',
                  subTitle: 'Global '+JSON.stringify(value.value),
                  buttons: ['OK']
                });
                alert.present();
    })
  }
       
}

