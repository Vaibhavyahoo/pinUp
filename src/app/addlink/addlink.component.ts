import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '@angular/material';
@Component({
  selector: 'app-addlink',
  templateUrl: './addlink.component.html',
  styleUrls: ['./addlink.component.css']
})
export class AddlinkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  Title:string;
information:any =[];
date=new Date();

   addInfo(newInfo:string) {
           this.Title="Angular";
         this.information.push(newInfo);

   }

}