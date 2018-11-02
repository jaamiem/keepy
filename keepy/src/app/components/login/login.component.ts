import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

//
// export interface loginData {
// 	username: string;
// 	password: string;
// }

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	hide = true;

	constructor(public dialogRef: MatDialogRef<LoginComponent>) { }

	ngOnInit() {
	}

}
