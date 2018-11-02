import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-material.module';

import { AppComponent } from './app.component';
import { ShellComponent } from './components/shell/shell.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { KeylistComponent } from './components/keylist/keylist.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { ManagerComponent } from './components/manager/manager.component';
import { RoomlistComponent } from './components/roomlist/roomlist.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
	declarations: [
		AppComponent,
		ShellComponent,
		TopbarComponent,
		KeylistComponent,
		PageNotFoundComponent,
		AccountsComponent,
		ManagerComponent,
		RoomlistComponent,
		LoginComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		AppMaterialModule,
	],
	providers: [],
	bootstrap: [AppComponent],
	entryComponents: [LoginComponent]
})
export class AppModule { }
