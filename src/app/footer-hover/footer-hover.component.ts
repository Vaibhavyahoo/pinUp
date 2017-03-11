import { Component, OnInit } from '@angular/core';
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
  constructor(private el: ElementRef,
                 private renderer: Renderer) { }

  ngOnInit() {
  }

  }
