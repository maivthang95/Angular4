import { Injectable } from '@angular/core';
import { CustomerList } from './../models/customer_list.class';
import { HttpClient ,HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs'
@Injectable({
	providedIn: 'root'
})
export class CustomerListService {
	public customerLists : string = 'http://localhost:2345/customers_list';
	constructor(
		public http : HttpClient
	) { }


	getAllCustomersList() : Observable<CustomerList[]>{
		return this.http.get<CustomerList[]>(this.customerLists);
	}


	addCustomerList( customer ) : Observable<CustomerList>{
		return this.http.post<CustomerList>(this.customerLists , {
			username : customer.username , 
			password : customer.password , 
			fullname : customer.fullname , 
			datebirth :customer.datebirth,
			country : customer.country ,
			email : customer.email ,
			phone : customer.phone
		});
	}

}
