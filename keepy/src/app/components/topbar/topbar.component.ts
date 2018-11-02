import { Component } from '@angular/core';
// import { Router, NavigationEnd } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LoginComponent } from '../login/login.component';



@Component({
	selector: 'app-topbar',
	templateUrl: './topbar.component.html',
	styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {
	constructor(public dialog: MatDialog) { }

	openDialog(): void {
		const dialogRef = this.dialog.open(LoginComponent, {
			width: '30%'
		});

		dialogRef.afterClosed().subscribe(result => {
			console.log('Modal Closed..');
			// Add code to capture login details
		});
	}
}
