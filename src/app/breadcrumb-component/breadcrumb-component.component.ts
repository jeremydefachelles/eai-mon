import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as model from '../model/model'
import * as BreadcrumbEvent from './breadcrumb-event'

@Component({
    selector: 'app-breadcrumb-component',
    templateUrl: './breadcrumb-component.component.html',
    styleUrls: ['./breadcrumb-component.component.css']
})
export class BreadcrumbComponentComponent {

    // Linked to the selector in the AppComponent
    selector: model.Selector = new model.Selector();

    @Input()
    set platformName(platformName: string) {
        console.log("breadcrumb - Set platformName :" + platformName);
        this.selector.platformName = platformName;
    }

    get platformName(): string { return this.selector.platformName; }

    @Input()
    set domainName(domainName: string) {
        console.log("breadcrumb - Set domaineName :" + domainName);
        this.selector.domainName = domainName;
    }
    get domainName(): string { return this.selector.domainName; }


    @Input()
    set flowName(flowName: string) {
        console.log("breadcrumb - Set flowName :" + flowName);
        this.selector.flowName = flowName;
    }
    get flowName(): string { return this.selector.flowName; }

    @Input()
    set peName(peName: string) {
        console.log("breadcrumb - Set peName :" + peName);
        this.selector.peName = peName;
    }
    get peName(): string { return this.selector.peName; }

    // Send an event to the AppComponent
    @Output() onBreadcrumbEvent = new EventEmitter<BreadcrumbEvent.EventType>();

    constructor() { }

    onReloadBreadcrumb() {
        console.log("onReloadBreadcrumb" + JSON.stringify(this.selector));
        this.selector.platformName = null;
        this.selector.domainName = null;
        this.selector.peName = null;
        this.selector.flowName = null;

        // Send an event to the parent component
        this.onBreadcrumbEvent.emit(new BreadcrumbEvent.EventType(BreadcrumbEvent.click_reload, this.selector));
        //.platformName, this.selector.domainName, this.selector.peName, this.selector.flowName));
    }

    showDomain() {
        console.log("showDomain" + JSON.stringify(this.selector));
        this.selector.domainName = null;
        this.selector.peName = null;
        this.selector.flowName = null;
        this.onBreadcrumbEvent.emit(new BreadcrumbEvent.EventType(BreadcrumbEvent.click_platform, this.selector));
        //.platformName, this.selector.domainName, this.selector.peName, this.selector.flowName));
    }

    showPEs() {
        console.log("showPe" + JSON.stringify(this.selector));
        this.selector.peName = null;
        this.selector.flowName = null;
        this.onBreadcrumbEvent.emit(new BreadcrumbEvent.EventType(BreadcrumbEvent.click_domain, this.selector));
        //.platformName, this.selector.domainName, this.selector.peName, this.selector.flowName));
    }

    showFlows() {
        console.log("showFlow: " + JSON.stringify(this.selector));
        this.selector.flowName = null;
        this.onBreadcrumbEvent.emit(new BreadcrumbEvent.EventType(BreadcrumbEvent.click_pe, this.selector));
        //.platformName, this.selector.domainName, this.selector.peName, this.selector.flowName));
    }

}