import { Injector, Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ThemesLayoutBaseComponent } from '@app/shared/layout/themes/themes-layout-base.component';
import { UrlHelper } from '@shared/helpers/UrlHelper';
import { AppConsts } from '@shared/AppConsts';
import { DateTimeService } from '@app/shared/common/timing/date-time.service';
import { appModuleAnimation } from '@shared/animations/routerTransition';
@Component({
  selector: 'app-theme-x-layout',
  templateUrl: './theme-x-layout.component.html',
  
  animations: [appModuleAnimation()],
})
export class ThemeXLayoutComponent  extends ThemesLayoutBaseComponent implements OnInit {

 
  remoteServiceBaseUrl: string = AppConsts.remoteServiceBaseUrl;

  constructor(injector: Injector, @Inject(DOCUMENT) private document: Document, _dateTimeService: DateTimeService) {
      super(injector, _dateTimeService);
  }

  ngOnInit() {
      this.installationMode = UrlHelper.isInstallUrl(location.href);
  }
}
