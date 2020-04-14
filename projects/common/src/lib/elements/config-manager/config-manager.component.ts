import { Component, OnInit, Injector } from '@angular/core';
import { LCUElementContext, LcuElementComponent } from '@lcu/common';
import { LcuService } from '../../services/lcu.service';

export class LcuFathymDashboardConfigManagerElementState {
  public FathymDashboardURL: string;
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
  public Content:any;
  //public HtmlContent:any;

  //  Constructors
  constructor(protected injector: Injector, protected dataService:LcuService) {
    super(injector);
  }

  //  Life Cycle
  public ngOnInit() {
    super.ngOnInit();
    
    // Get the Document360 help article and parse out the vimeo src
    this.dataService.getData().subscribe(
      (data:any)=>{
        let parser = new DOMParser();
        let parsedHtml = parser.parseFromString(data.data.html_content,"text/html");
        let src = parsedHtml.getElementsByTagName("iframe")[0].src;
        
        // If there's no src, use hard-coded link to vimeo
        if (src != null) {
          this.Content = src;
        }
        else {
          this.Content = "https://player.vimeo.com/video/403508452";
        }
        //this.HtmlContent = data.data.html_content;
      }
    )
  }

  //  API Methods

  //  Helpers
}
