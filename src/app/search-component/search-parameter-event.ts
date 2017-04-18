
import * as moment from 'moment';

export class SearchParametersEvent {

  constructor() {
    this.init();
  }

  mstatus: string;
  nbElements: string;
  beginDate: string;
  endDate: string;
  endHours: string;
  beginHours;
  correlationID;
  functionalId;

  init() {
    var now = moment();
    var mdate = now.format("YYYY-MM-DD");
    this.mstatus = "ALL";
    this.nbElements = "50";
    this.beginDate = mdate;
    this.endDate = mdate;
    this.beginHours = "00:00";
    this.endHours = "23:59";
    this.correlationID = "";
    this.functionalId = "";
  }

}