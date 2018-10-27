import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { MatTabsModule, MatFormFieldModule, MatSortModule } from '@angular/material';
// import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
// import {DemoMaterialModule} from './material-module';
// import {DragDropModule} from '@angular/cdk/drag-drop';
// import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';

import { AppComponent } from './app.component';
import { ShellComponent } from './components/shell/shell.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { KeylistComponent } from './components/keylist/keylist.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SignupComponent } from './components/signup/signup.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { TablePanelComponent } from './components/table-panel/table-panel.component';

@NgModule({
	declarations: [
		AppComponent,
		ShellComponent,
		TopbarComponent,
		KeylistComponent,
		LoginComponent,
		PageNotFoundComponent,
		SignupComponent,
		AccountsComponent,
		TablePanelComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		MatTabsModule,
		MatTableModule,
		MatSortModule,
		BrowserAnimationsModule,
		FormsModule,
		MatNativeDateModule,
		ReactiveFormsModule,
		CdkTableModule,
		CdkTreeModule,
		// DragDropModule,
		MatAutocompleteModule,
		MatBadgeModule,
		MatBottomSheetModule,
		MatButtonModule,
		MatButtonToggleModule,
		MatCardModule,
		MatCheckboxModule,
		MatChipsModule,
		MatStepperModule,
		MatDatepickerModule,
		MatDialogModule,
		MatDividerModule,
		MatExpansionModule,
		MatGridListModule,
		MatIconModule,
		MatInputModule,
		MatListModule,
		MatMenuModule,
		MatNativeDateModule,
		MatPaginatorModule,
		MatProgressBarModule,
		MatProgressSpinnerModule,
		MatRadioModule,
		MatRippleModule,
		MatSelectModule,
		MatSidenavModule,
		MatSliderModule,
		MatSlideToggleModule,
		MatSnackBarModule,
		MatSortModule,
		MatTableModule,
		MatTabsModule,
		MatToolbarModule,
		MatTooltipModule,
		MatTreeModule,
		// ScrollingModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
