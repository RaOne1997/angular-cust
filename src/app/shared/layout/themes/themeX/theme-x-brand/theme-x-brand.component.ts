import { Injector, Component, ViewEncapsulation, Inject, OnInit, Input } from '@angular/core';
import { AppConsts } from '@shared/AppConsts';
import { AppComponentBase } from '@shared/common/app-component-base';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'themex',
  templateUrl: './theme-x-brand.component.html',

})
export class ThemeXBrandComponent  extends AppComponentBase{
  defaultLogo = '';
  remoteServiceBaseUrl: string = AppConsts.remoteServiceBaseUrl;

  @Input() anchorClass = 'd-flex align-items-center';
  @Input() skin = 'dark';

  constructor(injector: Injector, @Inject(DOCUMENT) private document: Document) {
      super(injector);
  }

  ngOnInit(): void {
      this.defaultLogo = AppConsts.appBaseUrl + '/assets/common/images/app-logo-on-' + this.skin + '-sm.svg';
  }

}
