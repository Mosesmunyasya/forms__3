import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Required for Angular Material
import { ReactiveFormsModule } from '@angular/forms';

// Import Angular Material modules
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

// Import your component
import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';  // Make sure this path is correct
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CardsSiteComponent } from './cards-site/cards-site.component';
import { TableSiteComponent } from './table-site/table-site.component';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    UserFormComponent, // Ensure this component is correctly referenced
    AppComponent, 
    CardsSiteComponent, 
    TableSiteComponent, 
    LoginPageComponent, 
    HomeComponent, PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,  // Required for Material animations
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatPaginatorModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]  // Set the correct bootstrap component
})
export class AppModule { }
