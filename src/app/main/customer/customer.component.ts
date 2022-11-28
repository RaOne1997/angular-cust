import { Component, Injector, OnInit } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';
import { CustomerListDto, CustomerServiceServiceProxy, CustomerUserListDto, CustomerUserServiceProxy } from '@shared/service-proxies/service-proxies';
import { remove as _remove } from 'lodash-es';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent extends AppComponentBase {
  customers: CustomerListDto[]=[];
 
  filter:string='';
  constructor(injector: Injector, private _customerservice : CustomerServiceServiceProxy) 
  {
    super(injector);
  }

  ngOnInit(): void {
    this.getCustomer();
  
  }

  getCustomer():void
  { 
    this._customerservice.getCustomer(this.filter).subscribe(
      (result)=> {
        this.customers= result.items;
      }
    );
  }



  deleteCustomer(customer: CustomerListDto):void
  {
    this.message.confirm(
      this.l('Are You Sure To Delete The Customer', customer.name),'',
      isConfirmed => {
          if (isConfirmed) {
              this._customerservice.deleteCustomer(customer.id).subscribe(() => {
                  this.notify.info(this.l('Successfully Deleted'));
                  _remove(this.customers , customer);
              });
          }
      }
  );
  }


  
}
