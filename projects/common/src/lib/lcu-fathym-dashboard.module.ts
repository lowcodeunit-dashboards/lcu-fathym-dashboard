import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FathymSharedModule, MaterialModule } from '@lcu/common';
import { LcuService } from './services/lcu.service';
import { LcuComponent } from './controls/lcu/lcu.component';
import { LcuDirective } from './directives/lcu.directive';
import { LcuFathymDashboardConfigManagerElementComponent } from './elements/config-manager/config-manager.component';
import { HttpClientModule } from '@angular/common/http';
import { SafePipeModule } from 'safe-pipe';

@NgModule({
  declarations: [LcuComponent, LcuDirective, LcuFathymDashboardConfigManagerElementComponent],
  imports: [
    FathymSharedModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    HttpClientModule,
    SafePipeModule
  ],
  exports: [LcuComponent, LcuDirective, LcuFathymDashboardConfigManagerElementComponent],
  entryComponents: [LcuFathymDashboardConfigManagerElementComponent]
})
export class LcuFathymDashboardModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LcuFathymDashboardModule,
      providers: [LcuService]
    };
  }
}
