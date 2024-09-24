import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsSiteComponent } from './cards-site/cards-site.component';
import { TableSiteComponent } from './table-site/table-site.component';
 import { HomeComponent } from './home/home.component';  // Home or dashboard component
import { AuthGuard } from './auth.guard';  
import { LoginPageComponent} from './login-page/login-page.component'
import { UserFormComponent } from './user-form/user-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



const routes: Routes = [
  { path: 'login', component: LoginPageComponent },  
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] }, 
  { path: 'user-form', component: UserFormComponent, canActivate: [AuthGuard] },  
  {path:'cards-site',component:CardsSiteComponent},
  {path:'table-site',component:TableSiteComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' },  
  // { path: '**', redirectTo: 'login' }, 
  { path: '**',component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
