import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TestService } from '../test.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  @ViewChild('msge', { static: true }) msgeElement: ElementRef;
  constructor(public service:TestService, private router:Router,msgeElement: ElementRef){
    this.msgeElement = msgeElement;

  }
  send(){
    this.service.message=this.msgeElement.nativeElement.value;
  }
}
