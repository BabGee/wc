import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import "../../../../../node_modules/@polymer/paper-button/paper-button.js";
import { ReceiptElementBase } from "../../../../elements/base/receipt-element.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class ReceiptElement extends ReceiptElementBase {
  constructor() {
    super();
  }

  render() {
    return html`
        <style>
        :host {
            display: block;
        }


        .invoice-box {
            max-width: 800px;
            margin: auto;
            padding: 30px;
            border: 1px solid #eee;
            box-shadow: 0 0 10px rgba(0, 0, 0, .15);
            font-size: 16px;
            line-height: 24px;
            font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
            color: #555;
        }

        .invoice-box table {
            width: 100%;
            line-height: inherit;
            text-align: left;
        }

        .invoice-box table td {
            padding: 5px;
            vertical-align: top;
        }

        .invoice-box table tr td:nth-child(2) {
            text-align: right;
        }

        .invoice-box table tr.top table td {
            padding-bottom: 20px;
        }

        .invoice-box table tr.top table td.title {
            font-size: 45px;
            line-height: 45px;
            color: #333;
        }

        .invoice-box table tr.information table td {
            padding-bottom: 40px;
        }

        .invoice-box table tr.heading td {
            background: #eee;
            border-bottom: 1px solid #ddd;
            font-weight: bold;
        }

        .invoice-box table tr.details td {
            padding-bottom: 20px;
        }

        .invoice-box table tr.item td{
            border-bottom: 1px solid #eee;
        }

        .invoice-box table tr.item.last td {
            border-bottom: none;
        }

        .invoice-box table tr.total td:nth-child(2) {
            border-top: 2px solid #eee;
            font-weight: bold;
        }

        @media only screen and (max-width: 600px) {
            .invoice-box table tr.top table td {
                width: 100%;
                display: block;
                text-align: center;
            }

            .invoice-box table tr.information table td {
                width: 100%;
                display: block;
                text-align: center;
            }
        }

        /** RTL **/
        .rtl {
            direction: rtl;
            font-family: Tahoma, 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
        }

        .rtl table {
            text-align: right;
        }

        .rtl table tr td:nth-child(2) {
            text-align: left;
        }


    </style>

    <div  class="invoice-box" >

        <paper-button @tap="${this.save}">Save</paper-button>
        <paper-button @tap="${this.print}">Print</paper-button>
        <!--<canvas id="canvas" style="border: 1px solid crimson;margin: auto;display: block;width: 100%;height: 100%">-->
        <!--<p>Please download a modern browser to view this content</p>-->
        <!--</canvas>-->

        <table id="invoice" cellpadding="0" cellspacing="0">
            <tr class="top">
                <td colspan="2">
                    <table>
                        <tr>
                            <td class="title">
                                <img src="/media/${this.seller.logo}" alt="logo" style="width:100%; max-width:200px;">
                            </td>
                            <td>
                                Receipt #: ${this.invoice}<br>
                                <!--<br>-->
                                Ref: ${this.reference}<br>
                                Created: ${this.created}
                                <!--Due: -->
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>

            <tr class="information">
                <td colspan="2">
                    <table>
                        <tr>
                            <td>
                                ${this.seller.name}.<br>
                                <!--12345 Sunny Road<br>-->
                                <!--Sunnyville, CA 12345-->
                            </td>

                            <td>
                                ${this.buyer.name}<br>
                                <!--John Doe<br>-->
                                <!--john@example.com-->
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>

            <!--<tr class="heading">-->
                <!--<td>-->
                    <!--Payment Method-->
                <!--</td>-->

                <!--<td>-->
                    <!--Check #-->
                <!--</td>-->
            <!--</tr>-->

            <!--<tr class="details">-->
                <!--<td>-->
                    <!--Check-->
                <!--</td>-->

                <!--<td>-->
                    <!--1000-->
                <!--</td>-->
            <!--</tr>-->

            <tr class="heading">
                <td>
                    Item
                </td>

                <td>
                    Quantity
                </td>

                <td>
                    Price
                </td>
            </tr>
            
            ${this.items.map(item => html`
                <tr class="item">
                    <td>
                        ${item.name}
                    </td>

                    <td>
                        ${item.quantity}
                    </td>

                    <td>
                        ${item.unit_price}
                    </td>
                </tr>`)}


            <!--<tr class="item">-->
                <!--<td>-->
                    <!--Hosting (3 months)-->
                <!--</td>-->

                <!--<td>-->
                    <!--$75.00-->
                <!--</td>-->
            <!--</tr>-->


            <!--<tr class="item last">-->
                <!--<td>-->
                    <!--Domain name (1 year)-->
                <!--</td>-->

                <!--<td>-->
                    <!--$10.00-->
                <!--</td>-->
            <!--</tr>-->

            <tr class="total">
                <td></td>

                <td>
                    Total: ${this._getOverallTotal(this.sums)}
                </td>
            </tr>
        </table>
    </div>

    <iframe id="iframe" style="display:none"></iframe>

        `;
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  } // todo override kept because of qs
  // this is also a duplicate in invoice element


  printPdf(autoPrint) {
    const self = this;
    var doc = new jsPDF('p', 'mm', 'a3');
    let WIDTH = 210;
    const HEIGHT = 297;
    let X = 0;
    let Y = 0; // add a margin on top

    Y += 5; // print receiver

    X += 60;
    const LINE_HEIGHT = 7;
    Y += 20; // todo should be bolder

    doc.setFontType('bold');
    doc.text(X, Y, self.seller.name);
    doc.setFontType('normal'); // Y+=LINE_HEIGHT;
    // doc.text( X,Y, '2059 Camden Ave, #118');
    // Y+=LINE_HEIGHT;
    // doc.text(X,Y, 'San Jose, CA 95124');
    // Y+=LINE_HEIGHT;
    // doc.text(X,Y, '(408) 625-7188');
    // Y+=LINE_HEIGHT;
    // todo should be email link
    // doc.text(X,Y, 'ar@andolasoft.com');
    // Y+=LINE_HEIGHT;
    // doc.text( X,Y, 'http://www.andolasoft.com');

    Y += 20;
    X = 20;
    doc.setTextColor(0, 0, 255);
    doc.setFontSize(30);
    doc.text(X, Y, 'INVOICE');
    doc.setFontSize(16);
    doc.setTextColor(31, 8, 34);
    const GAP = 200;
    Y += LINE_HEIGHT;
    doc.setFontType('bold');
    doc.text(X, Y, 'BILL TO');
    doc.setFontType('normal');
    doc.text(X + GAP, Y, 'Receipt #' + self.invoice); // print payer

    Y += LINE_HEIGHT;
    doc.text(X, Y, self.buyer.name);
    doc.text(X + GAP, Y, 'DATE ' + self.created);
    Y += LINE_HEIGHT; // doc.text( X,Y, 'Westlands Commercial Centre, ');
    // doc.text( X+GAP,Y, 'DUE DATE 11/06/2017');
    // Y+=LINE_HEIGHT;
    // doc.text( X,Y, 'Ring Road Westlands, Nairobi, ');

    doc.text(X + GAP, Y, 'TERMS Due on receipt');
    Y += LINE_HEIGHT;
    doc.text(X, Y, 'Kenya');
    Y += 10;
    doc.setLineWidth(1.5);
    doc.line(X, Y, 290, Y);
    Y += 20;
    doc.setFillColor(222, 234, 242);
    doc.rect(X, Y, 290, 10, 'F');
    Y += 10; // Items Table

    const c1 = 0.4;
    const c2 = 0.2;
    const c3 = 0.2;
    const c4 = 0.2; // X += ;

    Y -= 4;
    WIDTH = 300;
    doc.setTextColor(77, 150, 202);
    const x1 = X;
    doc.text(x1, Y, 'ITEM');
    const x2 = x1 + c1 * WIDTH;
    doc.text(x2, Y, 'QTY');
    const x3 = x2 + c3 * WIDTH;
    doc.text(x3, Y, 'RATE');
    const x4 = x3 + c4 * WIDTH;
    doc.text(x4, Y, 'AMOUNT');
    doc.setTextColor(31, 8, 34);
    Y += 10;

    for (var i = 0; i < self.items.length; i++) {
      const item = self.items[i];
      Y += LINE_HEIGHT;
      doc.setFontType('bold');
      doc.text(x1, Y, item['name']);
      doc.setFontType('normal');
      doc.text(x2, Y, item['quantity'].toString());
      doc.text(x3, Y, item['unit_price'].toString());
      doc.text(x4, Y, item['sub_total'].toString());
    }

    Y += 20;
    doc.setDrawColor(255, 0, 0); // draw red lines

    doc.setLineWidth(1.3);
    this.dottedLine(doc, X, Y, 300, Y, 8);
    Y += LINE_HEIGHT;
    doc.text(x1, Y, 'Final amount for order .');
    Y += 10;
    const INDENT = 200;
    doc.text(INDENT, Y, 'PAYMENT');
    doc.text(INDENT + 50, Y, String(self._getColumnTotal('cart_item__total')));
    Y += LINE_HEIGHT;
    doc.text(INDENT, Y, 'BALANCE DUE');
    doc.setFontType('bold');
    doc.text(INDENT + 50, Y, '$0.00');
    doc.setFontType('normal');
    doc.setFontSize(60);
    doc.setTextColor(0, 255, 0);
    doc.text(100, 140, 'PAID', null, 35);

    if (autoPrint) {
      doc.autoPrint();
      var iframe = this.qs('#iframe');
      iframe.src = doc.output('dataurlstring');
    } else {
      doc.save('Invoice' + self.reference + '.pdf');
    }
  }

  init(pElement, loader) {
    super.init(pElement, loader);
  }

}

customElements.define(ReceiptElement.is, ReceiptElement);