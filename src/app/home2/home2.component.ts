import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  constructor(public service:TestService){
   
  }

}
