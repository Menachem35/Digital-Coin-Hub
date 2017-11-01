import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainViewComponent } from './main-view.component';
import { DigitalWalletComponent } from './digital-wallet.component';

const routes: Routes = [
   { path: '', redirectTo: '/main', pathMatch: 'full' }, 
   { path: 'main',          component: MainViewComponent },
   { path: 'digitalwallet', component: DigitalWalletComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}