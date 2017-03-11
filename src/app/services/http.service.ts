import { Injectable } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';
@Injectable()
export class HttpService {

  constructor(private http: Http ) { }
  private baseUrl ='http://192.168.0.59:3030';

  getData(){
     return this.http.get(this.baseUrl+'/admin/getRecentPinup/0')
     .map((response:Response) => response.json());

   }

  sendData(user:any){
  //  var body =user;
  // console.log(body)

  const headers = new Headers();
  headers.append('Content-Type','application/json');
  return this.http.post(this.baseUrl+'/admin/addPinup',{pinupUrl:user},  headers)
  .subscribe(
     (data:any) => console.log(data)     //json() extract the data instead of use in service
                                                    //
   )
}
}
