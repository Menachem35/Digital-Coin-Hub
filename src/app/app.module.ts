import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DigitalWalletComponent } from './digital-wallet.component';
import { MainViewComponent } from './main-view.component';
import { bannerWideComponent } from './banner-wide.component';

@NgModule({
  declarations: [
    AppComponent,
	DigitalWalletComponent, 
	MainViewComponent, 
	bannerWideComponent
  ],
  imports: [
    BrowserModule,
	AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
