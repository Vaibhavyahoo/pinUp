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

  constructor(private update:UpdateService) {
  
}

  ngOnInit() {

  }

   edit(){
     console.log("edit called");
     this.update.getData()

         //json() extract the data instead of use in service
                                                      //}

  }
}
