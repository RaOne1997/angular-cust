import {NgModule} from '@angular/core';
import {AppSharedModule} from '@app/shared/app-shared.module';
import {PhoneBookRoutingModule} from './phonebook-routing.module';
import {PhonebookComponent} from './phonebook.component';
import { CreatePersonModalComponent } from './create-person-modal/create-person-modal.component';
import { EditPersonModalComponent } from './edit-person-modal/edit-person-modal.component';

@NgModule({
    declarations: [PhonebookComponent, CreatePersonModalComponent, EditPersonModalComponent],
    imports: [AppSharedModule, PhoneBookRoutingModule],
   
})
export class PhoneBookModule {}