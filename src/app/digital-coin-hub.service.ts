import { Injectable } from '@angular/core';

import { DCHlinks } from './links'; //DCHlinks class 
import { MINING_LINKS } from './mock-mining-links'; // the links array


@Injectable()
export class DigitalCoinHubService {

	constructor() {}
	
	getLinks(): DCHlinks[] {
		return MINING_LINKS;
	}
}
