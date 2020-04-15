// import {  Observable } from 'rxjs';

// export interface IInterval {
//   days: number;
//   hours: number;
//   minutes: number;
//   seconds: number;
// }

// export class CountdownService {

// getIntervalTime(currentDate: number, weddingTime: number): IInterval{
//   let intervalTime: number = Math.floor((currentDate - weddingTime) / 1000);
//   return this.getTime(intervalTime);
// }
// private getTime(time : number) : IInterval{
//   let interval: IInterval = 
//   {days : 0, hours : 0, minutes : 0, seconds: 0};
//   interval.days = Math.floor(time / 86400);
//   time -= interval.days * 86400;
//   interval.hours = Math.floor(time / 3600) % 24;
//   time -= interval.hours * 3600;
//   interval.minutes = Math.floor(time / 60) % 60;
//   time -= interval.minutes * 60;
//   interval.seconds = time % 60;
//   return interval;
// }

// // getCountDown(timeToGo: number): Observable<IInterval> {
// //   return Observable
// //   .interval(1000)
// //   .startWith(0)
// //   .map(
// //     x =>  this.getIntervalTime(timeToGo, Date.now())
//   //)
//   }

// validIntervalCountdown(timeToGo){
//     return (timeToGo - Date.now()) >= 0? true : false;
// }


// }