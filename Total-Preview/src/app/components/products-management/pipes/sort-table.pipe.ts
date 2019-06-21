import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortTablePipe implements PipeTransform {

  transform(products: any[], sortBy : string , sortValue : number ): any {
	  	if(sortBy === 'name'){
			products.sort( (x , y) =>{
				if( x.name > y.name ) return sortValue ;
				else if(x.name < y.name ) return -sortValue ;
				else return 0 ;
			} )
		}
		else if(sortBy === 'price'){
			products.sort( (a ,b ) => {
				if( a.price > b.price ) return sortValue ; 
				else if( a.price < b.price ) return -sortValue ; 
				else return 0;
			})
		}
		else{
			products.sort( (a ,b ) => {
				if( a.status > b.status ) return sortValue ; 
				else if( a.status < b.status ) return -sortValue ; 
				else return 0;
			})
		}
		return products;
  }

}
