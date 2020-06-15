
import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout;'

@Injectable()
export class AccessProviders{

    server:string = "http://localhost/tutorail/api";
    constructor(
        public http:HttpClient
    ){}

    
//   getSingin(usr: string, pss: string) {
//     let headers = new Headers({ 'Content-Type': 'application/json' });
//    // let options = new RequestOptions({ headers: headers });

//     return new Promise((resolve, reject) => {
//       this.http.get(this.urlh + '/MLogin?usr=' + usr + '&pss=' + pss)
//         .toPromise()
//         .then((response) => {
//         //  console.log('API Response : ', response.json());
//           resolve(response.json());
//         })
//         .catch((error) => {
//          // console.error('API Error : ', JSON.stringify(error));
//           reject(error.json());
//         });
//     });
//   }

} 
