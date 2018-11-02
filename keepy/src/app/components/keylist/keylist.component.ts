import { Component, OnInit } from '@angular/core';

import { Key } from '../../key';
import { DataService } from '../../services/data.service';

@Component({
	selector: 'app-keylist',
	templateUrl: './keylist.component.html',
	styleUrls: ['./keylist.component.scss'],
})
export class KeylistComponent implements OnInit {
	keyList: Key[];

	panelOpenState = false;
	displayedColumns: string[] = ['keyId', 'keyType', 'timeDateReq', 'timeDateRet', 'allocated', 'allocatedBy', 'options'];

	constructor(private dataService: DataService) { }
	ngOnInit() { this.getKeys(); }

	getKeys():void {
		this.dataService.getKeys()
		.subscribe(keyList => this.keyList = keyList);
	}
}
