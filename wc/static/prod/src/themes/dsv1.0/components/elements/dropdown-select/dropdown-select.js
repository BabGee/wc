import{dataSourceMixin,utilsMixin,SerializableElement,css,html,RENDER_M_SIDE_BY_SIDE}from"../../../../../components/adaptive-ui.js";const DropdownSelectBase=class extends utilsMixin(dataSourceMixin(SerializableElement)){static get is(){return"dropdown-select"}static get properties(){return{icon:String,title:String,selected:String,sectionSize:String}}getName(){const el=this.e.formName.split("=");return el[0]}validate(){if(this.e.required&&!this.getValue()||this.getValue()===void 0){return new this.Validation(!1,"invalid")}return new this.Validation(!0,"valid")}valid(){}invalid(){}_dataJoined(data){const self=this;var concatExclude=[];if(self.e.details.concat_exclude){concatExclude=self.e.details.concat_exclude.split(",")}return data.filter(function(item,index){return!(0===index||concatExclude.includes(index+"")||self.cols.length&&"href"===self.cols[index].type)}).join(" ")}dscDataName(){return this.e.defaultValue}firstUpdated(changedProperties){super.firstUpdated(changedProperties);const self=this;this.loader.then(()=>{self.q="";self.currentGroups=self.groups;self.currentData=self.data})}_computeItemsCount(rows){return rows.length}_shouldFilter(items){var b=this._computeItemsCount(items);return 10<b}_computeItems(rows,q){const filteredItems=[];for(let i=0;i<rows.length;i++){const item=rows[i];if(q){var query=q.toLowerCase(),name=item[1].toLowerCase();if(-1!==name.indexOf(query)){filteredItems.push(item)}}else{filteredItems.push(item)}}return filteredItems}checkSectionSizeHalf(){if("12|12|12"===this.sectionSize){return!0}else if("12|24|24"===this.sectionSize){return!0}else if("12|12|24"===this.sectionSize){return!0}else{return!1}}init(pElement,loader){super.init(pElement,loader);var self=this;self.required=this.e.required||pElement.min&&0<pElement.min;self.title=DropdownSelectBase.toTitleCase(pElement.name);self.icon=pElement.icon;self.params=self.pl.paramsCopy();self.sectionSize=pElement.sectionSize;if(pElement.kind){this.selected=+pElement.kind}else if(self.required&&0<self.rows.length){self.selected=self.rows[0][0]}self.loader=this.loadData()}};var dropdownSelect={DropdownSelectBase:DropdownSelectBase};const DropDownSelectStyles=css`
#warning-text{
  display:none;
}
.paddingTop{
  padding-top:14px!important;
}
.dropdown-container{
  width: 100%;
  margin: 0;
  padding: 0;
  position: relative;
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
`;var dropdownSelectCss={DropDownSelectStyles:DropDownSelectStyles};class DropdownSelect extends DropdownSelectBase{static get styles(){return[DropDownSelectStyles,css`
        :host {
          display: block;
        }
      `]}static get properties(){return{icon:String,title:String,q:{type:String,value:""},contentOpen:{type:Boolean},options:{type:Array},itemClick:{type:Boolean},active:{type:Boolean},deletedSelection:Boolean}}constructor(){super();this.contentOpen=!1;this.selected=null;this.active=!0;this.itemClick=!1;this.deletedSelection=!1}renderDefault(){if(this.renderMode===RENDER_M_SIDE_BY_SIDE){return html`
        RENDER_M_SIDE_BY_SIDE not supported
      `}else{return html`

    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css"> -->
    <style>
    .column-container{
      padding: .75rem;
    }
    
    </style>


    <div class="column-container">
      <div class="dropdown-container ${this.checkSectionSizeHalf()?"paddingTop":""} " id="dropdownSelect">
        <div @load=${this.getIcons} id="drp-cont" class="ss-dropdown-header ss-single-selected ${this.contentOpen?"ss-open-below":""}" @click="${this._onMultiSelectContainerClick}">
          <div class="ss-dropdown-label">
            <span class="label-name placeholder lbl has-text-weight-bold">${this.title}</span>
            <span class="placeholder title" style="height: 16px">${this.getSelected(this.selected)}</span>
          </div>
          <fa-icon class="fas fa-times ss-deselect ss-plus" @click="${this._onDeselectClick}" style="fill: rgb(1, 50, 67);height: 15px;width: 15px;position: absolute;top: 9px;"></fa-icon>
          <div class="ss-icons">
            <span class="ss-arrow">
              <span id="arrow" class="${this.contentOpen?"arrow-up":"arrow-down"}"></span>        
            </span>
          </div>
        </div>
        <div class="ss-dropdown-collapsable ss-content ${this.contentOpen?"ss-open":""}">
            <div class="ss-search">
              <input 
                type="search" 
                placeholder="Enter Search" 
                tabindex="0" 
                aria-label="Enter Search"
                @click=${this._onSearchInputClick}"  
                @keyup=${this._onSearchKeyUp}" 
                @focus=${this._onSearchFocus}">
            </div>

            ${this.loading?html`
                 <div class="ss-option ss-disabled" >Searching options ... </div>`:html`

                    <ul class="ss-dropdown-items">
                        ${this.selectOptions(this.rows).length?html`
                          ${this.selectOptions(this.rows).map(option=>html`
                          <li @click="${this._onOptionClick}" class="ss-option ${option.selected?"ss-option-selected":""}" data-value="${option.value}">${option.label}</li>
                          `)}
                        `:html`
                            <div class="ss-option ss-disabled" >No Results</div>
                        `}
                    </ul>
              `}
        </div>
      
      </div>
      <p id="warning-text" style="color:#ff3860;">${this.e.name} required</p>
    </div>
    `}}getValue(){return this.selected}getIcons(){const icon=this.shadowRoot.querySelector(".ss-deselect");if(this.selected){icon.classList.add("active")}else{icon.classList.remove("active")}}valid(){const label=this.shadowRoot.querySelector(".lbl"),cont=this.shadowRoot.querySelector("#drp-cont"),title=this.shadowRoot.querySelector(".title"),arrow=this.shadowRoot.querySelector("#arrow"),warningText=this.shadowRoot.querySelector("#warning-text");label.classList.remove("lbl-danger");label.classList.add("lbl-success");cont.classList.remove("cont-danger");cont.classList.add("cont-success");title.classList.add("lbl-success");arrow.classList.remove("is-arrow-danger");arrow.classList.add("is-arrow-success");warningText.style.display="none";setTimeout(()=>{label.classList.remove("lbl-success");title.classList.remove("lbl-success");cont.classList.remove("cont-success");arrow.classList.remove("is-arrow-success")},3e3)}invalid(){const label=this.shadowRoot.querySelector(".lbl"),cont=this.shadowRoot.querySelector("#drp-cont"),warningText=this.shadowRoot.querySelector("#warning-text"),arrow=this.shadowRoot.querySelector("#arrow");label.classList.remove("lbl-success");label.classList.add("lbl-danger");cont.classList.remove("cont-success");cont.classList.add("cont-danger");arrow.classList.remove("is-arrow-success");arrow.classList.add("is-arrow-danger");warningText.style.display="block"}getOption(value){const o=this.rows.find(function(element){return element[0]==value});if(o){return{label:o[1],value:o[0],selected:this.selected==o.value}}}getSelections(){const ss=this.selections.map(s=>this.getOption(s));console.log(ss);return ss}getSelected(){const self=this;if(this.selected){const option=this.getOption(this.selected);this.loader.then(()=>{const labelContainer=self.shadowRoot.querySelector(".ss-dropdown-label");if(this.active){labelContainer.classList.add("form-field--is-active")}else{labelContainer.classList.remove("form-field--is-active")}if(label.classList.contains("active")){}});return option.label}else{if(this.deletedSelection){const labelContainer=self.shadowRoot.querySelector(".ss-dropdown-label");labelContainer.classList.remove("form-field--is-active");this.deletedSelection=!1;this.getIcons()}}}selectOptions(){const options=[];for(var i=0;i<this.rows.length;i++){const item=this.rows[i],option={value:item[0],label:item[1]};option.selected=this.selected==option.value;options.push(option)}return options}_onMultiSelectContainerClick(e){const warningText=this.shadowRoot.querySelector("#warning-text"),label=this.shadowRoot.querySelector(".lbl");"block"==warningText.style.display?warningText.style.display="none":warningText.style.display="none";if(label.classList.contains("lbl-danger")){label.classList.remove("lbl-danger")}e.preventDefault();e.stopPropagation();this.contentOpen?this.close():this.open()}_onDeselectClick(e){e.stopPropagation();this.selected=null;this.deletedSelection=!0}_onSearchInputClick(evt){evt.stopPropagation()}_onSearchKeyUp(e){const searchValue=e.target.value;this.updateParams("q",searchValue)}_onSearchFocus(){this.open()}_onOptionClick(e){e.preventDefault();e.stopPropagation();const selected=e.currentTarget.dataset.value;this.selected=selected;this.close();this.getIcons()}open(){if(this.contentOpen){return}this.contentOpen=!0}close(){if(!this.contentOpen){return}this.contentOpen=!1}firstUpdated(){const self=this;this.loader.then(()=>{if(this.selected){this.getIcons()}});document.addEventListener("click",function(e){if(!self.shadowRoot.contains(e.currentTarget)){self.close()}else{console.log(e.target);console.log(self.contains(e.target))}})}}customElements.define(DropdownSelect.is,DropdownSelect);export{dropdownSelect as $dropdownSelect,dropdownSelectCss as $dropdownSelectCss,DropdownSelectBase,DropDownSelectStyles};