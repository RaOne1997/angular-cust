import { Component, ElementRef, EventEmitter, Injector, OnInit, Output, ViewChild } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';
import { CreatePersonInput, PersonServiceProxy } from '@shared/service-proxies/service-proxies';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-create-person-modal',
  templateUrl: './create-person-modal.component.html',
  styleUrls: ['./create-person-modal.component.css']
})
export class CreatePersonModalComponent extends AppComponentBase implements OnInit {

  @Output() modalSave: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('modal' , { static: false }) modal: ModalDirective;
  @ViewChild('nameInput' , { static: false }) nameInput: ElementRef;
  person: CreatePersonInput = new CreatePersonInput();

    active: boolean = false;
    saving: boolean = false;

  constructor(
    injector: Injector,
    private _personService: PersonServiceProxy
  ) {
    super(injector);
   }

   show(): void {
      this.active = true;
      this.person = new CreatePersonInput();
      this.modal.show();
    }

    onShown(): void {
        this.nameInput.nativeElement.focus();
    }

    save(): void {
        this.saving = true;
        this._personService.createPerson(this.person)
            .pipe(finalize(() => this.saving = false))
            .subscribe(() => {
                this.notify.info(this.l('SavedSuccessfully'));
                this.close();
                this.modalSave.emit(this.person);
            });
    }

    close(): void {
        this.modal.hide();
        this.active = false;
    }

  ngOnInit(): void {
  }

}
