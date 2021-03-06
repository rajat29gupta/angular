import { NgModule } from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { CommonModule, FormStyle } from '@angular/common';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { FilterTextboxComponent } from './customers-list/filter-textbox.componetnt';
import { SharedModule } from '../shared/shared.module';
import { CustomersRoutingModule } from './customer-routing.module';
import { CustomersComponent }  from './customers.component';
@NgModule({
  declarations: [CustomersListComponent,FilterTextboxComponent,CustomersComponent],
  imports: [
    CommonModule,SharedModule,FormsModule,CustomersRoutingModule
  ],
  exports: [CustomersComponent]
})
export class CustomersModule { }
