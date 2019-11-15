import { BaseElement } from "../../core/base-element.js";
import { serviceCallMixin } from "../../core/mixins/servicecall-mixin.js";
import { utilsMixin } from "../../core/mixins/utils-mixin.js"; // import {Response} from '../../core/parsers/response';
// TODO IMPLEMENT BETTER LOCAL STORAGE

export const ShoppingCartBtnBase = class extends utilsMixin(serviceCallMixin(BaseElement)) {
  static get is() {
    return 'shopping-cart-btn';
  }

  static get properties() {
    return {
      icon: String,
      title: String,
      reform: {
        type: Boolean,
        value: true
      },
      carted: {
        type: Number
      },
      cartItems: {
        type: Array
      }
    };
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    const self = this;
    var retrievedObject = localStorage.getItem('shop-cart');

    if (!retrievedObject) {
      localStorage.setItem('shop-cart', '[]');
    }

    self._cartCount();
  }

  initializeEmptyCart() {
    this.set('cartItems', []);
  }

  _myLocationListener(evt) {
    this._addCartItem(evt.detail.item, evt.detail.quantity);
  }

  _cartCount() {
    //  this.carted = this._computeQuantity();
    this.cartItems = [];
    var retrievedObject = localStorage.getItem('shop-cart');

    if (!retrievedObject) {
      localStorage.setItem('shop-cart', '[]');
    } else {
      this.cartItems = JSON.parse(retrievedObject);
    }

    this.carted = this.cartItems.length;
  }

  _computeQuantity() {
    var retrievedObject = localStorage.getItem('shop-cart');
    const items = JSON.parse(retrievedObject);

    if (!items.length) {
      return 0;
    }

    return items.reduce(function (accumulator, currentValue, currentIndex, array) {
      return accumulator + Number(currentValue.quantity);
    }, 0);
  }

  constructor() {
    super();
    this.navigateTo = '';
    this.carted = 0;
    this._boundListener = this._myLocationListener.bind(this);
    this._boundListener2 = this._cartCount.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('add-cart-item', this._boundListener);
    window.addEventListener('change-cart-count', this._boundListener2);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('add-cart-item', this._boundListener);
    window.removeEventListener('change-cart-count', this._boundListener2);
  }

  _findCartItem(items, productId) {
    var results = items.filter(function (item) {
      return item['item']['id'] === parseInt(productId);
    });

    if (results.length) {
      return results[0];
    }

    return undefined;
  }

  _addCartItem(item, quantity) {
    // console.log(evt.currentTarget.dataset);
    const productId = item['id'];
    var retrievedObject = localStorage.getItem('shop-cart');
    const items = JSON.parse(retrievedObject);

    let cartItem = this._findCartItem(items, productId); // console.log(cartItem);


    if (cartItem === undefined) {
      cartItem = {
        'item': item,
        'quantity': quantity
      };
      items.push(cartItem);
    } else {
      var index = items.indexOf(cartItem); // console.log(cartItem);

      items[index].quantity += quantity; // this.set('cartItems.'+index+'.quantity',Number(cartItem['quantity']) + quantity);
      // this.notifyPath('cartItems.'+index+'.quantity');
      // this.cartItems = this.cartItems.slice();
      // console.log(this.cartItems);
    }

    localStorage.setItem('shop-cart', JSON.stringify(items));

    this._cartCount();
  }
  /**
     * Handler for button click
     * @param {Event} evt
     */


  shopping(evt) {
    var self = this;
    window.history.replaceState('shopping cart', 'shopping cart', self.navigateTo); // duplicate

    self.pl._dialog.apply(self.pl, [self.payload, {
      'service': this.e.service,
      'params': this.serviceCallParams()
    }]); // p2 code
    // let sP = document.getElementsByTagName('service-page')[0];
    // // console.log(sP);
    //
    // sP.view = 'dialog';
    // sP.$.dialog._renderPayload(self.payload);
    // Reset all later step sections on each open
    // TODO should optimize to do this only if later step sections exist
    // if(self.$.pl) {
    //     self.$.pl._feedSet();
    // }
    //
    // self.$.dialog.open();

  }

  serviceCallParams() {
    // todo not required
    this.params['data_name'] = this.e.defaultValue;
    return this.params;
  }

  loadCartPage() {
    this.callService(this.e.service).then(response => {
      // const response = new Response(res);
      // response.parseAll({});
      this.payload = response.serviceCommands['get_section'];

      if (window.location.pathname === this.navigateTo) {
        // duplicate
        this.pl._dialog.apply(this.pl, [this.payload, {
          'service': this.e.service,
          'params': this.serviceCallParams()
        }]);
      }
    }).catch(err => console.log);
  }
  /**
     * @param {PElement} pElement
     * @param {Element} loader
     */


  init(pElement, loader) {
    super.init(pElement, loader);
    var self = this;
    self.service = pElement.service;
    self.params = loader.pl.paramsCopy();
    self.title = ShoppingCartBtnBase.toTitleCase(pElement.name);
    const au = document.querySelector('adaptive-ui');
    const basePath = au.getAttribute('path');

    if (!window.paths) {
      window.paths = {};
    }

    const key = `/${basePath}/${pElement.details['path']}/`;
    self.navigateTo = key;
    self.loadCartPage();
    /*
        if(!window.paths[key]) {
            window.paths[key] = {
                service: pElement.service
            };
            self.loadCartPage();
        }
        */
  }

};