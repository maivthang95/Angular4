import { Component, OnInit } from '@angular/core';
import { Product } from './../../models/product.class';
import { ProductManagementService } from './../../services/product-management.service';
import { Subscription } from 'rxjs';
import { Router , ActivatedRoute , Params } from '@angular/router';
@Component({
	selector: 'app-product-detail',
	templateUrl: './product-detail.component.html',
	styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

	public subscription : Subscription ; 
	public subscriptionParam : Subscription ;
	public product : Product ;
	constructor(
		public _productService : ProductManagementService, 
		public _routerService : Router , 
		public _activatedRoute : ActivatedRoute 
	) { }

	ngOnInit() {
		this.subscriptionParam = this._activatedRoute.params.subscribe( (param : Params ) => {
			this.subscription = this._productService.getProductById(param.id).subscribe( data => {
				this.product = data ; 
			})
		})
	}
	onDelete(){
		this.subscription = this._productService.deleteProduct(this.product).subscribe( data => {
			this._routerService.navigate(['products']);
		})
	}
}
