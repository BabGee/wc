import { utilsMixin } from "../../core/mixins/utils-mixin.js";
import { BaseElement } from "../../core/base-element.js";
import { Logger } from "../../core/logger.js";
import { httpMixin } from "../../core/mixins/http-mixin.js";
export const UssdSimulatorBase = class extends utilsMixin(httpMixin(BaseElement)) {
  static get is() {
    return 'ussd-simulator';
  }

  makeRequest(params) {
    return new Promise((resolve, reject) => {
      this.call(this.service, params, false).then(res => {
        Logger.i.info(res);
        resolve(res);
      }, function (rejected) {
        reject(rejected);
      }).catch(function (exception) {
        Logger.i.error(exception);
        reject(exception);
      });
    });
  }

  init(pElement, loader) {
    super.init(pElement, loader);
    this.service = pElement.service;
  }

};