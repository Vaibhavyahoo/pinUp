import { Component, OnInit } from '@angular/core';
import {UpdateService} from '../services/update.service'
import {
    Renderer,
    HostListener,
    HostBinding,
    ElementRef,
    NgModule,
    Input,
    Output,
    EventEmitter
} from '@angular/core';
@Component({
  selector: 'app-footer-hover',
  templateUrl: './footer-hover.component.html',
  styleUrls: ['./footer-hover.component.css']
})
export class FooterHoverComponent implements OnInit {
  private ishovering: boolean;
// @Input() name:string;
  constructor(private update:UpdateService) {
  // console.log("check"+this.name)
}

  ngOnInit() {

  }

   edit(){
     console.log("edit called");
     this.update.getData()
     .subscribe(
       (data) => {
      console.log(data)
         //json() extract the data instead of use in service
                                                      //
     })
   }

  }
