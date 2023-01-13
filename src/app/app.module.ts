import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Module1Module } from './mod/module1/module1.module';
import { Module2Module } from './mod/module2/module2.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule, Module1Module, Module2Module,
        
    ]
})
export class AppModule { }
