import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { ConceitosModule } from './conceitos';
import { HomeComponent } from './introducao/home.component';
import { LoginModule } from './login';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  
    
  ],
  imports: [
    BrowserModule,
    ConceitosModule,
    LoginModule,
    AppRoutingModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
