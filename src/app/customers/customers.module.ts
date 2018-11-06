import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { FilterTextboxComponent } from './customers-list/filter-textbox.componetnt';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [CustomersListComponent,FilterTextboxComponent],
  imports: [
    CommonModule,SharedModule
  ],
  exports: [CustomersListComponent]
})
export class CustomersModule { }
