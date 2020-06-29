
import { Injectable,OnInit } from '@angular/core';
 import {HttpClient,HttpHeaders,HttpErrorResponse,HttpRequest} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import { JsonPipe } from '@angular/common';

@Injectable()
export class AccessProviders{

    
   // server:string = "https://localhost:5001/api/members";

    server:string = "https://reqres.in/api/users";
    
    constructor(public http:HttpClient ){}

    getSamble() {
        //https://randomuser.me/api/
        //https://jsonplaceholder.typicode.com/users
    
        return new Promise((resolve, reject) => {
          this.http.get("https://localhost:5001/api/members").timeout(5900)
            .map(res => res)
            .subscribe(data => {
              resolve(data);
            },
              error => {  reject(error); })
        });   
      }

      postSamble() {
          //https://randomuser.me/api/
          //https://jsonplaceholder.typicode.com/users
          
          let headers = new HttpHeaders({'Content-Type':'application/json'});
          let options = { headers: headers };
          let body={
         frist_name: "tah",
          last_name: "111",
          email: "efa;lsf"
        }    
          return new Promise((resolve, reject) => {
            this.http.post("https://reqres.in/api/users",JSON.stringify(body),{headers : new HttpHeaders({'Content-Type':'application/json'})})
            .timeout(5900)
              .map(res => res)
              .subscribe(data => {
                resolve(data);
              },
                error => {
                  reject(error);
                })
          });
      
        }
        
      postData(body){

       let headers = new HttpHeaders({'Content-Type':'application/json'});
       let options = { headers: headers }

        return this.http.post(this.server,JSON.stringify(body), options)
        .timeout(5900)
        .map(res =>res)
      }


      Savedata(dataTosend)
      {
        let headers = new HttpHeaders({'Content-Type':'application/json'}); 
        let options = { headers: headers };
       // var url="https://reqres.in/api/users";
        return this.http.post(this.server,dataTosend,options).timeout(5000)
        .map(res=> res);

      //  getNewPlans() { return this.http.get('plans.json').map(res => res.json()); }

      
        
      }

} 
