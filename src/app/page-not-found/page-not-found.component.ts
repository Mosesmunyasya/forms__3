import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 errorToDisplay(){
  console.log('Uknown Destination');
 }
//  window.addEventListener("resize",() =>{
//   console.log('window resized');
//  })
}
