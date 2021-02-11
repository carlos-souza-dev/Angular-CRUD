import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-smartphone-created',
  templateUrl: './smartphone-created.component.html',
  styleUrls: ['./smartphone-created.component.css']
})
export class SmartphoneCreatedComponent implements OnInit {

  smartphone: Product = {
    name: 'Smartphone',
    price: 3333.99
  }

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  createSmartphone():void {
    this.productService.createSmartphone(this.smartphone).subscribe(() => {
      this.productService.showMenssage('Smartphone salvo!')
      this.router.navigate(['smartphones'])
    })
  }

  cancel(): void {
    this.router.navigate(['smartphones'])
  }
}