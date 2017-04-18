import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { PlatformsService } from '../services/platforms.service'
import * as model from '../model/model'
import * as breadcrumbEvent from '../breadcrumb-component/breadcrumb-event'

@Component({
  selector: 'app-flow-selector-component',
  templateUrl: './flow-selector-component.component.html',
  styleUrls: ['./flow-selector-component.component.css']
})
export class FlowSelectorComponentComponent implements OnInit {

  platforms: model.Platform[];

  selectedPlatform: model.Platform;
  selectedDomain: model.Domain;
  selectedPE: model.Pe;
  selectedMd: model.Flux;

  /******************************************
   * Trigger breadcrumb event
   ******************************************/
  @Input()
  set breadcrumbEvent(receiveBreadcrumbEvent: breadcrumbEvent.EventType) {
    if (receiveBreadcrumbEvent == null)
      return;

    console.log("FlowSelectorComponentComponent - receive  breadcrumbEvent");
    if (breadcrumbEvent.click_reload == receiveBreadcrumbEvent.getEventType()) {
      console.log("FlowSelectorComponentComponent - RELOAD");
      this.selectedPlatform = null;
      this.selectedDomain = null;
      this.selectedPE = null;
      this.selectedMd = null;
    } else if (breadcrumbEvent.click_platform == receiveBreadcrumbEvent.getEventType()) {
      console.log("FlowSelectorComponentComponent - Platform filter on receiveBreadcrumbEvent.selector.platformName");
      let res = this.platforms.filter(platform => { return platform.name == receiveBreadcrumbEvent.selector.platformName })
      this.selectedPlatform = res[0];
      this.selectedDomain = null;
      this.selectedPE = null;
      this.selectedMd = null;
    } else if (breadcrumbEvent.click_domain == receiveBreadcrumbEvent.getEventType()) {
      console.log("FlowSelectorComponentComponent - Platform filter on receiveBreadcrumbEvent.selector.domaineName");
      let res = this.selectedPlatform.domain.filter(domain => { return domain.name == receiveBreadcrumbEvent.selector.domainName })
      this.selectedDomain = res[0];
      this.selectedPE = null;
      this.selectedMd = null;

    } else if (breadcrumbEvent.click_pe == receiveBreadcrumbEvent.getEventType()) {
      console.log("FlowSelectorComponentComponent - Platform filter on receiveBreadcrumbEvent.selector.platformName");
      let res = this.selectedDomain.pe.filter(pe => { return pe.name == receiveBreadcrumbEvent.selector.peName })
      this.selectedPE = res[0];
      this.selectedMd = null;
    }
  }
  //get flowName(): string { return   this.selector.flowName; }

  /**
   * Emission d'event vers le composant parent (AppComponent) 
   */
  @Output() onPlatformName = new EventEmitter<string>();
  @Output() onDomainName = new EventEmitter<string>();
  @Output() onPeName = new EventEmitter<string>();
  @Output() onFlowName = new EventEmitter<string>();
  errorMessage: string;

  constructor(private platformsService: PlatformsService) {
    console.log('FlowSelectorComponentComponent construct');
  }

  /**
   * Call platformsService during the init phase.
   */
  ngOnInit() {
    console.log("Init Flow-selector-component");
    this.platformsService.getPlatforms().subscribe(ro => this.platforms = ro, error => this.errorMessage = <any>error);
  }

  onPlatformSelected(pf: model.Platform) {
    console.log("selectedPlaform: " + pf.name);
    this.onPlatformName.emit(pf.name);
    this.selectedPlatform = pf;
  }

  onDomainSelected(d: model.Domain) {
    console.log("selectedDomain: " + d.name);
    this.onDomainName.emit(d.name);
    this.selectedDomain = d;
  }

  onPeSelected(p: model.Pe) {
    console.log("selectedPE: " + p.name);
    this.onPeName.emit(p.name);
    this.selectedPE = p;
  }

  onFlowSelected(f: model.Flux) {
    console.log("selectedFlux: " + f.name);
    this.onFlowName.emit(f.name);
    this.selectedMd = f;
  }

}
