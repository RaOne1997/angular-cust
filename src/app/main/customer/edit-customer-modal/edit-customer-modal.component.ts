import { Component, ElementRef, EventEmitter, Injector, OnInit, Output, ViewChild } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';
import { CustomerServiceServiceProxy, EditCustomerInput } from '@shared/service-proxies/service-proxies';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-edit-customer-modal',
  templateUrl: './edit-customer-modal.component.html',
  styleUrls: ['./edit-customer-modal.component.css']
})
export class EditCustomerModalComponent extends AppComponentBase {

  @Output() modalSave: EventEmitter<any> = new EventEmitter<any>();
  
  @ViewChild('modal') modal: ModalDirective;
  @ViewChild('nameInput') nameInput: ElementRef;
  
  customer: EditCustomerInput  = new EditCustomerInput();
    regdate:Date = new Date();
  active: boolean = false;
  saving: boolean = false;
  
  constructor( injector: Injector, private _customerService: CustomerServiceServiceProxy) 
  {
    super(injector);
  }
  
  ngOnInit(): void {
    
  }

  show(customerId): void {
    console.log("HELLLOO");
    this.active = true;
    this._customerService.getCustomerForEdit(customerId).subscribe(
      (result) => {
        console.log(result);
      this.customer = result;
      this.modal.show();
    }); 

  }

  onShown(): void {
    // this.nameInput.nativeElement.focus();
  }

  
  save(): void {
    this.saving = true;
    this._customerService.editCustomer(this.customer)
      .subscribe(() => {
        this.notify.info(this.l('SavedSuccessfully'));
        this.close();
        this.modalSave.emit(this.customer);
      });
    this.saving = false;
  }

  close(): void {
    this.modal.hide();
    this.active = false;
  }
}
