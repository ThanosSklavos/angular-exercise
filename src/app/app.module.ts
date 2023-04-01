import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyCompComponent } from './my-comp/my-comp.component';
import { Child1Component } from './my-comp/child1/child1.component';
import { Child2Component } from './my-comp/child2/child2.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCompComponent,
    Child1Component,
    Child2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
