import { Component } from '@angular/core';

/**
 * Generated class for the Tab3Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-tab3',
  templateUrl: 'tab3.html',
})
export class Tab3Page {
  
  public tab3_titulo: string;

  constructor() {
    this.tab3_titulo = 'Tab 3';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab3Page');
  }

}
