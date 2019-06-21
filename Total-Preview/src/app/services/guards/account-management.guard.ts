import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AccountManagementGuard implements CanActivate {
	canActivate(
		next : ActivatedRouteSnapshot ,
		status : RouterStateSnapshot 
	) : Observable<boolean> | Promise<boolean> | boolean {
		if(localStorage.getItem('user')){
			return true ; 
		}
		else{
			return false ;
			
		}
	}
}
