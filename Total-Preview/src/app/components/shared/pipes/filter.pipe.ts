import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'filter'
})
export class FilterPipe implements PipeTransform {

	transform(products: any, inputValue?: any): any {
		if(inputValue == null ){
			return products ;
		}
		else{
			products = products.filter( x => {
				return x.name.toLowerCase().indexOf(inputValue.toLowerCase()) > -1 ;
			})

			
			return products;
		}
	}

}
