import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainViewComponent } from './main-view.component';
import { BuySellBitcoinComponent } from './buy-sell.component';
import { DigitalWalletComponent } from './digital-wallet.component';
import { JobsComponent } from './jobs.component';
import { DigitalCoinsComponent } from './digital-coins.component';
import { StartupsComponent } from './startups.component';
import { EthereumComponent } from './ethereum.component';
import { NewsComponent } from './news.component';
import { BuyWithDigitalCoinComponent } from './buy-with.component';
import { BannerWideComponent } from './banner-wide.component';

@NgModule({
  declarations: [
    AppComponent,
	MainViewComponent,
	BuySellBitcoinComponent, 
	DigitalWalletComponent,
	JobsComponent,
	DigitalCoinsComponent,
	StartupsComponent,
	EthereumComponent,
	NewsComponent, 
	BuyWithDigitalCoinComponent, 
	BannerWideComponent
  ],
  imports: [
    BrowserModule,
	AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
