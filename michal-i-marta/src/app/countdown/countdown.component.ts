import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit, OnDestroy {


seconds: number;
minutes: number;
hours: number;
days: number;

Date =  Date.now();
Clock = Date.now();

constructor(elm: ElementRef) {

  }


ngOnInit() {

  setInterval(() => {
  this.Clock = Date.now();
}, 1000);



const weddingTime=  String(new Date('10/17/2020 14:00'));

   setInterval(() => {
  this.Date = Date.now();
 const t = Date.parse(weddingTime) - this.Date;
   this.seconds =   Math.floor( (t/1000) % 60 );
   this.minutes = Math.floor( (t/1000/60) % 60 );
   this.hours = Math.floor( (t/(1000*60*60)) % 24 );
   this.days = Math.floor( t/(1000*60*60*24) );
  }, 1000);
  

}

ngOnDestroy(){

}




}