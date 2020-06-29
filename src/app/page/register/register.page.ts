
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, LoadingController, AlertController } from '@ionic/angular';

import { AccessProviders } from '../../providers/access-providers';
import { HAMMER_LOADER } from '@angular/platform-browser';




@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  dataFromService:any;

  mname :string;
  gender :string;
  brithday :string;
  email :string;
  password :string;
  confrim_password :string;

  disableButton;

  constructor(
    private router: Router,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private accprovider: AccessProviders

  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.disableButton = false;
  }

  async prentsentToast(a) {
    const toast = await this.toastCtrl.create({
      message: a,
      duration: 1500,
      position: 'top'

    });
    toast.present();
  }

  async presentAlert(msg){

    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: msg,
      backdropDismiss:false,
      buttons: [
        {
          text: 'Close',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
            //action
          }
        }, {
          text: "Try Agent",
          handler: () => {
            console.log('Confirm Login Agent');
          this.tryRegister();

          }
        }
      ]
    });
    await alert.present();
  }

  async   tryRegister() {
    if (this.mname == "") {
      this.prentsentToast("Your Name is required");
    } else if (this.gender == "") {
      this.prentsentToast("Gender is required");
    } else if (this.brithday == "") {
      this.prentsentToast("Brithday is required");
    } else if (this.email == "") {
      this.prentsentToast("Email is required");
    } else if (this.password == "") {
      this.prentsentToast("Password is required");
    } else if (this.password !== this.confrim_password) {
      this.prentsentToast("Password are not the same");
    } else {
      this.disableButton = true;

        const loading = await this.loadingCtrl.create({
          message:'โปรดรอ..',
        })
        loading.present();

      
      return new Promise(resolve => {
        var body = {
          // name: this.mname,
          // gender: this.gender,
          // password: this.password,
          // email: this.email,
          // brithday : this.brithday,
          // stamtime: 'CURRENT_TIMESTAMP'

          email:this.email,
          password:this.password

        }

   
        
        this.accprovider.postData(body).subscribe((res: any) => {
          if (res.succes == true) {
            loading.dismiss();
            this.disableButton = false;
            this.prentsentToast(res.msg);
            this.router.navigate(["/login"]);

          } else {
            loading.dismiss();
            this.disableButton = false;
            this.prentsentToast(res.msg);
            this.router.navigate(['/login']);
          }
        },(err)=>{
          loading.dismiss();
          this.disableButton = false;
          this.presentAlert("Not Connect");

        }
        );
      });
    }

  }

  sendingPost(){

  }


}
