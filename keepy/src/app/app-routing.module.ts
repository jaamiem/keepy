import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from './components/shell/shell.component';
import { KeylistComponent } from './components/keylist/keylist.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ManagerComponent } from './components/manager/manager.component';

const routes: Routes = [
	{
		path:'', component: ShellComponent,
		children: [
			{ path: 'keys', component: ManagerComponent },
			{ path: '', redirectTo: 'keys', pathMatch: 'full' }
		]
	},
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
