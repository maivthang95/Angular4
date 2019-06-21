import { Injectable } from '@angular/core';
import { Product } from './../models/product.class';
import { HttpClient ,HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
	providedIn: 'root'
})
export class ProductManagementService {
	public API : string = 'http://localhost:1234/products';
	constructor( public http : HttpClient ) { }

	getAllProducts() : Observable<Product[]>{
		return this.http.get<Product[]>(this.API);
	}

	getProductById( id ) : Observable<Product>{
		return this.http.get<Product>(`${this.API}/${id}`);
	}

	addProduct( product ) : Observable<Product>{
		return this.http.post<Product>(`${this.API}` , {
			name : product.name ,
			price : product.price , 
			status : product.status 
		})
	}

	updateProduct( product ) : Observable<Product>{
		return this.http.put<Product>(`${this.API}/${product.id}` , product);
	}

	deleteProduct( product ) : Observable<Product>{
		return this.http.delete<Product>(`${this.API}/${product.id}`);
	}
}
