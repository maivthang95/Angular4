export class CustomerList{

	public id : number ;
	public username : string ;
	public password : string ; 
	public fullname : string ; 
	public datebirth: Date ; 
	public country : string = 'Vietnam';
	public email : string ;
	public phone : string ; 

	constructor( username? : string , password? : string , fullname? : string ,  datebirth? : Date , country? : string , email? : string , phone? : string ){
		this.username = username ; 
		this.password = password ; 
		this.fullname = fullname ; 
		this.datebirth = datebirth ; 
		this.country = country ; 
		this.email = email ; 
		this.phone = phone ; 
	}
}