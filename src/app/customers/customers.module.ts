import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersListComponent } from './customers-list/customers-list.component';

@NgModule({
  declarations: [CustomersListComponent],
  imports: [
    CommonModule
  ],
  exports: [CustomersListComponent]
})
export class CustomersModule { }
