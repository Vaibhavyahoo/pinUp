import { Component, OnInit } from '@angular/core';
import {UpdateService} from '../services/update.service';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import {HttpService} from '../services/http.service';
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
  @Input() pinupID;
  public maindata:any;
  info:any;
  myForm: FormGroup;
    constructor(private update:UpdateService,private http: HttpService) {

      this.myForm = new FormGroup({
          'imageUrl': new FormControl('',Validators.required),
          'tags': new FormControl('',Validators.required),
        'selectpicker':new FormControl('', Validators.required),
        'title': new FormControl(''),
        'link':new FormControl('', Validators.required),
        'description':new FormControl('', Validators.required),

      });

    }
  ngOnInit() {

  }
  // private showMessage;
  // onNotifyClicked(message:string){
  //   console.log(message);
  //
  // }

  onSubmit(){
    console.log("hiiiii",this.myForm.value);
    this.update.sendData(this.myForm.value).subscribe(data=>{
      console.log(data)
    }
    )
    console.log(this.myForm.value)
  }

   edit(){
// <<<<<<< HEAD
//      console.log("edit called",this.pinupID);
//      this.update.getData(this.pinupID)
//      .subscribe(
//      (data) => {
//        let myData = data;
//        console.log(data);
//         this.info = data;
//         console.log(this.info.pinupData[0]);
// //
// this.maindata=this.info.pinupData[0].imageUrl;
// console.log(this.maindata.like)
// =======
     console.log("edit called", this.pinupID);
this.update.getData(this.pinupID)
  .subscribe(
  (data) => {
    let myData = data;
    console.log(data);
    this.info = data;
    console.log(this.info.pinupData[0]);
    //
    this.maindata = this.info.pinupData[0];
    console.log(this.maindata);
// >>>>>>> acd5f184b2bb599118189c5d37434f22f9e8aa75
  })
}
}
