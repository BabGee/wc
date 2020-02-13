import { httpMixin } from "./http-mixin.js";
export const serviceCallMixin = BaseClass => class extends httpMixin(BaseClass) {
  constructor() {
    super(); // todo init params

    this.loading = false;
  }

  static get properties() {
    return {
      service: String,

      /**
       * is loading
       */
      loading: Boolean
    };
  }

  serviceCallParams() {
    // TODO [BUG] this exception wasn't thrown in navbar default
    throw new DOMException('using "serviceCallMixin" must override "serviceCallParams"', this);
  }

  parserConfig() {
    return {};
  }
  /**
   * Call service with params
   * @param {string} service
   * @param {object} params
   * @return {Promise<any>}
   */


  async callServiceParams(service, params) {
    const self = this;
    this.loading = true;
    return new Promise((resolve, reject) => {
      self.call(service, params).then(response => {
        response.parseAll(this.parserConfig());
        this.loading = false;
        resolve(response);
      }, rejected => {
        reject(rejected);
      }).catch(reason => {
        // TODO handle network errors
        console.log(reason);
        reject(reason);
      });
    });
  }
  /**
   * Call service with params got from implementation of serviceCallParams
   * @param {string} service
   */


  async callService(service) {
    // todo should use this.service
    return this.callServiceParams(service, this.serviceCallParams());
  }

};