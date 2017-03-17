import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import {UpdateService} from '../services/update.service';
import {HttpService} from '../services/http.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() data:any;
// updateData:any;

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



  private showMessage;
  onNotifyClicked(message:string){
    console.log(message);
    // console.log("this..hihi",this.piupObject.tags);
    // // this.updateData=this.piupObject.tags;
    // // console.log(this.updateData)
    // // this.showMessage = message ;
  }



  ngOnInit() {
    console.log('success -->',this.data);

  }

  //
  onSubmit(){
    console.log("hiiiii",this.myForm.value);
    this.update.sendData(this.myForm.value).subscribe(data=>{
      console.log(data)
    }
    )
    console.log(this.myForm.value)
  }




}
