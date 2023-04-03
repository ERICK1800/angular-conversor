import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent {

  num : number = 0;
  resup : number = 0;

  CMpM(){
    this.resup = this.num / 100;
  }

  MpCM(){
    this.resup = this.num * 100;
  }

  MpKM(){
    this.resup = this.num / 1000;
  }

  KMpM(){
    this.resup = this.num * 1000;
  }

}
