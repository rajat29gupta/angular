import { Component, OnInit, Input } from '@angular/core';
import { NullTemplateVisitor } from '@angular/compiler';
import { findReadVarNames } from '@angular/compiler/src/output/output_ast';
import { from } from 'rxjs';
import { ICustomer } from '../../shared/interfaces';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
  private _customers: ICustomer[] = [];
  @Input() get customers(): ICustomer[] {
    return this._customers;
  }

  set customers(value: ICustomer[]) {
    if (value) {
      this.filteredCustomers = this._customers = value;
      this.calculateOrders();
    }
  }
  filteredCustomers: any[] = [];

  customersOrderTotal: number;
  currencyCode: string = 'USD';

  constructor() { }

  ngOnInit() {

  }
  sort(prop: string) {
    //A sorter service will handle the sorting
  }
  calculateOrders() {
    this.customersOrderTotal = 0;
    this.filteredCustomers.forEach((cust: ICustomer) => {
      this.customersOrderTotal += cust.orderTotal;
    });
  }
}
