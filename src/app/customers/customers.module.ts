import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { FilterTextboxComponent } from './customers-list/filter-textbox.componetnt';
@NgModule({
  declarations: [CustomersListComponent,FilterTextboxComponent],
  imports: [
    CommonModule
  ],
  exports: [CustomersListComponent]
})
export class CustomersModule { }
