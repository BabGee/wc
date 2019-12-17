import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import { SummaryBoxesBase } from "../../../../elements/base/summary-boxes.js";
import "../../../../../node_modules/@polymer/paper-card/paper-card.js";
import '../../icons/my-icons.js';
import "./datalist-element/loader-element.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class SummaryBoxes extends SummaryBoxesBase {
  constructor() {
    super();
    this.loading = true;
  }

  static get properties() {
    return {
      loading: Boolean
    };
  }

  renderDefault() {
    return html`

        <style>


            table {
                text-transform: none;
                background-color: #fff;
            }

            tbody tr:nth-child(2) td {
                font-weight: bold;
                padding: 15px;
            }

            tbody tr:nth-child(3) td {
                padding: 25px;
            }

            .transaction_card {
                margin-left: 10%;
                margin-right: 10%;
                width: 100%;
            }

            .margin_div {

                margin: auto;
                width: 90%;
                padding-right: 5%;
                padding-left: 5%;
            }
            .cb{clear:both;}
            paper-card {
                background-color: #fcfcfc;

                width: 90%;
            }

            .row {
                margin-left: -15px;
                margin-right: -15px;
            }

            .col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {
                position: relative;
                min-height: 1px;
                padding-left: 0px;
                padding-right: 0px;

            }
            .card-actions{background-color: var(--app-default-color);color: #ffffff;text-align: left}


            @media (min-width: 992px) {
                .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {
                    float: left;
                }

                .col-md-12 {
                    width: 100%;
                }

                .col-md-11 {
                    width: 91.66666667%;
                }

                .col-md-10 {
                    width: 83.33333333%;
                }

                .col-md-9 {
                    width: 75%;
                }

                .col-md-8 {
                    width: 66.66666667%;
                }

                .col-md-7 {
                    width: 58.33333333%;
                }

                .col-md-6 {
                    width: 50%;
                }

                .col-md-5 {
                    width: 41.66666667%;
                }

                .col-md-4 {
                    width: 33.33333333%;
                }

                .col-md-3 {
                    width: 25%;
                }

                .col-md-2 {
                    width: 16.66666667%;
                }

                .col-md-1 {
                    width: 8.33333333%;
                }

                .col-md-pull-12 {
                    right: 100%;
                }

                .col-md-pull-11 {
                    right: 91.66666667%;
                }

                .col-md-pull-10 {
                    right: 83.33333333%;
                }

                .col-md-pull-9 {
                    right: 75%;
                }

                .col-md-pull-8 {
                    right: 66.66666667%;
                }

                .col-md-pull-7 {
                    right: 58.33333333%;
                }

                .col-md-pull-6 {
                    right: 50%;
                }

                .col-md-pull-5 {
                    right: 41.66666667%;
                }

                .col-md-pull-4 {
                    right: 33.33333333%;
                }

                .col-md-pull-3 {
                    right: 25%;
                }

                .col-md-pull-2 {
                    right: 16.66666667%;
                }

                .col-md-pull-1 {
                    right: 8.33333333%;
                }

                .col-md-pull-0 {
                    right: auto;
                }

                .col-md-push-12 {
                    left: 100%;
                }

                .col-md-push-11 {
                    left: 91.66666667%;
                }

                .col-md-push-10 {
                    left: 83.33333333%;
                }

                .col-md-push-9 {
                    left: 75%;
                }

                .col-md-push-8 {
                    left: 66.66666667%;
                }

                .col-md-push-7 {
                    left: 58.33333333%;
                }

                .col-md-push-6 {
                    left: 50%;
                }

                .col-md-push-5 {
                    left: 41.66666667%;
                }

                .col-md-push-4 {
                    left: 33.33333333%;
                }

                .col-md-push-3 {
                    left: 25%;
                }

                .col-md-push-2 {
                    left: 16.66666667%;
                }

                .col-md-push-1 {
                    left: 8.33333333%;
                }

                .col-md-push-0 {
                    left: auto;
                }

                .col-md-offset-12 {
                    margin-left: 100%;
                }

                .col-md-offset-11 {
                    margin-left: 91.66666667%;
                }

                .col-md-offset-10 {
                    margin-left: 83.33333333%;
                }

                .col-md-offset-9 {
                    margin-left: 75%;
                }

                .col-md-offset-8 {
                    margin-left: 66.66666667%;
                }

                .col-md-offset-7 {
                    margin-left: 58.33333333%;
                }

                .col-md-offset-6 {
                    margin-left: 50%;
                }

                .col-md-offset-5 {
                    margin-left: 41.66666667%;
                }

                .col-md-offset-4 {
                    margin-left: 33.33333333%;
                }

                .col-md-offset-3 {
                    margin-left: 25%;
                }

                .col-md-offset-2 {
                    margin-left: 16.66666667%;
                }

                .col-md-offset-1 {
                    margin-left: 8.33333333%;
                }

                .col-md-offset-0 {
                    margin-left: 0%;
                }
            }

            .card_length {
                margin-bottom: 5px;
                /*margin-top: 3em;*/
                padding: 0px 15px;
                box-sizing: border-box;
                -moz-box-sizing: border-box;
                -webkit-box-sizing: border-box;
            }

            .centre_alignment {
                width: 60%;
                margin: auto;
            }

            .card_count {
                font-weight: bold;
                /*text-align: end;
                font-size: 24px;*/
            }

            .button_style {
                padding-top: 10px;
                padding-bottom: 10px;
                font-size: 13px;
                position: relative;
            }
            .button_style:before{
                content: "";
                position: absolute;
                right:15px;
                top:-6px;
                width: 0;
                height: 0;
                border-left: 10px solid transparent;
                border-right: 10px solid transparent;
                border-top: 10px solid #fff;
            }
            .group-summary{text-align: left;}
            .group-summary h1{font-size: 20px;border-bottom: 1px solid #989898;text-transform: uppercase;}
            .card_length{padding-left:0px;}
            .card_one {
                background-color: #ffffff;
                margin:0px 0px 20px 0px;
                width:100%;


            }

            .card_two {
                background-color: #6dbe3d;
            }

            .card_three {
                background-color: #d33d3e;

            }

            .white {
                font-weight: bold;
                color: #fff;
            }

            .green {
                font-weight: bold;
                color: #6dbe3d;
                font-size: smaller;
            }
        </style>

             <div class="margin_div">
            <div class="summary-coontent">
            
            ${this.loading ? html`
            <loader-element></loader-element>
            ` : html`
            ${!this._rowsOrColumns(this.rows) ? html`
            ${this.groups.map((group, groupIndex) => html`
            <div class="row">
                <div class="col-md-12 group-summary">
                    <h1>${group}</h1>
                </div>
            </div>
            <div class="row">
                ${this._computeData(groupIndex).map(item => html`
                 <div class="col-md-4 card_length">
                    <paper-card class="card_one">
                        <div class="card-content card_count">

                            ${item.count}
                            
                            <div style="font-size: smaller;font-weight: initial;">${item.description}</div>
                            <div style="font-size: smaller;font-weight: initial;">${item.kind}</div>
                            <div style="font-size: smaller;font-weight: initial;">${item.type}</div>

                        </div>

                        <div class="card-actions">
                            <div class="button_style">${item.name}</div>
                        </div>
                    </paper-card>
                </div>
                
                
                `)}
                <div class="cb"></div>

            </div>
            `)}
            ` : html`
            <div class="row">
                    <div class="col-md-12">
                        <h1 style="text-align: center;">${this.title}</h1>
                    </div>
                </div>
                <div class="row">
                    ${this.rows.map(item => html`
                        <div class="col-md-4 card_length">
                            <paper-card class="card_one">
                                <div class="card-content card_count">${item.count}</div>
                                <div class="card-actions">
                                    <div class="button_style green">${item.name}</div>
                                </div>
                            </paper-card>
                        </div>
                    `)}
                </div>
            
            `}
            `}
            </div>

        </div>
        `;
  }

  _computeData(index) {
    return this.data[index];
  }

  _rowsOrColumns(cData) {
    if (cData === undefined) {
      return;
    }

    return cData.length;
  }

  onLoadData(dsc) {
    this.loading = false;
  }

}

customElements.define(SummaryBoxes.is, SummaryBoxes);