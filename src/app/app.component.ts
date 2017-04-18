
import { Component, EventEmitter, Input, Output, Optional } from '@angular/core';
import * as model from './model/model'
import { PlatformsService } from './services/platforms.service'
import { ProcessesService } from './services/processes.service';
import * as breadcrumbEventModel from './breadcrumb-component/breadcrumb-event'
import { ProcessRequest, ProcessRequestEvent } from './processes-component/processes-model';
import * as spEvent from './search-component/search-parameter-event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PlatformsService, ProcessesService]
})
export class AppComponent {

  //These fields are binded to the breadcrumb
  platformName: string;
  domainName: string;
  peName: string;
  flowName: string;

  // this field is bound to the flow selector panel
  breadcrumbEvent: breadcrumbEventModel.EventType;

  // this field is bound to the search parameters panel
  searchParameters: spEvent.SearchParametersEvent = new spEvent.SearchParametersEvent();

  //manage status of components and initial state
  isSearchPanelDisplayed = false;
  isFlowSelectorPanelDisplayed = true;
  isProcessesPanelDisplayed = false;

  processRequestEvent: ProcessRequestEvent;

  /********************************************
   *  Retrieve events from Flow Selector panel
   ********************************************/
  onPlatformName(platformName: string) {
    console.log("AppComponent: get event onPlatformName :" + platformName);
    this.platformName = platformName;
  }

  onDomainName(domainName: string) {
    console.log("AppComponent: get event onDomainName :" + domainName);
    this.domainName = domainName;
  }

  onPeName(peName: string) {
    console.log("AppComponent: get event onPeName :" + peName);
    this.peName = peName;
  }

  onFlowName(flowName: string) {
    console.log("AppComponent: get event onFlowName :" + flowName);
    this.flowName = flowName;
  }

  /********************************************
   *  Retrieve events from BreadCrumb panel
   ********************************************/
  onBreadcrumbEvent(breadcrumbEvent: breadcrumbEventModel.EventType) {
    console.log("AppComponent: get event on BreadCrumb " + JSON.stringify(breadcrumbEvent));
    this.breadcrumbEvent = breadcrumbEvent;

    if (breadcrumbEvent.eventType == breadcrumbEventModel.click_reload) {
      console.log("click reload");
      this.isSearchPanelDisplayed = false;
      this.isFlowSelectorPanelDisplayed = true;
      this.isProcessesPanelDisplayed = false;
    }
  }

  /***************************************************
   *  Retrieve events from Parameters panel
   ****************************************************/
  onSearchParameterEvent(parameterEvent: spEvent.SearchParametersEvent) {
    console.log("AppComponent: get event from parameter panel: " + JSON.stringify(parameterEvent));
    this.searchParameters = parameterEvent;
  }

  onParameters() {
    console.log("AppComponent: search instances");
    this.isSearchPanelDisplayed = !this.isSearchPanelDisplayed;
    this.isFlowSelectorPanelDisplayed = false;
    this.isProcessesPanelDisplayed = false;
  }

  /**
   * Click on  SearchInstances button
   */
  onSearchInstances() {
    console.log("AppComponent: search instances");
    this.isSearchPanelDisplayed = false;
    this.isFlowSelectorPanelDisplayed = false;
    this.isProcessesPanelDisplayed = true;
    this.fulfillBreadcrumb();

    // Emit an event to the processes component
    let pr = new ProcessRequest(this.searchParameters.nbElements,
      this.searchParameters.beginDate + 'T' + this.searchParameters.beginHours + ':00.000Z',
      this.searchParameters.beginDate + 'T00:00:00.000Z',
      this.searchParameters.endDate + 'T' + this.searchParameters.endHours + ':59.999Z',
      this.searchParameters.endDate +'T'+ this.searchParameters.endHours + ':59.999Z',
      this.domainName, this.flowName, this.peName, this.platformName);
    this.processRequestEvent = new ProcessRequestEvent(pr);
  }

  /**
   * Complete the breadcrumb if needed  with 'ALL' keyword.
   */
  private fulfillBreadcrumb() {
    if (this.domainName == null || this.domainName == '') this.domainName = 'all';
    if (this.peName == null || this.peName == '') this.peName = 'all';
    if (this.flowName == null || this.flowName == '') this.flowName = 'all';
  }
}
