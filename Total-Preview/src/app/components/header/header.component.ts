import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router'
@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	public authorize : number = 0;
	constructor(
		public _routerService : Router 
	) { }

	ngOnInit() {
		if(localStorage.getItem('user')){
			this.authorize = 1 ;
		}
	}

	onLogOut(){
		if(localStorage.getItem('user')){
			localStorage.removeItem('user');
			this._routerService.navigate(['home']);
		}
	}

}
