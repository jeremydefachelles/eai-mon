/**
 *  Generated from JSON request using http://json2ts.com/
 * 
 */


    export interface Flux {
        fid: any[];
        name: string;
        description: string;
    }

    export interface Pe {
        flux: Flux[];
        name: string;
        description: string;
    }

    export interface Domain {
        pe: Pe[];
        name: string;
    }

    export interface Platform {
        domain: Domain[];
        name: string;
    }

    export interface RootObject {
        platform: Platform[];
    }

    export class Selector {
        
        constructor(){
            
            this.platformName = null;
            this.domainName = null;
            this.peName = null;
            this.flowName = null;
        }

        platformName: string = null;
        domainName: string = null;
        peName: string = null;
        flowName: string = null;
        status: string;
        nbElements: string;
    }

 


