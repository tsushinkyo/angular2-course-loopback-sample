import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// third party
import {MdSidenavModule, MdGridListModule, MdButtonModule} from '@angular/material';

// my modules
import { UserModule } from './modules/user/user.module';
import { ObjectModule } from './modules/object/object.module';
import { SharedModule } from './modules/shared/shared.module';
import { RoutingModule } from './modules/routing/routing.module';
// my components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

// my services
import { LoginWardService } from './modules/user/services/auth/login-ward.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UserModule,
    ObjectModule,
    SharedModule,
    RoutingModule,
    MdSidenavModule, MdGridListModule, MdButtonModule
  ],
  providers: [LoginWardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
