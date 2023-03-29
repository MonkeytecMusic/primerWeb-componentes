import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CssComponent } from './e1Css/e1css.component';
import { HtmlComponent } from './e1Html/e1html.component';
import { TsComponent } from './e1Ts/e1ts.component';


@NgModule({
  declarations: [
    AppComponent,
    CssComponent,
    HtmlComponent,
    TsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
