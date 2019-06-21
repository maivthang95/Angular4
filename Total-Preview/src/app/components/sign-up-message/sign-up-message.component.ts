import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-sign-up-message',
	templateUrl: './sign-up-message.component.html',
	styleUrls: ['./sign-up-message.component.css']
})
export class SignUpMessageComponent implements OnInit {
	@Input('control') control ; 
	@Input('name-control') nameControl; // name-control ben sign-in phải để dưới dạng chuỗi ('')
	constructor() { }

	ngOnInit() {
	}

	get Message(){
		for(let err in this.control.errors){
			if(this.control.dirty){
				return this.getMessageError(err , this.control.errors[err]);
			}
		}
	}


	get MessageValid(){
		if(this.control.dirty){
			if(this.Message == null ){
				return true ;
			}
		}
	}

	getMessageError(err , value ){
		let message = {
			'required' : `${this.nameControl} is required ` ,
			'minlength': `${this.nameControl} is at least ${value.requiredLength} character ` , 
			'maxlength': `${this.nameControl} is at least ${value.requiredLength} character ` , 
			'pattern'  : `${this.nameControl} is invalid`
		}
		return message[err];
	}
}
