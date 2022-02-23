import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoytComponent } from './shared/components/main-layoyt/main-layoyt.component';
import { MainPageComponent } from './main-page/main-page.component';
import { DetailedInfoProductPageComponent } from './detailed-info-product-page/detailed-info-product-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoytComponent,
    MainPageComponent,
    DetailedInfoProductPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
