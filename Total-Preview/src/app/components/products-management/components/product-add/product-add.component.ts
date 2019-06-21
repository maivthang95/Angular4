import { Component, OnInit } from '@angular/core';
import { Product } from './../../models/product.class';
import { ProductManagementService } from './../../services/product-management.service';
import { Subscription } from 'rxjs';
import { Router , ActivatedRoute , Params } from '@angular/router';
@Component({
	selector: 'app-product-add',
	templateUrl: './product-add.component.html',
	styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

	public product : Product ; 
	public subscription : Subscription ;
	constructor(
		public _productService : ProductManagementService, 
		public _routerService : Router , 
		public _activatedRoute : ActivatedRoute 
	) { }

	ngOnInit() {
		this.product = new Product();
	}

	onSubmit(){
		this.subscription = this._productService.addProduct(this.product).subscribe(data => {
			this._routerService.navigate(['products']);
		})
	}
}
