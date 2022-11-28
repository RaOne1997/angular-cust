import { AppSharedModule } from "@app/shared/app-shared.module";
import {NgModule} from '@angular/core';
import { CustomerRoutingModule } from "./customer-routing.module.t";
import { CustomerComponent } from "./customer.component";
import { CreateCustomerModalComponent } from './create-customer-modal/create-customer-modal.component';
import { CustomerUserModalComponent } from './customer-user-modal/customer-user-modal.component';
import { EditCustomeruserModalComponent } from './edit-customeruser-modal/edit-customeruser-modal.component';
import { EditCustomerModalComponent } from './edit-customer-modal/edit-customer-modal.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [CustomerComponent, CreateCustomerModalComponent, CustomerUserModalComponent, EditCustomeruserModalComponent, EditCustomerModalComponent],
    imports: [AppSharedModule, CustomerRoutingModule,FormsModule,ReactiveFormsModule ]
})
export class CustomerModule {}