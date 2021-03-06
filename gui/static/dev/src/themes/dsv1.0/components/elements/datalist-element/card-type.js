import { LitElement, html } from "../../../../../../node_modules/lit-element/lit-element.js";
import "../../../../../../node_modules/@polymer/iron-image/iron-image.js";
import "../../../../../../node_modules/@polymer/paper-button/paper-button.js";
import "./card-type-header.js";
import "./card-type-footer.js";
export class CardType extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`
        <style>
        /* Card Styles */

        .item {
            display:flex;
            flex-direction:row;
            padding: 20px;
            border-radius: 2px;
            background-color: white;
            border: 1px solid #ddd;
            /*max-width: 800px;*/
            /*margin: 16px auto 0 auto;*/
        }

        .item:focus {
            outline: 0;
            border-color: #333;
        }

        .avatar {
            height: 40px;
            width: 40px;
            border-radius: 20px;
            box-sizing: border-box;
            background-color: #DDD;
        }

        .pad {
            padding: 0 16px;
            flex:1;
            flex-basis:0.000001px;
            display:flex;
            flex-direction:column;
        }

        .primary {
            font-size: 16px;
            font-weight: bold;
        }

        .secondary {
            font-size: 14px;
        }

        .dim {
            color: gray;
        }

        </style>

        <card-type-header .title="${this.title}"></card-type-header>

        <div style="height: 60vh;overflow-y: scroll;">
        ${this.data.map((item, itemIndex) => html`
        
                <div class="item">
                    <iron-image class="avatar" sizing="contain" src="/media/${item.image}"></iron-image>
                    <div class="pad">

                        <div class="primary">${item.name}</div>

                        ${this.values(item).map(vv => html`
                        <div class="secondary"> ${vv[0]} <span class="secondary dim"> ${vv[1]}</span></div>
                        `)}
                            
                        ${this.downloads(item, this.details).map(download => html`
                        <a target="_blank" 
                            class="secondary" download href="/media/${download[1]}"> Download ${download[0]}</a>
                        `)}
                            

                        <div>
                            ${item.links.map(ll => html`
                            <paper-button
                                        .dataLink=${ll}
                                        @tap="${this._action}"
                                        style="display: inline-block;">${ll.title}</paper-button>
                            
                            `)}
                        </div>

                    </div>
                </div>

        
        
        `)}

        </div>
        ${this.paginate ? html`
        <card-type-footer resources="${this.resources}"
                               language="${this.language}"
                               footer-position="${this.footerPosition}"
                               .availableSize="${this.availableSize}"
                               .totalPages="${this.totalPages}"
                               .totalElements="${this.totalElements}"
                               .oldPage="${this.oldPage}"
                               
                               size="${this.size}"
                               page="${this.page}"
                               
                               @size-change="${this._sizeChanged}"
                               @p-page="${this._pageChanged}"
                               @n-page="${this._pageChanged}">
        </card-type-footer>
        ` : html``} 
        

        `;
  }

  static get is() {
    return 'card-type';
  }

  static get properties() {
    return {
      /**
       * Contains the data which will be displayed in the table.
       */
      data: {
        type: Array,
        notify: true
      },
      pl: Object,
      details: Object,
      paginate: {
        type: Boolean,
        value: false
      },
      page: {
        type: Number
      },
      size: {
        type: Number
      },

      /**
       * The number of the previous page
       */
      oldPage: {
        type: Number,
        notify: true
      },

      /**
       * The total of elements have to be provided in case of pagination, it is mandatory.
       */
      totalElements: Number,

      /**
       * The total of pages have to be provided in case of pagination, it is mandatory.
       * It is used to compute the footer.
       */
      totalPages: Number,

      /**
       * The available size in case of pagination.
       */
      availableSize: Array,

      /**
       * If true, the rows may be selectable.
       */
      selectable: {
        type: Boolean,
        value: false
      },

      /**
       * Contains the positions of selected columns.
       * Can contain a specific data if selectableDataKey is setted.
       */
      selected: {
        type: Array
      },
      title: String
    };
  }

  _action(evt) {
    const dataAction = evt.currentTarget.dataLink;

    this.pl._dialog(dataAction.service, dataAction.params);
  }

  values(item) {
    const v = [];

    for (var property in item) {
      if (item.hasOwnProperty(property)) {
        // do stuff
        if (property !== 'links' && property !== 'image' && property !== 'name') {
          v.push([property, item[property]]);
        } else {// console.log(item[property])
        }
      }
    }

    return v;
  }

  downloads(item, details) {
    if ('download_links' in details && details['download_links'].length) {
      const v = [];

      for (var property in item) {
        if (item.hasOwnProperty(property) && details['download_links'].includes(property)) {
          v.push([property, item[property]]);
        }
      }

      return v;
    }

    return [];
  }

}
customElements.define(CardType.is, CardType);