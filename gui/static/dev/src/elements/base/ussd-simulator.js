import { utilsMixin } from "../../core/mixins/utils-mixin.js";
import { serviceCallMixin } from "../../core/mixins/servicecall-mixin.js";
import { BaseElement } from "../../core/base-element.js";
import { COMMAND_VCS_MENU } from "../../core/parsers/response.js";
import { Logger } from "../../core/logger.js";
export const UssdSimulatorBase = class extends utilsMixin(serviceCallMixin(BaseElement)) {
  static get is() {
    return 'ussd-simulator';
  }

  makeRequest(params) {
    params['chid'] = 4;
    return new Promise((resolve, reject) => {
      this.callServiceParams(this.service, params).then(res => {
        Logger.i.info(res);
        const vcsMenuCommand = res.serviceCommands[COMMAND_VCS_MENU];
        resolve(vcsMenuCommand.response);
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