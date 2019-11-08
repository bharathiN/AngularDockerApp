import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { productListComponent } from './Product/Product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { starComponent } from './shared/star.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductDetailComponent } from './Product/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import  {RouterModule} from  '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    productListComponent,
    ConvertToSpacesPipe,
    starComponent,
    ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'products', component: productListComponent },
      { path: 'products/:id', component: ProductDetailComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
