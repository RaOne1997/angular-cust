import { Component, ElementRef, EventEmitter, Injector, OnInit, Output, ViewChild } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';
import { EditPersonInput, PersonServiceProxy } from '@shared/service-proxies/service-proxies';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-edit-person-modal',
  templateUrl: './edit-person-modal.component.html',
  styleUrls: ['./edit-person-modal.component.css']
})
export class EditPersonModalComponent extends AppComponentBase {

  @Output() modalSave: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('modal') modal: ModalDirective;
  @ViewChild('nameInput') nameInput: ElementRef;

  person: EditPersonInput = new EditPersonInput();

  active: boolean = false;
  saving: boolean = false;

  constructor( injector: Injector, private _personService: PersonServiceProxy) 
  {
    super(injector);
  }


  show(personId): void {
    console.log("HELLLOO");
    this.active = true;
    this._personService.getPersonForEdit(personId).subscribe((result) => {
      this.person = result;
      this.modal.show();
    });

  }

  onShown(): void {
    // this.nameInput.nativeElement.focus();
  }

  save(): void {
    this.saving = true;
    this._personService.editPerson(this.person)
      .subscribe(() => {
        this.notify.info(this.l('SavedSuccessfully'));
        this.close();
        this.modalSave.emit(this.person);
      });
    this.saving = false;
  }

  close(): void {
    this.modal.hide();
    this.active = false;
  }
}