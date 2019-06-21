import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Account } from './../models/account.class';
import { Observable } from 'rxjs'
@Injectable({
	providedIn: 'root'
})
export class ListAccountService {

	public listAccount : string = 'http://5cefae415660c40014948fcb.mockapi.io/api/accounts'
	constructor(
		public http : HttpClient
	) { }

	getListAccount() : Observable<Account[]>{
		return this.http.get<Account[]>(this.listAccount);
	}

	addAccount( account ) : Observable<Account>{
		return this.http.post<Account>( `${this.listAccount}` , account);
	}
}
