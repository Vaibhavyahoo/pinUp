import { Injectable } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';
@Injectable()
export class HttpService {
public token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwic2VsZWN0ZWQiOnt9LCJnZXR0ZXJzIjp7fSwid2FzUG9wdWxhdGVkIjpmYWxzZSwiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsidXNlcm5hbWUiOiJpbml0IiwiaXNEZWxldGVkIjoiaW5pdCIsIl9fdiI6ImluaXQiLCJlbWFpbEFkZHJlc3MiOiJpbml0IiwicGFzc3dvcmQiOiJpbml0IiwiX2lkIjoiaW5pdCJ9LCJzdGF0ZXMiOnsiaWdub3JlIjp7fSwiZGVmYXVsdCI6e30sImluaXQiOnsiX192Ijp0cnVlLCJpc0RlbGV0ZWQiOnRydWUsImVtYWlsQWRkcmVzcyI6dHJ1ZSwicGFzc3dvcmQiOnRydWUsInVzZXJuYW1lIjp0cnVlLCJfaWQiOnRydWV9LCJtb2RpZnkiOnt9LCJyZXF1aXJlIjp7fX0sInN0YXRlTmFtZXMiOlsicmVxdWlyZSIsIm1vZGlmeSIsImluaXQiLCJkZWZhdWx0IiwiaWdub3JlIl19LCJlbWl0dGVyIjp7ImRvbWFpbiI6bnVsbCwiX2V2ZW50cyI6e30sIl9ldmVudHNDb3VudCI6MCwiX21heExpc3RlbmVycyI6MH19LCJpc05ldyI6ZmFsc2UsIl9kb2MiOnsiaXNEZWxldGVkIjpmYWxzZSwiX192IjowLCJlbWFpbEFkZHJlc3MiOiJ2YWliaGF2QGdtYWlsLmNvbSIsInBhc3N3b3JkIjoidmFpYmhhdkAxMjM0NSIsInVzZXJuYW1lIjoidmFpYmhhdiIsIl9pZCI6IjU4Y2EwMzA3MTFhZmRlNGI3YWYyNTYyYiJ9LCJpYXQiOjE0ODk2MzQwNzEsImV4cCI6MTQ4OTcyMDQ3MX0.-ezSh5sUNpikm_CFLjucy4JNWeLxHjEqHNWSbAeyyCs"
  constructor(private http: Http ) { }
  private baseUrl ='http://192.168.0.6:3000';

  getData(){
    const headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');
    headers.append('x-token',this.token);
     return this.http.get(this.baseUrl+'/admin/getRecentPinup/0',{ headers:headers})
     .map((response:Response) => response.json());

   }

  sendData(user:any){
  //  var body =user;
  // console.log(body)
  const headers = new Headers();
  headers.append('Content-Type','application/x-www-form-urlencoded');
  headers.append('x-token',this.token);

  return this.http.post(this.baseUrl+'/admin/addPinup',{pinupUrl:user},{ headers:headers})
  .subscribe(
     (data:any) => console.log(data)     //json() extract the data instead of use in service
                                                    //
   )
}
}
