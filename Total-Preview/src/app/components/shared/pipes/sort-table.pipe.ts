import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'sortTable'
})
export class SortTablePipe implements PipeTransform {

	transform(products: any, sortBy : string , sortValue : number ): any {
		return null;
	}

}
