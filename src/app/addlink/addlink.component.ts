import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '@angular/material';
import {HttpService} from '../services/http.service';
@Component({
  selector: 'app-addlink',
  templateUrl: './addlink.component.html',
  styleUrls: ['./addlink.component.css']
})
export class AddlinkComponent implements OnInit {
public myPinupData;
  constructor(private http:HttpService) { }

  ngOnInit() {
    this.http.getData()
  .subscribe(
    (data) => {
      let myData=data;
      console.log(myData.pinupData)
      this.myPinupData= myData.pinupData;  //json() extract the data instead of use in service
                                                   //
  })
  }
  Title:string;
information:any =[];
date=new Date();

   addInfo(data) {
     this.http.sendData(data);
     console.log(data);
           this.Title="Angular";
         this.information.push(data);

   }

}
