import { NgModule, DoBootstrap, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FathymSharedModule, LCUServiceSettings } from '@lcu/common';
import { environment } from '../environments/environment';
import { LcuFathymDashboardModule, LcuFathymDashboardConfigManagerElementComponent, SELECTOR_LCU_FATHYM_DASHBOARD_CONFIG_MANAGER_ELEMENT } from '@lowcodeunit-dashboards/lcu-fathym-dashboard-common';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FathymSharedModule,
    LcuFathymDashboardModule.forRoot()
  ],
  providers: [
    {
      provide: LCUServiceSettings,
      useValue: FathymSharedModule.DefaultServiceSettings(environment)
    }
  ],
  exports: [LcuFathymDashboardModule]
})
export class AppModule implements DoBootstrap {
	constructor(protected injector: Injector) {}

	public ngDoBootstrap() {
		const configManager = createCustomElement(LcuFathymDashboardConfigManagerElementComponent, { injector: this.injector });

		customElements.define(SELECTOR_LCU_FATHYM_DASHBOARD_CONFIG_MANAGER_ELEMENT, configManager);
	}
}
