import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import { DropdownSelectBase } from "../../../../elements/base/dropdown-select.js";
import "../../../../../node_modules/slim-select/dist/slimselect.min.js";
import { RENDER_M_DEFAULT, RENDER_M_SIDE_BY_SIDE } from "../../../../components/e-list.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class DropdownSelect extends DropdownSelectBase {
  renderDefault() {
    if (this.renderMode === RENDER_M_SIDE_BY_SIDE) {
      return html`
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/slim-select/1.23.0/slimselect.min.css" rel="stylesheet"/>
        <style>
          /*Dropdown select*/
          .dropdown-item-select{
            position: relative;
            padding:11px;
          -moz-user-select: none; 
          -webkit-user-select: none; 
          -ms-user-select:none; 
          user-select:none;
          -o-user-select:none;
          }
        .dropdown-item-select .dropdown-item-header{
          background: #fff;
          padding: 16px;
          display:inline-block;
          position: relative;
          cursor: pointer;
          width: 100%;
          border-radius: 6px;
          border: 1px solid #e5e5e5;
          /*-webkit-box-shadow: 0px 0px 5px -2px rgba(0,0,0,0.75);
          -moz-box-shadow: 0px 0px 5px -2px rgba(0,0,0,0.75);
          box-shadow: 0px 0px 5px -2px rgba(0,0,0,0.75);*/
        }
        .arrow{
          position: relative;
        }
        .arrow::after{
          content: '';
          width: 8px;
          height: 8px;
          border-left: 2px solid #4a4a4a;
          border-bottom: 2px solid #4a4a4a;
          border-right: 2px solid transparent;
          border-top: 2px solid transparent;
          position: absolute;
          transform: rotate(-43deg);
          top: -17px;
          right: 9px;
        }
        .dropdown-item-select .dropdown-item-header p{
          font-size: 14px;
          font-weight: 500;
          color: #4A4A4A;
        }
        .dropdown-item-body{
          background: #fff;
          display: none;
          width:98%;
          position:absolute;
          padding: 16px;
          z-index: 5000;
          padding-right:33px;
          border-radius: 6px;
          border: 1px solid #e5e5e5;
          margin-top:8px;
        }
        .dropdown-item-body ul li{
          
          border-bottom: 1px solid #f5f5f5;
          padding: 10px 20px;
          font-weight: 500;
          font-size: 14px;
        }
        .dropdown-item-body ul li:hover{
          background-color: #f1f1f1;

        }
        .is-active{
          background-color: #f1f1f1;
        }
        .active-list{
          background-color: red;

        }
        .is-hidden{
          display: none;
        }
        .is-visible{
          display:block;
        }
        .custom-width{
          width: 342px;
        }
          div.select-item label{
            font-size: 12px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.17;
            letter-spacing: normal;
            color: #4A4A4A;
          }
          /* div.select select{
            width: 317px;
            font-size: 14px;
            height: 40px;
            padding: 0 13.9px;
            display: inline-block;
            color: #202124;
            line-height: 1;
            background-color: #f6f6f6;
            border: 1px solid #ededed;
          } */
        </style>
        <div class="columns select-item">
          <div class="column is-one-quarter" style="display: flex; align-items: center;">
            <label class="label is-uppercase">Select role</label>
          </div>
          <div class="column">
          <div class="dropdown-item-select">
              <div class="dropdown-item-header" @click='${() => this.dropdown('head')}'>
                  <p>${this.e.name}</p>
                  <div id='select-div' class="select is-hidden">
                      <select id="select">
                        <option data-placeholder="true" value="" disabled hidden ?selected="${!this.e.kind}">${this.e.name}</option>
                        ${this._computeItems(this.rows, this.q).map(data => html`
                        <option id="option-${data[0]}" class="" value="${data[0]}" ?selected="${this.e.kind === data[0]}"  @click='${() => this.dropdown(this._dataJoined(data), data[0])}'>${this._dataJoined(data)}</option>
                            `)} 
                      </select>
              </div>
              <div id='arrow' class="arrow"></div>
              </div>
              <div id="dropdown-item-body" class="dropdown-item-body">
                  <ul>
                  ${this._computeItems(this.rows, this.q).map(data => html`
                  <li id="list-${data[0]}"  value="${data[0]}" ?selected="${this.e.kind === data[0]}"  @click='${() => this.dropdown(this._dataJoined(data), data[0])}'>${this._dataJoined(data)}</li>
              `)} 
                  </ul>
              </div>
          </div>

          </div>
        </div>
      `;
    } else {
      return html`
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
      <link href="https://cdnjs.cloudflare.com/ajax/libs/slim-select/1.23.0/slimselect.min.css" rel="stylesheet"/>
      <style>
        /*Dropdown select*/
        .dropdown-item-select{
          position: relative;
          padding:11px;
        -moz-user-select: none; 
        -webkit-user-select: none; 
        -ms-user-select:none; 
        user-select:none;
        -o-user-select:none;
        }
      .dropdown-item-select .dropdown-item-header{
        background: #fff;
        padding: 16px;
        display:inline-block;
        position: relative;
        cursor: pointer;
        width: 100%;
        border-radius: 6px;
        border: 1px solid #e5e5e5;
        /*-webkit-box-shadow: 0px 0px 5px -2px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 0px 5px -2px rgba(0,0,0,0.75);
        box-shadow: 0px 0px 5px -2px rgba(0,0,0,0.75);*/
      }
      .arrow{
        position: relative;
      }
      .arrow::after{
        content: '';
        width: 8px;
        height: 8px;
        border-left: 2px solid #4a4a4a;
        border-bottom: 2px solid #4a4a4a;
        border-right: 2px solid transparent;
        border-top: 2px solid transparent;
        position: absolute;
        transform: rotate(-43deg);
        top: -17px;
        right: 9px;
      }
      .dropdown-item-select .dropdown-item-header p{
        font-size: 14px;
        font-weight: 500;
        color: #4A4A4A;
      }
      .dropdown-item-body{
        background: #fff;
        display: none;
        width:98%;
        position:absolute;
        padding: 16px;
        z-index: 5000;
        padding-right:33px;
        border-radius: 6px;
        border: 1px solid #e5e5e5;
        margin-top:8px;
      }
      .dropdown-item-body ul li{
        
        border-bottom: 1px solid #f5f5f5;
        padding: 10px 20px;
        font-weight: 500;
        font-size: 14px;
      }
      .dropdown-item-body ul li:hover{
        background-color: #f1f1f1;

      }
      .is-active{
        background-color: #f1f1f1;
      }
      .active-list{
        background-color: red;

      }
      .is-hidden{
        display: none;
      }
      .is-visible{
        display:block;
      }
      .custom-width{
        width: 342px;
      }
      #warning-text{
        display:none;
      }
      </style>
      <div class="dropdown-item-select">
          <div class="dropdown-item-header" @click='${() => this.dropdown('head')}'>
              <p>${this.e.name}</p>
              <div id='select-div' class="select is-hidden">
                  <select id="select">
                    <option data-placeholder="true" value="" disabled hidden ?selected="${!this.e.kind}">${this.e.name}</option>
                    ${this._computeItems(this.rows, this.q).map(data => html`
                    <option id="option-${data[0]}" class="" value="${data[0]}" ?selected="${this.e.kind === data[0]}"  @click='${() => this.dropdown(this._dataJoined(data), data[0])}'>${this._dataJoined(data)}</option>
                        `)} 
                  </select>
          </div>
          <div id='arrow' class="arrow"></div>
          </div>
          <div id="dropdown-item-body" class="dropdown-item-body">
              <ul>
              ${this._computeItems(this.rows, this.q).map(data => html`
              <li id="list-${data[0]}"  value="${data[0]}" ?selected="${this.e.kind === data[0]}"  @click='${() => this.dropdown(this._dataJoined(data), data[0])}'>${this._dataJoined(data)}</li>
          `)} 
              </ul>
          </div>
          <p id="warning-text" style="color:#ff3860;">${this.e.name} required</p>
      </div>`;
    }
  }

  static get properties() {
    return {
      icon: String,
      dataName: {
        type: String,
        value: ''
      },
      service: String,
      title: String,
      maxlength: Number,
      pattern: String,
      q: {
        type: String,
        value: ''
      },
      dropdownValue: Object,
      rows: {
        value: []
      },
      params: {
        type: Object,
        value: ''
      },
      columnSize: {
        type: Array
      },
      selectedIndex: Number
    };
  }

  dropdown(link, data) {
    const body = this.shadowRoot.querySelector('.dropdown-item-body');
    const selectDiv = this.shadowRoot.querySelector('#select-div');
    const select = this.shadowRoot.querySelector('#select');
    const allLists = this.shadowRoot.querySelector('#dropdown-item-body').querySelectorAll('li');
    const arrow = this.shadowRoot.querySelector('#arrow');
    const selected = this.shadowRoot.querySelector('.dropdown-item-header').querySelector('p');
    const self = this;

    if (allLists.length > 10) {
      body.classList.add('is-hidden');
      arrow.classList.add('is-hidden');
      selected.className = 'is-hidden';
      selectDiv.className = ''; //to remove bulma arrow

      select.className = 'custom-width'; //add extra width to select

      const slim = new SlimSelect({
        select: this.shadowRoot.querySelector('#select'),
        placeholder: this.e.name,
        showContent: 'down',
        onChange: info => {
          selectDiv.className = 'select is-hidden'; //adding bulma back

          arrow.classList.remove('is-hidden');
          selected.className = '';
          selected.innerHTML = info.text;
          this.selectedIndex = select.value;
          self.deleteParamKeys("q", true);
          slim.destroy();
        }
      });
      slim.open(); //slim select search input from closing dropdown

      let searchInput = this.shadowRoot.querySelector(".ss-search").querySelector("input");
      searchInput.addEventListener("click", function (event) {
        event.stopPropagation();
      });
      searchInput.addEventListener("keyup", function (event) {
        let searchText = searchInput.value;
        let column = "q"; // this.deleteParamKeys(columns.concat(['q']), false);

        self.deleteParamKeys(column, false); // update new search query param

        self.updateParams(column, searchText);
      });
    } else {
      if (link == 'head') {
        this.shadowRoot.querySelector('.dropdown-item-body').classList.toggle('is-block');
      } else {
        const selected = this.shadowRoot.querySelector('.dropdown-item-header').querySelector('p');
        selected.innerHTML = link;
        this.selectedIndex = data;
        const allLists = this.shadowRoot.querySelector('#dropdown-item-body').querySelectorAll('li');
        allLists.forEach(list => list.className = '');
        const selectedList = this.shadowRoot.querySelector('#list-' + data);
        selectedList.className = 'is-active';
        this.shadowRoot.querySelector('.dropdown-item-body').classList.toggle('is-block');
      }
    }
  }

  getValue() {
    this.dropdownValue = this.selectedIndex;
    return this.dropdownValue;
  }

  valid(validation) {
    const warningText = this.shadowRoot.querySelector("#warning-text");
    warningText.style.display = "none";
  }

  invalid(validation) {
    const warningText = this.shadowRoot.querySelector("#warning-text");
    warningText.style.display = "block";
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }

}

customElements.define(DropdownSelect.is, DropdownSelect);