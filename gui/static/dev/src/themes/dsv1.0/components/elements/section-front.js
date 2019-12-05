import { LitElement, html } from "../../../../../node_modules/lit-element/lit-element.js";
import { BaseElement } from "../../../../core/base-element.js";
import { SectionPElementDsc } from "../../../../elements/base/section-pelement-dsc.js";
export class SectionFront extends BaseElement {
  constructor() {
    super();
  }

  render() {
    return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
    <style>
        .module-inner {
            padding-top: calc(10.638888888888888888 * 1vw);
            padding-bottom: calc(15 * 1vw);
        }
        .module .module-inner{
            position: relative;
            max-width: 90rem;
            margin: 0 auto;
            padding-left: calc(5 * 1vw);
            padding-right: calc(5 * 1vw);
            -moz-box-sizing: border-box;
            box-sizing: border-box;
        }
        .module .module-wrap {
            max-width: 66.75em;
            margin: 0 auto;
        }
        .section-box{
            width: 100%;
            background-color: rgba(64, 157, 182, .5);
        }
        .box{
            background: #fff;
            padding: 7.1875em 5.8125em 5.8125em 5.8125em;
            box-shadow: 0 .9375em 1.5625em 0 rgba(0, 0, 0, 0, .8);
            border-radius: 6px;
            text-align: center;
        }
    </style>
    <div class="ii__section module section-box">
        <div class="module-inner">
            <div class="module-wrap">
                <div class="box">
                    <p style="margin-bottom: 21px;font-size: 20px;"><i>${this.e.name}</i></p>
                    <p class="section-text">${this.e.defaultValue}</p>
                </div>
            </div>
        </div>  
    </div>
        `;
  }

  static get is() {
    return 'section-front';
  }

  static get properties() {
    return {};
  }

}
customElements.define(SectionFront.is, SectionFront);