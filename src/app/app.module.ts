import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';

import {IonicRestService} from './ionic-rest.service';







import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { AccessProviders } from './providers/access-providers';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(),
    IonicStorageModule.forRoot(),HttpClientModule,
     AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    AccessProviders,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },IonicRestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
