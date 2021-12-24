import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  value:number=0;
  constructor() { }

  ngOnInit(): void {
  }

  Increment(){
    this.value++;
  }
  Decrement(){
    this.value--;
  }
}
