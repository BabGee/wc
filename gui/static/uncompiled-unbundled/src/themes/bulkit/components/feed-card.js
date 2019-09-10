import { html } from "../../../../node_modules/lit-element/lit-element.js";
import { FeedCardBase } from "../../../components/feed-card/feed-card.js";
import "../../../../node_modules/@polymer/iron-icon/iron-icon.js";
import { register } from "../register.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class FeedCard extends FeedCardBase {
  constructor() {
    super();
  }

  render() {
    return html`

        <style>
            :host{
                display:inline-block;
                width:100%;
                box-sizing:border-box;
            }

            paper-button{
                display: inline-block;
                background: #54667a;
            }

            paper-button[hidden]{
                display: none;
            }

            .header{
                color: #000000;
                /*background: #fafafa;
                background:  red;*/
                text-align: center;
                padding: 10px;
                /* box-shadow: 0 2px 8px 0 rgba(0,0,0,0.2);
                -webkit-box-shadow: 0 2px 8px 0 rgba(0,0,0,0.2);
                -moz-box-shadow: 0 2px 8px 0 rgba(0,0,0,0.2);
                */font-weight: 500;
              /*  text-transform: uppercase;
                font-size: 18px;
                */margin: 0px;
            }
            .pd-card-wrapper{
                box-sizing:border-box;
            }
            
             .pd-card-wrapper {

                border-radius: 0.2em;

            }

            h2 {
                color: var(--app-default-color);
            }

        </style>

        <div class="pd-card-wrapper m-r-1 m-l-1 m-t-1  c-text c-text-bg">
            <!--<template is="dom-if" if="$this.head}">-->
            
                <h2 class="header c-n-light c-b-b-dark p-t-0-5 p-b-0-5 p-l-1 p-r-1">
                    <iron-icon style="float: left;"
                               ?hidden="${this._hideB(this.pos, this.sections)}"
                               icon="icons:arrow-back"
                               @click="${this._back}"></iron-icon>
                    <span>${this.head}</span>
                    <iron-icon style="float: right;"
                               ?hidden="${this._hideF(this.pos, this.sections)}"
                               icon="icons:arrow-forward"
                               @click="${this._forward}"></iron-icon>
                </h2>
            <!--</template>-->
            <div class="p-t-0-5 p-l-1 p-r-1 p-b-0-5">
                <slot></slot>
            </div>
            <div class="clearfix"></div>
        </div>`;
  }

}

register(FeedCard); // window.customElements.define(FeedCard.is, FeedCard);