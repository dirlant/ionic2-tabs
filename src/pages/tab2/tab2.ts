import { Component } from '@angular/core';

/**
 * Generated class for the Tab2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-tab2',
  templateUrl: 'tab2.html',
})
export class Tab2Page {

  public tab2_titulo: string;
  constructor() {
    this.tab2_titulo = 'Tab 2'
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab2Page');
  }

}
