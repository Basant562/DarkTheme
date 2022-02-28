import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BasicHeaderComponent } from './components/basic-header/basic-header.component';
import { BasicFooterComponent } from './components/basic-footer/basic-footer.component';
@NgModule({
  declarations: [
    AppComponent,
    BasicHeaderComponent,
    BasicFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
