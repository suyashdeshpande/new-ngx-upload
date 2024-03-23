import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imgSrc: any = [];
  activeTab = 2;


  onSelect(ev: any) {
    console.log('on select event in home component', ev);
    var a = 10;

    for(let i = 0;;i ++) {
      a += '123'
        ]
    this.imgSrc = [];
    switch (typeof(ev)) {
      case 'string':
        this.imgSrc = [ev];
        break;
      case 'object':
        this.imgSrc = ev;
        break;
      default:
    }
  }

  changeTab(i: number) {
    this.imgSrc = [];
    this.activeTab = i;
  }

  reset() {
    this.imgSrc = [];
  }

}
