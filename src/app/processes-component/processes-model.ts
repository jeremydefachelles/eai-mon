export interface Process {
    platform: string;
    correlationID_: string;
    domain_: string;
    pe_: string;
    flux_: string;
    status_: string;
    functionalIDName: string;
    functionalIDValue: string;
    template?: any;
    traceCount: number;
    traceCountString: string;
    lastDatetime: string;
    signature: string;
}

export interface Processes {
    processes: Process[];
    queryTime: number;
}

export class ProcessRequestEvent {
    processRequest: ProcessRequest;
    
    constructor(processRequest: ProcessRequest) {
        this.processRequest = processRequest;
    }
}

export class ProcessRequest {
    constructor(maxProcesses: string, beginHour: string, beginDate: string, endHour: string,
        endDate: string, domain: string, flux: string, pe: string, platform: string) {
        this.maxProcesses = maxProcesses;
        this.pe = pe;
        this.beginDate = beginDate;
        this.beginHour = beginHour;
        this.endDate = endDate;
        this.endHour = endHour;
        this.domain = domain;
        this.flux = flux;
        this.platform = platform;
    }

    maxProcesses: string;
    beginHour: string;
    beginDate: string;
    endHour: string;
    endDate: string;
    domain: string;
    flux: string;
    pe: string;
    platform: string;
}