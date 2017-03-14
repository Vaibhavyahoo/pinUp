import { Component, OnInit,Input } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
myForm: FormGroup;
  constructor() {
    this.myForm = new FormGroup({
        'imageName': new FormControl('',Validators.required),
        'tag': new FormControl('',Validators.required),
      'selectpicker':new FormControl('', Validators.required),
      'website': new FormControl(''),
      'link':new FormControl('', Validators.required),
      'desc':new FormControl('', Validators.required),

    });
  }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.myForm);
  }
}
