import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../../template/header/header.service';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-smartphone-created',
  templateUrl: './smartphone-created.component.html',
  styleUrls: ['./smartphone-created.component.css']
})
export class SmartphoneCreatedComponent implements OnInit {

  smartphone: Product = {
    name: '',
    price: null
  }

  constructor(
    private productService: ProductService, 
    private router: Router,
    private headerService: HeaderService
  ) { 

    this.headerService.headerData = {
      title: 'Smartphone | Create',
      icon: 'add_box',
      routeUrl: '/smartphones',
      statusColor: 'create',
      page: 'smartphone'
    }

  }

  ngOnInit(): void {
  }

  createSmartphone(url):void {
    this.productService.createItem(url, this.smartphone).subscribe(() => {
      this.productService.showMenssage('Smartphone salvo!')
      this.router.navigate(['smartphones'])
    })
  }

  cancel(): void {
    this.router.navigate(['smartphones'])
  }
}
