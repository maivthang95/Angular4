import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { ProductsComponent } from './components/products/products.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductResponseComponent } from './components/product-response/product-response.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { RouterModule } from '@angular/router';
import { productsRoutes } from './products-management.routes';
import { HttpClientModule } from '@angular/common/http';
import { ProductManagementService } from './services/product-management.service';
import { ProductGuard } from './services/guards/product.guard';
import { SharedModule } from './../shared/shared.module';
import { SortTablePipe } from './pipes/sort-table.pipe';
@NgModule({
	declarations: [ProductsComponent, 
	ProductsListComponent,
	 ProductDetailComponent, 
	 ProductEditComponent,
	ProductResponseComponent,
	   ProductAddComponent,
	   SortTablePipe],
	imports: [
		CommonModule,
		FormsModule ,
		HttpClientModule,
		SharedModule,
		RouterModule.forChild(productsRoutes)
	],
	providers: [ ProductManagementService ,ProductGuard ],
	exports : [FormsModule ,CommonModule]
})
export class ProductManagementModule { }
