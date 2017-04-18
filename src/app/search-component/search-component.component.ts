import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MyMaterialModuleModule } from '../my-material-module/my-material-module.module';
import * as moment from 'moment';
import * as spEvent from './search-parameter-event';


@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit {

  // Send an event to the AppComponent each time a parameter is set( status, date, time...)
  @Output() onSearchParameterEvent = new EventEmitter<spEvent.SearchParametersEvent>();


  search: spEvent.SearchParametersEvent = new spEvent.SearchParametersEvent();

  constructor() { }

  ngOnInit() {
    console.log("Init search panel");
    this.onReset();
  }

  onReset() {
    this.search.init();
    console.log("Reset search panel: " + this.diagnostic());
  }

  // TODO: Remove this when we're done
  diagnostic(): string {
    console.log(JSON.stringify(this.search));
    return JSON.stringify(this.search);;
  }

  updateParameters() {    
    this.onSearchParameterEvent.emit(this.search);
  }

}
