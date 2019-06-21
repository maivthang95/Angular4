import { ProductsComponent } from './components/products/products.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductResponseComponent } from './components/product-response/product-response.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { Routes } from '@angular/router';
import { ProductGuard } from './services/guards/product.guard';

export const productsRoutes : Routes = [
	{
		path : 'products',
		component : ProductsListComponent
	},
	{
		path : 'products/add' , 
		component : ProductAddComponent,
		canActivate : [ProductGuard]
	},
	{
		path : 'product/:id',
		component : ProductsComponent,
		canActivate : [ProductGuard] ,
		children : [
			{
				path : '',
				component: ProductDetailComponent
			},
			{
				path : 'edit', 
				component: ProductEditComponent
			},
			{
				path : 'edit/response',
				component : ProductResponseComponent
			}
		]
	}

]