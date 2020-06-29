import { Component, OnInit, Provider } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AccessProviders } from '../../providers/access-providers';

import {IonicRestService} from '../../ionic-rest.service';

import 'rxjs/add/operator/map';
 
import { Members } from '../../members';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
dataFromService:any;
  eml: string;
  pwd: string;

  list:any;



  constructor(
    private router: Router,private accProiver:AccessProviders,public restsr:IonicRestService) {}

  ngOnInit() {

    this.testConnect();
  //  this.postSending();
   
  }

  openRegister() {
    this.router.navigate(['/register']);
  }
  tryLogin() {

  }

  testConnect(){
    this.accProiver.getSamble().then((data:any)=>{
      this.list = data;
      console.log(this.list)
    });

    var dataTosend = {name:"tah",job:"programming"};
    this.accProiver.Savedata(dataTosend)
    .subscribe(res =>{this.dataFromService = JSON.stringify(res)
      console.log(this.dataFromService);
    })

 

   
    
  }

  


}
