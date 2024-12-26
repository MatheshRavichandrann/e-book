import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Import AppRoutingModule
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component'; // Import LoginComponent

@NgModule({
declarations: [
AppComponent,
LoginComponent // Declare LoginComponent
],
imports: [
BrowserModule,
AppRoutingModule // Import AppRoutingModule here
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
