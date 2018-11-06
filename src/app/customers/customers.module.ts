import { NgModule } from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { CommonModule, FormStyle } from '@angular/common';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { FilterTextboxComponent } from './customers-list/filter-textbox.componetnt';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [CustomersListComponent,FilterTextboxComponent],
  imports: [
    CommonModule,SharedModule,FormsModule
  ],
  exports: [CustomersListComponent]
})
export class CustomersModule { }
