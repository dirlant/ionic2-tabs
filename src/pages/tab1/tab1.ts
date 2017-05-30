import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Tab1Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tab1',
  templateUrl: 'tab1.html',
})
export class Tab1Page {
  
  public tab1_titulo: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab1_titulo = 'Tab 1'
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab1Page');
  }

}
