import { Injectable } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';

@Injectable()
export class UpdateService {

  constructor(private http:Http) { }
  private baseUrl ='http://192.168.0.59:3030';

  getData(){
     return this.http.get(this.baseUrl+'/admin/editPinup/')
     .map((response:Response) => response.json());

   }


}
