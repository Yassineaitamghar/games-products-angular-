import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ProductService } from '../product.service';
import { Product } from '../models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  statusCode = 0;
  errmsg = '';
  filename = '';
  id = '';
  selectedFile: File;

  //Create form
  productForm = new UntypedFormGroup({
    id: new UntypedFormControl(''),
    productName: new UntypedFormControl('', Validators.compose([Validators.required, Validators.minLength(3)])),
    price: new UntypedFormControl(
      '0',
      Validators.compose([Validators.required, Validators.min(0), Validators.max(2147483647)]),
    ),
    image: new UntypedFormControl(this.service.baseUrl + 'images/default.png'),
  });

  constructor(private service: ProductService, private router: Router, private route: ActivatedRoute) {}
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    //console.log(this.id);
    if (this.id) {
      this.service.getProductById(Number(this.id)).subscribe(
        (product: Product) => {
          this.productForm.setValue({
            id: product.id,
            productName: product.productName,
            price: product.price,
            image: product.image,
          });
        },
        (error: any) => {
          this.statusCode = error.statusCode; // eslint-disable-line
          this.errmsg = error.message; // eslint-disable-line
        },
      );
    }
  }

  //Handle create and update product
  onClickSubmit() {
    if (this.productForm.invalid) {
      return; //Validation failed, exit from method.
    }
    //Form is valid, now perform create or update
    const product = this.productForm.value as Product;
    if (!product.id) {
      //Create product
      product.id = 0;
      this.service.createProduct(product).subscribe(
        (successCode: number) => {
          this.statusCode = successCode;
          void this.router.navigate(['products']);
        },
        (error: any) => {
          this.statusCode = error.statusCode; // eslint-disable-line
          this.errmsg = error.message; // eslint-disable-line
        },
      );
    } else {
      //Update product
      this.service.updateProduct(product).subscribe(
        (successCode: number) => {
          this.statusCode = successCode;
          void this.router.navigate(['products']);
        },
        (error: any) => {
          this.statusCode = error.statusCode; // eslint-disable-line
          this.errmsg = error.message; // eslint-disable-line
        },
      );
    }
  }

  //Image upload
  @ViewChild('fileInput') fileInput: any;
  @ViewChild('productImage') productImage: any;

  filechanged(event: any): void {
    this.selectedFile = event.target.files[0]; // eslint-disable-line
    this.filename = this.selectedFile.name;
  }

  upload(): void {
    if (this.selectedFile) {
      this.service.upload(this.selectedFile).subscribe(
        (res: any) => {
          this.productForm.patchValue({ image: res.message }); // eslint-disable-line
          this.productImage.src = res.message; // eslint-disable-line
        },
        (error: any) => {
          this.statusCode = error.statusCode; // eslint-disable-line
          this.errmsg = error.message; // eslint-disable-line
        },
      );
    }
  }
}
