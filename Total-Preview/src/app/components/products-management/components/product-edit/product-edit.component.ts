import { Component, OnInit } from '@angular/core';
import { Product } from './../../models/product.class';
import { ProductManagementService } from './../../services/product-management.service';
import { Subscription } from 'rxjs';
import { Router , ActivatedRoute , Params } from '@angular/router';
@Component({
	selector: 'app-product-edit',
	templateUrl: './product-edit.component.html',
	styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
	public subscription : Subscription ; 
	public subscriptionParam : Subscription ;
	public product : Product ;
	public status : boolean ;
	constructor(
		public _productService : ProductManagementService, 
		public _routerService : Router , 
		public _activatedRoute : ActivatedRoute 
	) { }

	ngOnInit() {
		this.subscriptionParam = this._activatedRoute.parent.params.subscribe( (param : Params ) => {
			this.subscription = this._productService.getProductById(param.id).subscribe(data => {
				this.product = data ;
			})
		})
	}

	onSubmit(){
		this.product.status = this.status ;
		this.subscription = this._productService.updateProduct(this.product).subscribe(data => {
			this._routerService.navigate(['products']);
		})
	}

}
