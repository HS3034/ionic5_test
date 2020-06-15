
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

    
} 
