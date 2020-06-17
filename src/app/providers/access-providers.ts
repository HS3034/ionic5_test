
import { Injectable } from '@angular/core';
 import {HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
  import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';





@Injectable()
export class AccessProviders{

    server:string = "https://localhost:5001/api/";
    
    constructor(public http:HttpClient ){}

    getSamble() {

        //https://randomuser.me/api/
        //https://jsonplaceholder.typicode.com/users
    
        return new Promise((resolve, reject) => {
          this.http.get(this.server+'members')
            .map(res => res)
            .subscribe(data => {
              resolve(data);
            },
              error => {
                reject(error);
              })
        });
    
      }
        
    postData(body,file){

      const headers = new Headers();
      headers.append('Access-Control-Allow-Origin', '*');
      headers.append('Access-Control-Allow-Headers', 'Content-Type');
      headers.append('Access-Control-Allow-Methods', 'GET, POST');
      headers.append('Content-Type', 'application/json');

       // let headers = new HttpHeaders({'Content-Type':'application/json'});
        // const options = { headers: headers }

        const options = new RequestOptions({ headers });
        return this.http.post(this.server+ file,JSON.stringify(body), options)
        .timeout(5900)
        .map(res =>res)
      }
      



} 
