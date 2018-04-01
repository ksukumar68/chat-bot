import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from "./app.component";
import { HomeComponent } from "./messages/home.component";
import { MessagesComponent } from "./messages/messages.component";
import { routing } from './app.routing';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        MessagesComponent
    ],
    imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}