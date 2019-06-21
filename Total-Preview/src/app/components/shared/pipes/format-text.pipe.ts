import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'formatText'
})
export class FormatTextPipe implements PipeTransform {

	transform(value: any, start: number, end: number): any {
		var result = value.slice(start , end ) + "..." ; 
		return result ;
	}

}
