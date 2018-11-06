import { Component, OnInit } from '@angular/core';
import { NullTemplateVisitor } from '@angular/compiler';
import { findReadVarNames } from '@angular/compiler/src/output/output_ast';
import { from } from 'rxjs';
import { ICustomer } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  filteredCustomers: ICustomer[] = [];
  
  customerOrderTotal: number;
  currencyCode: string = 'USD';

  constructor() { }

  ngOnInit() {
  }

}
