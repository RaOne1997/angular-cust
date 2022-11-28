import { Component, ElementRef, EventEmitter, Injector, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';
import { CustomerUserListDto, CustomerUserServiceProxy, GetCustomerUserInfo } from '@shared/service-proxies/service-proxies';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-customer-user-modal',
  templateUrl: './customer-user-modal.component.html',
  styleUrls: ['./customer-user-modal.component.css']
})
export class CustomerUserModalComponent extends AppComponentBase {

  @Output() modalSave: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('modal' , { static: false }) modal: ModalDirective;
  @ViewChild('nameInput' , { static: false }) nameInput: ElementRef;

  filter: string = '';
  active: boolean = false;
  saving: boolean = false;
  
  customeruserlist: GetCustomerUserInfo[] =[];

  constructor(  injector:Injector , private _customeruserservice: CustomerUserServiceProxy) {
    super(injector);
  }

  ngOnInit(): void {
    
  }


  show(customerID):void
  {
    this._customeruserservice.getUserInfo(customerID).subscribe(
      result=>{
        this.customeruserlist = result
      }
    )
    console.log(customerID)

    this.active = true;
    this.modal.show();
  }

  onShown(): void {
    // this.nameInput.nativeElement.focus();
  }

  save(): void {

            this.close();

  }
  close(): void {
    this.modal.hide();
    this.active = false;
  }


}
