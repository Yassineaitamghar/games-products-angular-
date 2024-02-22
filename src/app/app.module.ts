import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MatTableModule, MatInputModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { AlertModule } from 'ngx-bootstrap/alert';
import { AppRoutingModule } from './app-routing.module';

import { ProductService } from './product.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './product/products.component';
import { ErrorInterceptorProvider } from './http.interceptor';

@NgModule({
  declarations: [AppComponent, HomeComponent, HeaderComponent, FooterComponent, ProductComponent, ProductsComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    //MatTableModule,
    //MatInputModule,
    AlertModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [ProductService, ErrorInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
