import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Key } from '../key';
import { KEYS } from '../mock-keys';

@Injectable({
	providedIn: 'root'
})
export class DataService {

	KEYS = KEYS;

	constructor() { }

	getKeys(): Observable<Key[]> {
		console.log('Keys Collected');
		return of(KEYS);
	}

}
