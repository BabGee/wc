import { GpSelectBase } from "../../../../elements/base/gp-select.js";
import { html } from "../../../../../node_modules/lit-element/lit-element.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class GpSelect extends GpSelectBase {
  constructor() {
    super();
  }

  renderDefault() {
    return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.css" type="text/css"/>
      <style>
      .center{
        display: flex;
        justify-content: center;
        align-items: center;
      }
      /* Account dropdown select */
      .account-select .account-header{
        background: #fff;
        padding: 10px;
        position: relative;
        width: 100%;
      }
      .account-select::after{
        content: '';
        width: 8px;
        height: 8px;
        border-left: 2px solid #4a4a4a;
        border-bottom: 2px solid #4a4a4a;
        border-right: 2px solid transparent;
        border-top: 2px solid transparent;
        position: absolute;
        transform: rotate(-43deg);
        top: 19px;
        right: 14px;
      }
      .account-item{
        padding: 7px;
      }
      .account-item .profile-pic img{
        width: 25px;
        height: 25px;
        border-radius: 50%;
        margin-right: 10px;
      }
      .account-item .accout-details p{
        font-size: 14px;
        font-weight: 500;
      }
      .account-item .accout-details p span{
        font-weight: lighter;
      }
      .account-body{
        background: #fff;
        margin: 15px 0 0 0;
        padding: 10px;
      }
      .account-body ul li{
        border-bottom: 1px solid #ececec;
      }
      .account-body ul li:last-child{
        border-bottom: 0 solid transparent;
      }
      </style>
        <div class="account-select">
          <div class="account-header">
              <div class="account-item is-flex">
                  <div class="profile-pic center">
                      <img src="img/bird150.jpg" alt="">
                  </div>
                  <div class="accout-details center">
                      <p class="is-capitalized">Anwar sadatt &nbsp;<span>Web developer</span></p>
                  </div>
              </div>
          </div>
          <div class="account-body">
              <ul>
                  <li>
                      <div class="account-item is-flex">
                          <div class="profile-pic center">
                              <img src="img/bird150.jpg" alt="">
                          </div>
                          <div class="accout-details center">
                              <p class="is-capitalized">Anwar sadatt <span>Web developer</span></p>
                          </div>
                      </div>
                  </li>
                  <li>
                      <div class="account-item is-flex">
                          <div class="profile-pic center">
                              <img src="img/bird150.jpg" alt="">
                          </div>
                          <div class="accout-details center">
                              <p class="is-capitalized">Anwar sadatt <span>Web developer</span></p>
                          </div>
                      </div>
                  </li>
              </ul>
          </div>
      </div>
        `;
  }

}

customElements.define(GpSelect.is, GpSelect);