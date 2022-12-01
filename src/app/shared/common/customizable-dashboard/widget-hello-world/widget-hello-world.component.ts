import { Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';
import { TenantDashboardServiceProxy } from '@shared/service-proxies/service-proxies';
import { WidgetComponentBaseComponent } from '../widgets/widget-component-base';

@Component({
  selector: 'app-widget-hello-world',
  templateUrl: './widget-hello-world.component.html',
  styleUrls: ['./widget-hello-world.component.css']
})
export class WidgetHelloWorldComponent extends WidgetComponentBaseComponent implements OnInit, OnDestroy {
  helloResponse: string;
  constructor(injector: Injector,
    private _tenantDashboardService: TenantDashboardServiceProxy) {
    super(injector);    
  }

  ngOnInit(): void {
    this.subHelloWorldFilter();
    this.runDelayed(()=>{
        this.getHelloWorld("First Attempt");  
    });
  }
  
  getHelloWorld = (name: string) => {
    this._tenantDashboardService
      .getHelloWorldData(name)
      .subscribe((data) => {
        this.helloResponse = data.outPutName;
      });
  }
  
  onNameChange = (name) => {
   this.runDelayed(()=>{
        this.getHelloWorld(name);  
    });
  }
  
  subHelloWorldFilter() {
    abp.event.on('app.dashboardFilters.helloFilter.onNameChange', this.onNameChange);
  }

  unSubHelloWorldFilter() {
    abp.event.off('app.dashboardFilters.helloFilter.onNameChange', this.onNameChange);
  }

  ngOnDestroy(): void {
    this.unSubHelloWorldFilter();
  }
}
