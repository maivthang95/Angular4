import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component'
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AddAccountComponent } from './components/add-account/add-account.component';
import { AccountManagementGuard } from './services/guards/account-management.guard';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpMessageComponent } from './components/sign-up-message/sign-up-message.component';
import { SignUpSuccessComponent } from './components/sign-up-success/sign-up-success.component';
import {  Routes } from '@angular/router';


export const appRoutes : Routes = [
	{
		path : '' ,
		redirectTo : '/home',
		pathMatch : 'full'
	},
	{
		path : 'home',
		component :  HomeComponent
	},
	{
		path : 'about' , 
		component : AboutComponent
	},
	{
		path : 'contact' , 
		component : ContactComponent
	},
	{
		path : 'login',
		component :  LoginComponent
	},
	{
		path : 'addAccount' , 
		component : AddAccountComponent,
		canActivate : [AccountManagementGuard]
	},
	{
		path : 'signin' ,
		component : SignInComponent 
	},
	{
		path : 'signin/annouce',
		component : SignUpSuccessComponent
	},
	{
		path : '**', 
		component : PageNotFoundComponent
	}
	
]