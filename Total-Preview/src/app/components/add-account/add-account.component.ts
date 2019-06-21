import { Component, OnInit } from '@angular/core';
import { ListAccountService } from './../../services/list-account.service';
import { Account } from './../../models/account.class';
import { FormBuilder , FormGroup , Validators } from '@angular/forms';

@Component({
	selector: 'app-add-account',
	templateUrl: './add-account.component.html',
	styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

	public account : object; 
	public Accounts : Account[];
	public adminAccount : FormGroup ; 
	public error : number = 0 ;
	
	public Username : string ; 
	public Password : string ; 
	public Repassword : string ;
	constructor(
		public _formBuilder : FormBuilder ,
		public _accoutService :ListAccountService
	) { }

	ngOnInit() {
		this.createForm();
	}

	createForm(){
		this.error = 0;
		this._accoutService.getListAccount().subscribe( list_data => {
				this.Accounts = list_data ; 
		})
		this.adminAccount = this._formBuilder.group({
			username : ['' , [Validators.required ,Validators.maxLength(20) ]] , 
			password : ['' , [Validators.required , Validators.maxLength(20)]], 
			repassword : ['' , [Validators.required , Validators.maxLength(20)]]
		})
	}

	onResetForm(){
		this.adminAccount.reset();
	}

	onSubmit(){
		if(this.Password != this.Repassword ){
			this.error = -1 ;
		}else{
			this.account = new Account(this.Username , this.Password );
			for (var i = 0; i < this.Accounts.length; i++) {
				if(this.Accounts[i]['username'] == this.Username){
					this.error = -2 ;
					break;
				}
			}	
			if(this.error != -1 && this.error != -2 ){
				this._accoutService.addAccount(this.account).subscribe(data => {
					console.log(data);
				})
				this.error == 1 ;
			}
		}
		this.onResetForm();
	}
}
