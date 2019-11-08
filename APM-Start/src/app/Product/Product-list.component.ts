import { Component, OnInit } from '@angular/core';
import {  IProduct } from './product';
import { productService } from './product.service';

@Component({  
  templateUrl: './product-list.component.html',
  styleUrls: ['./product.list.component.css']
  
})
export class productListComponent  implements OnInit{
pageTile: string = 'Product List';
imageWidth : number = 50;
imageMargin : number = 2;
showImage : boolean = false;
filteredList :IProduct[];
filterlist : string ;
errormessage : string;
 get listFilter() : string {
  return this.filterlist;
}
set listFilter(v : string) {
  this.filterlist = v;
  this.filteredList = this.filterlist? this.performFilter(this.filterlist):this.products;
}

 constructor (private productservice : productService){    
  }

  products: IProduct[] = [];
  toggleImage():void {
    this.showImage = !this.showImage;

  }
  ngOnInit():void{
   this.productservice.getProducts().subscribe({
    next :products =>  {this.products = products,
    this.filteredList = this.products;},
    error : err => this.errormessage = err
  });
  
  }
  performFilter(filterValue: string){
    filterValue = filterValue.toLocaleLowerCase();
    return this.products.filter(a=>a.productName.toLocaleLowerCase().indexOf(filterValue) !== -1);

  }
  onRatingClicked (message:string) : void{
    this.pageTile = 'Product List :' + message;
  }
}
