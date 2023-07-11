import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './component/user-home/user-home.component';
import { UserLoginComponent } from './component/user-login/user-login.component';
import { authGuard } from './service/auth.guard';
import { SearchBookingComponent } from './component/search-booking/search-booking.component';
import { UserLogoutComponent } from './component/user-logout/user-logout.component';

const routes: Routes = [
  { path: '', component: UserLoginComponent, pathMatch: 'full' },
  { path: 'logout', component: UserLogoutComponent},
  { path: 'login', component: UserLoginComponent},
  { path: 'home', component: UserHomeComponent, canActivate: [authGuard]},
  { path: 'search', component: SearchBookingComponent, canActivate: [authGuard]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
