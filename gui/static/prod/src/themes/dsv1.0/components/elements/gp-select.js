import{GpSelectBase}from"../../../../elements/base/gp-select.js";import{html}from"../../../../../node_modules/lit-element/lit-element.js";import"../../../bulkit/icons/my-icons.js";class GpSelect extends GpSelectBase{constructor(){super()}static get properties(){return{icon:String,dataName:{type:String,value:""},service:String,title:String,maxlength:Number,pattern:String,q:{type:String,value:""},dropdownValue:Object,rows:{value:[]},params:{type:Object,value:""},columnSize:{type:Array}}}renderDefault(){return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.css" type="text/css"/>
      <style>
      .center{
        display: flex;
        justify-content: center;
        align-items: center;
      }
      /* Account dropdown select */
      .account-select{
        position: relative;
       -moz-user-select: none; 
       -webkit-user-select: none; 
       -ms-user-select:none; 
       user-select:none;
       -o-user-select:none;"
      }
      .account-select .account-header{
        background: #fff;
        padding: 10px 20px 10px 10px;
        position: relative;
        display:inline-block;
        cursor: pointer;
      }
      .account-header p {
        color: #013243;
      }
      .account-header p span{
        color: #6c7a89;
      }
      .account-select .account-header::after{
        content: '';
        width: 8px;
        height: 8px;
        border-left: 2px solid #4a4a4a;
        border-bottom: 2px solid #4a4a4a;
        border-right: 2px solid transparent;
        border-top: 2px solid transparent;
        position: absolute;
        transform: rotate(-43deg);
        top: 23px;
        right:4px;
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
        display: none;
        position:absolute;
        padding: 10px 20px 10px 10px;
      }
      .account-body ul li{
        cursor: default;
        border-bottom: 1px solid #ececec;
      }
      .account-body ul li:hover{
        background-color: #f1f1f1;

      }
      .list-active{
        background-color: #f1f1f1;
      }
      .account-body ul li:last-child{
        border-bottom: 0 solid transparent;
      }
      </style>
        <div class="account-select">
          <div class="account-header" @click='${()=>this.dropdown()}'>
              <div class="account-item is-flex">
                  <div class="profile-pic center">
                  <iron-icon icon=${this.e.icon||"icons:input"}></iron-icon>
                  </div>
                  <div class="accout-details center">
                      <p class="is-capitalized">${this.e.name}</p>
                  </div>
              </div>
          </div>
          <div class="account-body">
              <ul>
              ${this._computeItems(this.rows,this.q).map(data=>html`
              <li id="list-${data[0]}" class="" selected="${this.e.kind===data[0]}"  @click='${()=>this.dropdown(this._dataJoined(data),data[0])}'>
                <div class="account-item is-flex">
                      <div class="profile-pic center">
                      <iron-icon icon=${this.e.icon||"icons:input"}></iron-icon>
                      </div>
                      <div class="accout-details center">
                          <p class="is-capitalized">${this._dataJoined(data)}</p>
                      </div>
                  </div>
              </li>
              `)}
              </ul>
          </div>
      </div>
        `}dropdown(link,id){if(null==link||link==void 0){this.shadowRoot.querySelector(".account-body").classList.toggle("is-block")}else{const headTitle=this.shadowRoot.querySelector(".account-header").querySelector("p"),allLists=this.shadowRoot.querySelector(".account-body").querySelectorAll("li");headTitle.innerHTML=`${link}`;allLists.forEach(list=>list.className="");this.shadowRoot.querySelector("#list-"+id).className="list-active";this.shadowRoot.querySelector(".account-body").classList.toggle("is-block")}}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}}customElements.define(GpSelect.is,GpSelect);