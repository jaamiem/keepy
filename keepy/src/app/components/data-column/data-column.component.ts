import { Component, Input, OnInit } from '@angular/core';
// import { AbstractControl } from '@angular/forms';

@Component({
	selector: 'app-data-column',
	template: `
		<ng-container matColumnDef={{ dbColumnName }}>
			<th mat-header-cell *matHeaderCellDef >{{ faceColumnName }} </th>
			<td mat-cell *matCellDef="let element"> {{element.dbColumnName}} </td>
		</ng-container>
	`,
	styleUrls: ['./data-column.component.scss']
})
export class DataColumnComponent implements OnInit {

	@Input() dbColumnName: string;
	@Input() faceColumnName: string;

	constructor() { }
	ngOnInit(){
		console.log(this.dbColumnName, this.faceColumnName);
	}

}
