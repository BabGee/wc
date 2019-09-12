/* eslint-disable guard-for-in */
import { serviceCallMixin } from "./servicecall-mixin.js";
import { DataSource } from "../parsers/commands/data-source.js";
import { COMMAND_DATA_SOURCE } from "../parsers/response.js";
import { Logger } from '../logger.js';
export const dataSourceMixin = BaseClass => class extends serviceCallMixin(BaseClass) {
  constructor() {
    super();
    this.page = 1;
    this.limit = 50;
    this.totalElements = 0;
    this.totalPages = 0;
    this.q = '';
    this.data = [];
    this.rows = [];
    this.cols = [];
    this.groups = [];
    this.columns = []; // value: () => [], notify:true
  }

  static get properties() {
    return {
      data: {
        type: Array
      },
      rows: {
        type: Array
      },
      cols: {
        type: Array
      },
      groups: {
        type: Array
      },
      columns: {
        type: Array
      },
      page: {
        type: Number
      },
      limit: {
        type: Number
      },
      totalElements: {
        type: Number
      },
      totalPages: {
        type: Number
      },
      q: {
        type: String
      }
    };
  }
  /**
   * Returns the response type expected from the element to be used by the parser
   * the return value should be one of DATA, LIST, LINES
   * it defaults to LIST, meaning `rows`
   * FIXME A better approach could be to configure this on the backend
   *
   * @return {symbol} incoming format assumed by parser
   *
   */


  dataResponseType() {
    return Symbol.for('LIST');
  }

  refresh() {
    this.loadData().then(dsc => {});
  } // todo move up into http mixin


  mergeParams(obj1) {
    for (var attrname in obj1) {
      this.params[attrname] = obj1[attrname];
    }

    this.loadData().then(dsc => {});
  } // todo move up into http mixin


  updateParams(key, value) {
    let reload = true;

    if (!(key in this.params) && value === undefined) {
      reload = false;
    } else if (key in this.params && value === this.params[key]) {
      reload = false;
    } else {
      this.params[key] = value;
    }

    if (reload) {
      this.loadData().then(dsc => {});
    }
  } // todo move up into http mixin


  deleteParamKeys(keys, refresh) {
    let paramsChanged = false;

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];

      if (key in this.params) {
        // should check equality
        paramsChanged = true;
        delete this.params[key];
      }
    }

    if (refresh && paramsChanged) {
      this.loadData().then(dsc => {});
    }
  }

  dscDataName() {
    throw new DOMException('using "dataSourceMixin" must override "dscDataName"', this);
  }

  parseResponseIntoProperties(dataSource) {
    const self = this;
    let dsp; // TODO why is this required?

    if (dataSource instanceof DataSource) {
      dsp = dataSource;
    } else {
      dsp = new DataSource(dataSource, this.parserConfig());
    } // const dsp = new DataSourceParser(payload, self.dataResponseType());
    // this.data = dsp.data;


    self.cols = dsp.cols;
    self.columns = dsp.columns;
    self.rows = dsp.rows;
    self.groups = dsp.groups;
    self.data = dsp.data;
    self.totalElements = dsp.totalElements;
    self.totalPages = Math.ceil(dsp.totalElements / self.limit);
    return dsp;
  }

  serviceCallParams() {
    this.params['data_name'] = this.dscDataName();
    this.params['limit'] = this.limit;
    /*
        if(self.q){
            this.params['q'] = self.q;
        }else{
            if(this.params.hasOwnProperty('q')) {
                delete this.params['q']
            }
        }
        */

    this.params['page'] = this.page;
    return this.params;
  }

  parserConfig() {
    return {
      'responseType': this.dataResponseType()
    };
  }

  async loadData() {
    Logger.i.debug('load data :' + this.dscDataName()); // todo use element service

    const service = 'DATA SOURCE';
    return new Promise((resolve, reject) => {
      this.callService(service).then(res => {
        const dataSourceCommand = res.serviceCommands[COMMAND_DATA_SOURCE];
        const dsc = this.parseResponseIntoProperties(dataSourceCommand); // data load callback

        this.onLoadData(dsc);
        resolve(dsc);
      }, function (rejected) {
        reject(rejected);
      }).catch(function (exception) {
        Logger.i.error(exception);
      });
    });
  }
  /**
   * Callback called when the data has been loaded and parsed into properties
   * @param {DataSource} dsc parsed DSC response instance
   */


  onLoadData(dsc) {}

};