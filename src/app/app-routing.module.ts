import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainViewComponent } from './main-view.component';
import { BuySellBitcoinComponent } from './buy-sell.component';
import { DigitalWalletComponent } from './digital-wallet.component';
import { JobsComponent } from './jobs.component';
import { DigitalCoinsComponent } from './digital-coins.component';
import { StartupsComponent } from './startups.component';
import { EthereumComponent } from './ethereum.component';
import { NewsComponent } from './news.component';
import { BuyWithDigitalCoinComponent } from './buy-with.component';

const routes: Routes = [
   { path: '', redirectTo: '/main', pathMatch: 'full' }, 
   { path: 'main',          component: MainViewComponent },
   { path: 'buy-sell', component: BuySellBitcoinComponent },
   { path: 'digital-wallet', component: DigitalWalletComponent },
   { path: 'jobs', component: JobsComponent },
   { path: 'digital-coins', component: DigitalCoinsComponent },
   { path: 'startups', component: StartupsComponent },
   { path: 'ethereum', component: EthereumComponent },
   { path: 'news', component: NewsComponent },
   { path: 'buy-with-digital-coin', component: BuyWithDigitalCoinComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}