import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup , Validators } from '@angular/forms';
import { CustomerList } from './../../models/customer_list.class';
import { CustomerListService } from './../../services/customer-list.service';
import { Router , ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs'
@Component({
	selector: 'app-sign-in',
	templateUrl: './sign-in.component.html',
	styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit  {

	public Customers_List : CustomerList[] ;
	public customer : CustomerList ;
	public customerForm : FormGroup ; 
	public subscription :Subscription ;

	public password : string ; 
	public repassword : string ;
	public country : string ; 
	public error : number = 0;
	constructor(
		public _formBuilder : FormBuilder ,
		public _customerListService : CustomerListService , 
		public _activatedRoute : ActivatedRoute ,
		public _routerService : Router
	) { }

	ngOnInit() {
		this.createFormSignUp();
	}

	public country_list : any[]  = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas"
	,"Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands"
	,"Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica"
	,"Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea"
	,"Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana"
	,"Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India"
	,"Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia"
	,"Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania"
	,"Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia"
	,"New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal"
	,"Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles"
	,"Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan"
	,"Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia"
	,"Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay"
	,"Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];


	createFormSignUp(){
		this.customerForm = this._formBuilder.group({
			username : ['' , [Validators.required , Validators.minLength(6) , Validators.maxLength(20)]] , 
			password : ['' , [Validators.required , Validators.minLength(6) , Validators.maxLength(20)]] , 
			repassword: ['' , [Validators.required , Validators.minLength(6) , Validators.maxLength(20)]] , 
			fullname : ['' , [Validators.required , Validators.pattern('[^0-9!@#$%^&*()-._?<>|=]{6,}')]] , 
			datebirth: ['' , Validators.required],
			country : ['Vietnam'] ,
			email 	 : ['' , [Validators.required , Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]],
			phone 	 : ['' , [Validators.required , Validators.pattern(/^[\+]?[(]?[0-9]{2,3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)]]
		})
	}

	onSubmit(){
		if(this.password == this.repassword){
			this.error = 1 ;
			let username = this.customerForm.controls.username.value ; 
			let password = this.password ; 
			let fullname = this.customerForm.controls.fullname.value ; 
			let datebirth = this.customerForm.controls.datebirth.value; 
			let country = this.customerForm.controls.country.value ;
			let email = this.customerForm.controls.email.value ;
			let phone = this.customerForm.controls.phone.value ;
			this.customer= new CustomerList( username , password , fullname , datebirth , country , email , phone);
			this.subscription = this._customerListService.getAllCustomersList().subscribe(data => {
				for( let i = 0 ; i < data.length ; i++){
					if(username == data[i].username){
						this.error = -2 ; 
						break;
					}
				}
				if(this.error != -2 ){
					this._customerListService.addCustomerList(this.customer).subscribe( new_customer => {
						this._routerService.navigate(['annouce'] , {relativeTo : this._activatedRoute});
					})
				}
			})

		}
		else{
			this.error = -1;
			// this.customerForm.controls.password.reset();
			// this.customerForm.controls.repassword.reset();
		}
	}

	onResetForm(){
		this.customerForm.reset();
	}

}
