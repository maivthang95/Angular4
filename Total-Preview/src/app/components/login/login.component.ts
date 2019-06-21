import { Component, OnInit} from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { ListAccountService } from './../../services/list-account.service';
import { Account } from './../../models/account.class'
import { Subscription } from 'rxjs'
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	public ListAccount : Account[] ; 
	public error : number = 0 ;
	public subcription : Subscription ;
	public isInitialize : boolean = false ;
	constructor(
		public _routerService : Router ,
		public _listService : ListAccountService,
		public _activatedRoute : ActivatedRoute
	) { }

	ngOnInit() {
		this._listService.getListAccount().subscribe(data => {
			this.ListAccount = data ;
			console.log(this.ListAccount);
		})
		this.checkLogin();
	}

	checkLogin(){
		if(localStorage.getItem('user')){
			location.reload();
			this._routerService.navigate(['products']);
		}
	}
	// public ListAccount : object[] = [
	// 	{
	// 		id : 'admin' , 
	// 		password : 'admin' , 
	// 	},
	// 	{
	// 		id : 'admin' , 
	// 		password : 123456
	// 	}
	// ]

	onLogin(username : string , password : string ){
		let user = {
			id : username , 
			password : password 
		}
		for(let i =0 ;  i < this.ListAccount.length ;  i++){
			if(this.ListAccount[i]['username']== username && this.ListAccount[i]['password'] == password){
				localStorage.setItem('user' , JSON.stringify(user));
				this._routerService.navigate(['products']);
			}
		}
		if(!localStorage.getItem('user')){
			this.error = -1;
		}
		// if(username == 'admin' && password == 'admin'){
		// 	localStorage.setItem('user' , JSON.stringify(user));
		// 	this._routerService.navigate(['products']);
		// }else
		// 	this.error = -1 ;
	}

}
