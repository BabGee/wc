import{utilsMixin,SerializableElement,css,html}from"../../../../../components/adaptive-ui.js";const StaticDropdownSelectBase=class extends utilsMixin(SerializableElement){constructor(){super();this.data=[];this.contentOpen=!1;this.selected=null}static get is(){return"static-dropdown-select"}static get properties(){return{icon:String,items:{type:Object},color:String,vid:Object,title:String,required:Boolean,dropdownValue:Object,data:Array,columnSize:{type:Array},contentOpen:Boolean,selected:String,sectionSize:String}}getName(){return this.e.formName}validate(){if(this.e.required){return new this.Validation(!!this.getValue(),"")}return new this.Validation(!0,"valid")}valid(){}invalid(){}firstUpdated(changedProperties){super.firstUpdated(changedProperties);this.parseData()}parseData(){const parsed=[];let keys=!1,titles=[];for(var i=0;i<this.items.length;i++){const item=this.items[i];if("object"===typeof item){parsed.push(item)}else{if(!keys){titles=item;keys=!0;continue}const obj={};for(var j=0;j<titles.length;j++){obj[titles[j]]=item[j]}parsed.push(obj)}if(item.selected||this.e.kind&&item.id===this.e.kind){this.dropdownValue=item.id;this.selected=item.name}}this.data=parsed}init(pElement,loader){super.init(pElement,loader);var self=this;self.required=this.e.required||pElement.min&&0<pElement.min;self.title=StaticDropdownSelectBase.toTitleCase(pElement.name);self.icon=pElement.icon;self.items=JSON.parse(pElement.defaultValue);self.sectionSize=pElement.sectionSize}checkSectionSizeHalf(){if("12|12|12"===this.sectionSize){return!0}else if("12|24|24"===this.sectionSize){return!0}else if("12|12|24"===this.sectionSize){return!0}else{return!1}}};var staticDropdownSelect={StaticDropdownSelectBase:StaticDropdownSelectBase};const StaticDropDownSelectStyles=css`
#warning-text{
  display:none;
  padding: 0px;
    // margin: 0;
    // margin-left: 17px;
    // position: relative;
    // top: -12px;
    // font-size: .75rem;

    // margin-block-start: 1em;
    // margin-block-end: 1em;
    // margin-inline-start: 0px;
    // margin-inline-end: 0px;
}
}
.main-container {
    padding: .75rem;
  }

option{
    font-size: 16px;
    border-width: 1px!important;
    border-style: solid!important!;
    border-color: rgb(183, 181, 181)!important;
    border-image: initial!important;     
    }

option:focus{
  box-shadow:none!important;
}

#input{
    width: 100%!important;
    border-width: 1px;
    border-style: solid;;
    border-color: rgb(183, 181, 181);
    border-image: initial;     
          
}

#input:focus{
  box-shadow:none!important;
}
#input:active{
  box-shadow:none!important;
}

.select:not(.is-multiple):not(.is-loading)::after {
  border-color: #757575!important;
  right: 1.5em!important;
  
}

.is-danger {
  color: rgb(255, 56, 96)!important;
  border-width: 2px!important;
  border-style: solid!important;
  border-color: rgb(255, 56, 96)!important;
}

.is-success{
  color: rgb(35, 209, 96)!important;
  border-width: 2px!important;
  border-style: solid!important;
  border-color: rgb(35, 209, 96)!important;
}


////////////

.paddingTop {
  padding-top:14px!important;
}

.card-header{
  padding-left: 32px;
  height: 90px;
  padding-right: 32px;
  display: flex;
  align-items: flex-start;
  align-content: center;
  flex-wrap: wrap;
  justify-content: space-between;
    
}
.l-title {
    position: relative;
    top: -13px;
  }
  .scroll-bar {
    max-height: 404px;
    overflow: auto;
  }



  .column-container{
    margin-top:30px!important;
  }





  .dropdown-container{
    
    margin: 0px;
    padding: 0px;
    position: relative;
    // margin-left: 36px;
  }
  .ss-dropdown-header, .ss-dropdown-collapsable {
    // width: 100%;
    padding: 15px 20px;
    background-color: #fff;
    border-radius: 4px;
    color: rgb(1, 50, 67);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid rgb(183, 181, 181);
    cursor: pointer;
    box-shadow: 0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)
  }
  .ss-icons{
    display: flex;
    justify-content: center;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    position: relative;
    top: 2px;
  }
  .label-name{
    position: relative;
    top: 0;
    -webkit-transition: all 0.4s;
    transition: all 0.4s;
    color: rgb(1, 50, 67);
    font-size: 16px;
  }
  
  .ss-single-selected .ss-arrow {
    display: flex;
    align-items: center;
    flex: 0 1 auto;
    margin: 0 6px 0 6px; 
  }
  .ss-single-selected .ss-arrow span {
    border: solid #666666;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
    transition: transform .2s, margin .2s; 
  }
  .ss-single-selected .ss-arrow span.arrow-up {
      transform: rotate(-135deg);
      margin: 10px 0 0 0; 
      top: 4px;
      position: relative;
  }
  .ss-single-selected .ss-arrow span.arrow-down {
      transform: rotate(45deg);
      // margin: -17px; 
  }
  .ss-dropdown-collapsable{
    top: 73px;
    display: none;
    position: absolute;
    padding-right: 16px;
    overflow-y: auto;
    right: 0;
    left: 0;
    z-index: 99;
    cursor: initial;
    transform-origin: center top;
    transition: transform 0.2s ease 0s, opacity 0.2s ease 0s;
    opacity: 0;
  }
  .ss-dropdown-collapsable::before{
    content: '';
    width: 0;
    height: 10px;
    position: absolute;
    top: -30px;
    border-bottom: 10px solid #fff;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid transparent;
  }
  
  .ss-dropdown-collapsable .ss-search {
    width: 100%;
  }
  
  .ss-dropdown-collapsable .ss-search input {
    display: inline-flex;
    font-size: inherit;
    line-height: inherit;
    flex: 1 1 auto;
    width: inherit;
    min-width: 0px;
    height: 30px;
    padding: 6px 8px;
    margin: 0;
    border: 1px solid rgb(183, 181, 181);
    border-radius: 4px;
    background-color: #ffffff;
    outline: 0;
    text-align: left;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -webkit-appearance: textfield; 
  }
  .ss-dropdown-collapsable ul.ss-dropdown-items {
    list-style-type: none;
    padding: 0;
    margin-bottom: 0;
    max-height: 196px;
    overflow-y: auto;
  }
  .ss-dropdown-collapsable ul.ss-dropdown-items li {
    padding: 10px;
    cursor: pointer;
  }
  .ss-dropdown-collapsable ul.ss-dropdown-items li:hover{
    background-color: #e5e5e5;
  }
  
  .ss-option:not(.ss-disabled).ss-option-selected{
    background-color:var(--app-secondary-color);
    color: #fff;
  }
  
  .ss-dropdown-collapsable.ss-open{
    opacity: 1;
    display: block;
    transform: scaleY(1);
  }
  .ss-plus{
    display: none;
  }
  .ss-plus.active{
    display: block;
    position: absolute;
    right: 43px;
  }
  .form-field--is-active .label-name{
    transform: translateY(-24px);
    position: absolute;
    font-size: 12px;
    left:3px;
    font-weight: 700;
    width: 100%;
    color: rgb(1, 50, 67);
    letter-spacing: 0.5px;
    pointer-events: none;
    padding-bottom: 10px;
  }
  .is-arrow-danger {
    border-color:rgb(255, 56, 96)!important;
  }
  .is-arrow-success{
    border-color: #23d160 !important;
  }
  
  .lbl-danger{
    color: #ff2b56;
  }
  .cont-danger{
    border: 2px solid #ff2b56;
  }
  
  .lbl-success{
    color: #23d160 !important;
  }
  .cont-success{
    border: 2px solid #23d160;
  }


`;var staticDropdownSelectCss={StaticDropDownSelectStyles:StaticDropDownSelectStyles};class StaticDropdownSelect extends StaticDropdownSelectBase{static get styles(){return[StaticDropDownSelectStyles,css`
        :host {
          display: block;
        }
      `]}renderDefault(){return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">

<!-- <div class="main-container">
  <div class="field">
    <div class="control">
      <div class="select" style="width: 100%;">
        <select id="input" style="width: 100%;">
        <option data-placeholder="true" value="" disabled hidden ?selected="${!this.dropdownValue}">${this.e.name}</option>    
        ${this.data.map(item=>html`<option value="${item.id}" ?selected="${this.dropdownValue===item.id}">${item.name}</option>`)}
        </select>
      </div>
    </div>
  </div> -->


<div class="main-container">
  <div class="dropdown-container" style="${this.checkSectionSizeHalf()?"padding-top:30px;":""}"  id="dropdownSelect">
            <div id="drp-cont" class="ss-dropdown-header ss-single-selected ${this.contentOpen?"ss-open-below":""}" @click="${this.operateDp}">
              <div id="dropdownAnimate" class="ss-dropdown-label">
                <span id="label" class="label-name placeholder lbl is-active ">${this.e.name}</span>
                <span id="placeholder" class="placeholder" style="height: 16px"></span>
              </div>
              <fa-icon class="fas fa-times ss-deselect ss-plus" @click="${this._onDeselectClick}" style="fill: rgb(1, 50, 67);height: 15px;width: 15px;position: absolute;top: 9px;"></fa-icon>
              <div class="ss-icons">
                <span class="ss-arrow">
                  <span id="arrow" class="${this.contentOpen?"arrow-up":"arrow-down"}"></span>        
                </span>
              </div>
            </div>
              <div style="margin-top:14px;" class="ss-dropdown-collapsable ss-content ${this.contentOpen?"ss-open":""}">

                          <ul id="dropdownList" class="ss-dropdown-items">
                            
                              ${0==this.data.map.length?html`
                                      <li class="ss-option">No values present. We are working on it.</li>

                              `:html`

                                  ${this.data.map(item=>html`
                                          <li  @click= "${this.optionSelected}" option_value="${item.id}" class="ss-option ${item.selected?"ss-option-selected":""}">${item.name}</li>


                                  `)}
                            
                            
                            `}
                             
                          </ul>
                    
              </div>
        
          </div>
     

</div>


</div>  <!-- main-container -->

<p id="warning-text" style="color:#ff3860; padding-top:14px;">${this.e.name} required</p>

`}getSelected(){const dropdownAnimate=this.shadowRoot.querySelector("#dropdownAnimate"),placeholder=this.shadowRoot.querySelector("#placeholder");if(this.selected){dropdownAnimate.classList.add("form-field--is-active");placeholder.innerText=this.selected}else{dropdownAnimate.classList.remove("form-field--is-active")}}optionSelected(event){event.preventDefault();const selected=event.target.getAttribute("option_value"),placeholder=this.shadowRoot.querySelector("#placeholder"),dropdownItems=this.shadowRoot.querySelector("#dropdownList").getElementsByTagName("li"),dropdownAnimate=this.shadowRoot.querySelector("#dropdownAnimate");dropdownAnimate.classList.add("form-field--is-active");for(var i=0;i<dropdownItems.length;i++){dropdownItems[i].classList.remove("ss-option-selected")}event.currentTarget.className+=" ss-option-selected";placeholder.innerText=event.target.innerText;this.dropdownValue=selected;this.operateDp()}operateDp(){if(!this.contentOpen){this.contentOpen=!0}else{this.contentOpen=!1}}constructor(){super()}getValue(){return this.dropdownValue}valid(){const warningText=this.shadowRoot.querySelector("#warning-text"),label=this.shadowRoot.querySelector("#label"),select=this.shadowRoot.querySelector("#drp-cont"),arrow=this.shadowRoot.querySelector("#arrow");select.classList.remove("is-danger");select.classList.add("is-success");label.classList.remove("lbl-danger");label.classList.add("lbl-success");arrow.classList.remove("is-arrow-danger");arrow.classList.add("is-arrow-success");warningText.style.display="none";setTimeout(()=>{select.classList.remove("is-success");label.classList.remove("lbl-success");arrow.classList.remove("is-arrow-success")},3e3)}invalid(){const warningText=this.shadowRoot.querySelector("#warning-text"),label=this.shadowRoot.querySelector("#label"),select=this.shadowRoot.querySelector("#drp-cont"),arrow=this.shadowRoot.querySelector("#arrow");warningText.style.display="block";select.classList.remove("is-success");select.classList.add("is-danger");label.classList.remove("lbl-success");label.classList.add("lbl-danger");arrow.classList.remove("is-arrow-success");arrow.classList.add("is-arrow-danger")}close(){if(this.contentOpen){this.contentOpen=!1}}firstUpdated(changedProperties){super.firstUpdated(changedProperties);this.getSelected();const self=this;document.addEventListener("click",function(event){if(!("placeholder"==event.path[0].id||"drp-cont"==event.path[0].id||"arrow "==event.path[0].id||"placeholder label-name"==event.path[0].className||"label-name placeholder lbl is-active has-text-weight-bold"==event.path[0].className||"ss-dropdown-header ss-single-selected ss-open-below"==event.path[0].className||"ss-dropdown-header ss-single-selected"==event.path[0].className||"ss-arrow"==event.path[0].className||"arrow-up"==event.path[0].className||"ss-dropdown-header ss-single-selected"==event.path[0].className)){self.close()}})}init(pElement,loader){super.init(pElement,loader)}}customElements.define(StaticDropdownSelect.is,StaticDropdownSelect);export{staticDropdownSelect as $staticDropdownSelect,staticDropdownSelectCss as $staticDropdownSelectCss,StaticDropdownSelectBase,StaticDropDownSelectStyles};