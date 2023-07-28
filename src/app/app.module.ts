import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyModuleModule } from './my-module/my-module.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
