import { Injectable } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';

@Injectable()
export class UpdateService {

  constructor(private http:Http) { }
  private baseUrl ='http://192.168.0.6:3000';

  getData(){
     let mydata=this.http.get(this.baseUrl+'/admin/editPinup/')
     console.log(mydata)

}


  sendData(user:any){
  //  var body =user;
  console.log(user)

  const headers = new Headers();
  headers.append('Content-Type','application/json');
  return this.http.post(this.baseUrl+'/admin/updatePinup',{updatePinup:user},  headers)
  .subscribe(
     (data:any) => console.log(data)     //json() extract the data instead of use in service
                                                    //
   )
}
}
