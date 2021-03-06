import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../../template/header/header.service';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-notebook-created',
  templateUrl: './notebook-created.component.html',
  styleUrls: ['./notebook-created.component.css']
})
export class NotebookCreatedComponent implements OnInit {

  notebook: Product = {} as Product;

  constructor(
    private productService: ProductService, 
    private router: Router,
    private headerService: HeaderService
  ) { 

    this.headerService.headerData = {
      title: 'Notebook | Create',
      icon: 'add_box',
      routeUrl: '/notebooks',
      statusColor: 'create',
      page: 'notebook'
    }

  }

  ngOnInit(): void {
  }

  createNotebook(url): void {
    this.productService.createItem(url, this.notebook).subscribe(() => {
      // this.productService.showMenssage('Notebook salvo!')
      this.router.navigate(['/notebooks'])
    }, HttpErrorResponse => {
      console.log("Algo deu errado")
    })
  }

  cancel(): void {
    this.router.navigate(['/notebooks'])
  }
}
