
import * as model from '../model/model'

export const click_reload : string = "click_reload";
export const click_platform : string = "click_platform";
export const click_domain : string = "click_domain";
export const click_pe : string = "click_pe";
export const click_flow : string = "click_flow";

export class EventType {

    eventType: string;
    selector: model.Selector;

    constructor(clickEvent: string,  selector:model.Selector){
        this.eventType = clickEvent;
        this.selector = selector;
    }

    getEventType(){return this.eventType;}
    getSelector(){return this.selector;}

}

