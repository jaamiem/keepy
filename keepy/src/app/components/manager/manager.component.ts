import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-manager',
	templateUrl: './manager.component.html',
	styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {

	viewRooms: boolean = false;

	constructor() { }

	ngOnInit() {
	}

	invertView(){
		// console.log('viewRooms: ' + this.viewRooms);
		this.viewRooms = !this.viewRooms;
	}

}
