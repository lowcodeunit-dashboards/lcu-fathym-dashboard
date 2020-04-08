import { Component, OnInit, Injector } from '@angular/core';
import { LCUElementContext, LcuElementComponent } from '@lcu/common';

export class LcuFathymDashboardConfigManagerElementState {
  public FathymDashboardUrl: string;
}

export class LcuFathymDashboardConfigManagerContext extends LCUElementContext<LcuFathymDashboardConfigManagerElementState> {}

export const SELECTOR_LCU_FATHYM_DASHBOARD_CONFIG_MANAGER_ELEMENT = 'lcu-fathym-dashboard-config-manager-element';

@Component({
  selector: SELECTOR_LCU_FATHYM_DASHBOARD_CONFIG_MANAGER_ELEMENT,
  templateUrl: './config-manager.component.html',
  styleUrls: ['./config-manager.component.scss']
})
export class LcuFathymDashboardConfigManagerElementComponent extends LcuElementComponent<LcuFathymDashboardConfigManagerContext> implements OnInit {
  //  Fields

  //  Properties

  //  Constructors
  constructor(protected injector: Injector) {
    super(injector);
  }

  //  Life Cycle
  public ngOnInit() {
    super.ngOnInit();
  }

  //  API Methods

  //  Helpers
}
