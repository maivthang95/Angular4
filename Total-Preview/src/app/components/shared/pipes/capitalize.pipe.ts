import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

	transform(value: any, args?: any): any {
		let arrStr = value.trim().toLowerCase().replace(/\s+/g , ' ').split(' ') ;
		let txt = '';
		arrStr.forEach( (item , index ) => {
			txt += item.charAt(0).toUpperCase() + item.substr(1) + ((index == arrStr.length - 1) ? '' : ' ') ;
		})
		return txt ;
	}

}
