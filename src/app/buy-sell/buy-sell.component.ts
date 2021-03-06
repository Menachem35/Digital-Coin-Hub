import { Component, OnInit } from '@angular/core';

import { DCHlinks } from '../links'; //DCHlinks class 
import { DigitalCoinHubService } from '../digital-coin-hub.service';

@Component ({
	selector: 'buy-sell',
	templateUrl: './buy-sell.component.html'
})

export class BuySellBitcoinComponent {
	title = 'Buy / Sell bitcoins - bitcoin exchange';
	
	constructor(private appLinksService: DigitalCoinHubService) { }
	
	links: DCHlinks[]; // create a new array in type of DCHlinks to get the data
	
	
	getLinks(): void {
	  this.links = this.appLinksService.getLinksByCategory('buy-sell'); // the array above , gets the array with the data 
		  
	}
	
	ngOnInit() {
		this.getLinks();
	}
}
