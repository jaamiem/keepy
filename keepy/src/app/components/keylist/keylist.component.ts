import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';

export interface keyList {
	keyId: string;
	keyType: string;
	keyLocation: string;
	timeDateReq: string;
	timeDateRet: string;
	allocated: string;
	allocatedBy: string;
}

const ELEMENT_DATA: keyList[] = [
	{ keyId: 'K1', keyType: 'door', keyLocation: 'N533', timeDateReq: '', timeDateRet: '', allocated: '', allocatedBy: ''},
	{ keyId: 'K2', keyType: 'cupboard', keyLocation: 'N432', timeDateReq: '13:00', timeDateRet: '20:00', allocated: 'Jamie', allocatedBy: 'Shona'},
	{ keyId: 'K3', keyType: 'Pedestal', keyLocation: 'N533', timeDateReq: '12:00', timeDateRet: '20:00', allocated: 'Tim', allocatedBy: 'Shona'},
	{ keyId: 'K4', keyType: 'cupboard', keyLocation: 'N533', timeDateReq: '12:00', timeDateRet: '20:00', allocated: 'Tim', allocatedBy: 'Shona'},
	{ keyId: 'K5', keyType: 'Pedestal', keyLocation: 'N531', timeDateReq: '12:00', timeDateRet: '20:00', allocated: 'Tim', allocatedBy: 'Shona'},
	{ keyId: 'K6', keyType: 'door', keyLocation: 'N533', timeDateReq: '12:00', timeDateRet: '20:00', allocated: 'Tim', allocatedBy: 'Shona'},
];


// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

@Component({
	selector: 'app-keylist',
	templateUrl: './keylist.component.html',
	styleUrls: ['./keylist.component.scss'],
	// encapsulation: ViewEncapsulation.None,
})

export class KeylistComponent /*implements OnInit */{

	panelOpenState = false;
	displayedColumns: string[] = ['keyId', 'keyType', 'timeDateReq', 'timeDateRet', 'allocated', 'allocatedBy', 'options'];
	dataSource = ELEMENT_DATA;

	// displayedColumns: string[] = ['keyNo', 'location'];
	//, 'type', 'allocatedTo'
	// displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
	// dataSource = new MatTableDataSource(ELEMENT_DATA);

	// applyFilter(filterValue: string) {
	// 	this.dataSource.filter = filterValue.trim().toLowerCase();
	// }
	//
	// constructor() { }
	//
	// ngOnInit() {
	// }

}
