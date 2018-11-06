import { Component, OnInit } from '@angular/core';
import { NullTemplateVisitor } from '@angular/compiler';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  filteredCustomers: any[]=[];
  customerOrderTotal: number;
  currencyCode: string='USD';
  
  constructor() { }

  ngOnInit() {
  }

}
