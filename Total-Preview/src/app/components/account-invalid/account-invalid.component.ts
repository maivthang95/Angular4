import { Component, OnInit , Input} from '@angular/core';

@Component({
	selector: 'app-account-invalid',
	templateUrl: './account-invalid.component.html',
	styleUrls: ['./account-invalid.component.css']
})
export class AccountInvalidComponent implements OnInit {
	@Input('control') control  ;
	@Input('name-control') nameControl ; 

	constructor() { }

	ngOnInit() {
	}

	get message(){
		for(let err in this.control.errors){
			if(this.control.dirty){
				return this.getErrorMessage(err , this.control.errors[err]);
			}
		}
	}

	get MessageValid(){
		if(this.control.dirty){
			if(this.message == null){
				return true;
			}
		}
	}
	getErrorMessage( err , value ){
		let message = {
			"required" : `${this.nameControl} is required` , 
			"maxlength" : `${this.nameControl} is not more than ${value.requiredLength} characters`
		}
		return message[err];
	}

}
