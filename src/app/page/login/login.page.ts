import { Component, OnInit, Provider } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AccessProviders } from '../../providers/access-providers';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  eml: string;
  pwd: string;

  list:any;

  constructor(
    private router: Router,private accProiver:AccessProviders) {}



  ngOnInit() {

    this.testConnect();
   
  }

  openRegister() {
    this.router.navigate(['/register']);
  }
  tryLogin() {

  }

  testConnect(){
  

    this.accProiver.getSamble().then((data:any)=>{
      this.list = data;
    })

  }


}
