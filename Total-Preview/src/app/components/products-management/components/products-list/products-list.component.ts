import { Component, OnInit } from '@angular/core';
import { Product } from './../../models/product.class';
import { ProductManagementService } from './../../services/product-management.service';
import { Subscription } from 'rxjs';
import { Router , ActivatedRoute , Params } from '@angular/router'
@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit  {
	public subcription : Subscription ;
	public subcriptionParams : Subscription ;
	public products : Product[];
	public authorize : number = 0 ;
	public Progress : number = 0 ;
	constructor(
		public _productService : ProductManagementService ,
		public _routerService : Router , 
		public _activatedRoute : ActivatedRoute 
	) { }

	ngOnInit() {
		if(localStorage.getItem('user')){
			this.authorize = 1 ;
		}
		this.subcription = this._productService.getAllProducts().subscribe( ( Products : Product[]) => {
			this.subcriptionParams = this._activatedRoute.params.subscribe( (param : Params ) => {
				let status = param.status ? ( param.status == 'true' ? 1 : -1) : 0 ;
				this.Progress = status ; 
				this.products = Products.filter( data => {
					if( status == 1 )
						return data.status == true ;
					else if( status == -1 )
						return data.status == false ;
					else return data;
				})
			})
		})
	}


	onAdd(){
		this._routerService.navigate(['add'] , {relativeTo : this._activatedRoute});
	}

	onDelete( product , event ){
		event.stopImmediatePropagation();
		this._productService.deleteProduct(product).subscribe(data => {
			this.updateProductAfterDelete(product);
		})
	}

	updateProductAfterDelete( data ){
		for (var i = 0; i < this.products.length; i++) {
			if(this.products[i].id == data.id ){
				this.products.splice(i , 1); 
			} 
		}
	}

	public sortString : string = 'name' ; 
	public sortValue : number = 1;

	onSort( value :  string ){
		this.sortString = value ; 
		this.sortValue = -this.sortValue ;
	}

	public inputValue : any ; 

}
