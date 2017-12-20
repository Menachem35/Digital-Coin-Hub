import { Component, OnInit } from '@angular/core';
import { DataDisplayFromAPI } from '../data-display-from-api.service';

@Component({
	selector: 'main-view',
	templateUrl: './main-view.component.html',
	styleUrls: ['./main-view.component.css']
})

export class MainViewComponent implements OnInit {
	
	objectKeys = Object.keys;
    cryptos: any;
  
	constructor (private coinsRateCryptoCompare: DataDisplayFromAPI) {}
	
	title = 'Digital Coin Hub';
	
	ngOnInit () {
		this.coinsRateCryptoCompare.getPrices()
			.subscribe(res => {
				this.cryptos = res;
			});
	}
	
}
	