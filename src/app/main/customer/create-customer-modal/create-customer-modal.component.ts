import { Component, ElementRef, EventEmitter, Injector, OnInit, Output, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { AppComponentBase } from '@shared/common/app-component-base';
import { CreateCustomerInput, CreateCustomerUserInput, CustomerServiceServiceProxy, CustomerUserServiceProxy } from '@shared/service-proxies/service-proxies';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-create-customer-modal',
  templateUrl: './create-customer-modal.component.html',
  styleUrls: ['./create-customer-modal.component.css']
})
export class CreateCustomerModalComponent extends AppComponentBase implements OnInit {

  @Output() modalSave: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('modal' , { static: false }) modal: ModalDirective;
  @ViewChild('nameInput' , { static: false }) nameInput: ElementRef;

  customer: CreateCustomerInput  = new CreateCustomerInput(); 
  customeruser: CreateCustomerUserInput = new CreateCustomerUserInput();
  userslist : any;
  todaydate: Date = new Date();
  
  productForm: FormGroup;  

  active: boolean = false;
  saving: boolean = false;

  constructor(  injector:Injector, private _customerService:CustomerServiceServiceProxy,private fb:FormBuilder, private _customersUserService: CustomerUserServiceProxy) { 
    super(injector);
    this.productForm = this.fb.group({  
      name: '', 
      emailAddress:'',
      address:'', 
      quantities: this.fb.array([]) ,  
    });  
  }
  ngOnInit(): void {
   this.addQuantity();
    this._customerService.getUsers().subscribe(
      (result) =>{
        this.userslist = result
        console.log(this.userslist);
      } 
    )

  }
  
  quantities() : FormArray {  
    return this.productForm.get("quantities") as FormArray  
  }  
 
  newQuantity(): FormGroup {  
    return this.fb.group({  
    userId:0 
    })  
  }  
  addQuantity() {  
    this.quantities().push(this.newQuantity());  
  } 
  show():void
  {
    this.active = true; 
    this.customer = new CreateCustomerInput();
    this.modal.show();
  }

  onShown(): void {
    this.nameInput.nativeElement.focus();
  }

  save(): void {
    
      this.customer.name =this.productForm.value.name;
      this.customer.emailAddress = this.productForm.value.emailAddress
      this.customer.address = this.productForm.value.address 
    this.saving = true;
    this._customerService.createCustomer(this.customer)
        .pipe(finalize(() => this.saving = false))
        .subscribe(
          (result) => {
            this.productForm.value.quantities.forEach(element => {
              
              this.customeruser.userId = element.userId;
              this.customeruser.customerId = result;

              this._customersUserService.createCustomerUser(this.customeruser).subscribe(
                ()=>{
                  console.log("Saved")
                }
              )
            });
            this.notify.info(this.l('SavedSuccessfully'));
            this.close();
            this.modalSave.emit(this.customer);
        });
    
  }
  close(): void {
    this.modal.hide();
    this.active = false;
  }


}
