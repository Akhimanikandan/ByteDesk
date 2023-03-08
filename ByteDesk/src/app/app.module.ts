import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { RaiseticketComponent } from './raiseticket/raiseticket.component';
import { UserticketlistComponent } from './userticketlist/userticketlist.component';
import { ResolvedticketlistComponent } from './resolvedticketlist/resolevdticketlist.component';
import { ReassignedlistComponent } from './reassignedlist/reassignedlist.component';
import { UpdateComponent } from './update/update.component';
import { CancelComponent } from './cancel/cancel.component';
import { CloseComponent } from './close/close.component';
import { HttpsInterceptor } from './https.interceptor.service';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { NgxPaginationModule } from 'ngx-pagination';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    HeaderComponent,
    RaiseticketComponent,
    UserticketlistComponent,
    ResolvedticketlistComponent,
    ReassignedlistComponent,
    UpdateComponent,
    CancelComponent,
    CloseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxUiLoaderModule,
    NgxPaginationModule,

   
   
  
  ],
  
  providers: [
    {
     
      provide:HTTP_INTERCEPTORS, useClass:HttpsInterceptor ,multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
