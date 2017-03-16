import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import {UpdateService} from '../services/update.service'
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
myForm: FormGroup;
  constructor(private update:UpdateService) {
    this.myForm = new FormGroup({
        'imageUrl': new FormControl('',Validators.required),
        'tag': new FormControl('',Validators.required),
      'selectpicker':new FormControl('', Validators.required),
      'title': new FormControl(''),
      'link':new FormControl('', Validators.required),
      'desc':new FormControl('', Validators.required),

    });
  }

  @Input() imageUrl:any;

  ngOnInit() {

  }


  onSubmit(){
    console.log("hiiiii",this.myForm.value);
    this.update.sendData(this.myForm.value)
    console.log(this.myForm.value)
  }


}
