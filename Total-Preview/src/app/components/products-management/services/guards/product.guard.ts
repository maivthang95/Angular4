import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { Router} from '@angular/router';
@Injectable({
	providedIn: 'root'
})
export class ProductGuard implements CanActivate {
	constructor( public _routerService : Router ) {}
	canActivate(
		next : ActivatedRouteSnapshot , 
		status :  RouterStateSnapshot , 
	) : Observable<boolean> | Promise<boolean> | boolean {
		if(localStorage.getItem('user')){
			return true ; 
		}
		else{
			this._routerService.navigate(['login']);
			return false ;
		}
	}
}
