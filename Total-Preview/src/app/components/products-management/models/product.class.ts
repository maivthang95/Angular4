export class Product {

	public id : number ; 
	public name : string ; 
	public price : number ; 
	public status : boolean = false ; 

	constructor( name ? : string , price ? : number ,  status ? : boolean ){
		this.name = name ; 
		this.price = price ; 
		this.status = status ;
	}
}