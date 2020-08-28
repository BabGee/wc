import{dataSourceMixin,utilsMixin,SerializableElement,css,html,RENDER_M_SIDE_BY_SIDE}from"../../../../../components/adaptive-ui.js";const DropdownSelectBase=class extends utilsMixin(dataSourceMixin(SerializableElement)){static get is(){return"dropdown-select"}static get properties(){return{icon:String,title:String,selected:String}}getName(){const el=this.e.formName.split("=");return el[0]}validate(){if(this.e.required&&!this.getValue()||this.getValue()===void 0){return new this.Validation(!1,"invalid")}return new this.Validation(!0,"valid")}valid(){}invalid(){}_dataJoined(data){const self=this;var concatExclude=[];if(self.e.details.concat_exclude){concatExclude=self.e.details.concat_exclude.split(",")}return data.filter(function(item,index){return!(0===index||concatExclude.includes(index+"")||self.cols.length&&"href"===self.cols[index].type)}).join(" ")}dscDataName(){return this.e.defaultValue}firstUpdated(changedProperties){super.firstUpdated(changedProperties);const self=this;this.loader.then(()=>{self.q="";self.currentGroups=self.groups;self.currentData=self.data})}_computeItemsCount(rows){return rows.length}_shouldFilter(items){var b=this._computeItemsCount(items);return 10<b}_computeItems(rows,q){const filteredItems=[];for(let i=0;i<rows.length;i++){const item=rows[i];if(q){var query=q.toLowerCase(),name=item[1].toLowerCase();if(-1!==name.indexOf(query)){filteredItems.push(item)}}else{filteredItems.push(item)}}return filteredItems}init(pElement,loader){super.init(pElement,loader);var self=this;self.required=this.e.required||pElement.min&&0<pElement.min;self.title=DropdownSelectBase.toTitleCase(pElement.name);self.icon=pElement.icon;self.params=self.pl.paramsCopy();if(pElement.kind){this.selected=+pElement.kind}else if(self.required&&0<self.rows.length){self.selected=self.rows[0][0]}self.loader=this.loadData()}};var dropdownSelect={DropdownSelectBase:DropdownSelectBase};const DropDownSelectStyles=css`
#warning-text{
  display:none;
}
.lbl{
  position: absolute;
  bottom: 0px;
  left: 11px;
  height: 100%;
  width: 100%;
  pointer-events: none;
}
.lbl::after{
  content: '';
  position: absolute;
  left: 0px;
  bottom: -1px;
  height: 100%;
  width: 100%;
  border-bottom: #595f6e;
  transform: translateX(-100%);
  transition: transform .3s ease;
}
.lbl.active{
  /* position: absolute; */
  width: 100%;
  transform: translateY(-17px);
  color: var(--app-default-color);
  font-size: 70%;
  position: relative;
  left: 0;
}
.label-name.placeholder.lbl.active{
  width: 100%;
  transform: translateY(-17px);
  color: var(--app-default-color);
  font-size: 70%;
  position: relative;
  left: 0;
}

.main-container {
    padding: 16px;
  }
  #warning-text{
    padding: 0px;
    margin: 0;
    margin-left: 17px;
    position: relative;
    top: -12px;
    font-size: .75rem;
  }

  .is-danger {
    color: rgb(255, 56, 96)!important;
    border-width: 2px!important;
    border-style: solid!important;
    border-color: rgb(255, 56, 96)!important;
  }
  .is-arrow-danger {
    border-color:rgb(255, 56, 96)!important;
  }
  .is-success{
    color: rgb(35, 209, 96)!important;
    border-width: 2px!important;
    border-style: solid!important;
    border-color: rgb(35, 209, 96)!important;
  }
  .is-arrow-success{
    border-color: rgb(35, 209, 96)!important;
  }
  .is-label-success{
    color: rgb(35, 209, 96)!important;


  }
  .is-label-danger{
    color: rgb(255, 56, 96)!important;
  }
    .ss-main {
position: relative;
border-radius: 7px;
display: inline-block;
user-select: none;
color: #666666;
width: 100%; }
.ss-main .ss-single-selected {
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Work Sans', sans-serif;
  line-height: 0px;
  color: #4a4a4a;
  padding: 29px 31px 28px 12px;
  border: 1px solid rgb(183, 181, 181);
  box-shadow: none; }
  .ss-main .ss-single-selected.ss-disabled {
    background-color: #dcdee2;
    cursor: not-allowed; }
  .ss-main .ss-single-selected.ss-open-above {
    border-top-left-radius: 0px;
    border-top-right-radius: 0px; }
  .ss-main .ss-single-selected.ss-open-below {
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px; }
  .ss-main .ss-single-selected .placeholder {
    display: flex;
    flex: 1 1 100%;
    align-items: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
    padding-bottom: 4px;
    width: calc(100% - 30px);
    line-height: 1em;
    font-family: 'main',BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    font-weight: 495;
    color: rgb(1, 50, 67);
    letter-spacing: 0.5px;
    padding-left: 8px;
    font-size: 1rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none; margin-top: -6px; }
    .ss-main .ss-single-selected .placeholder * {
      display: flex;
      align-items: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: auto; }
    .ss-main .ss-single-selected .placeholder .ss-disabled {
      color: #dedede; }
  .ss-main .ss-single-selected .ss-deselect {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 0 1 auto;
    margin: -10px 6px 0 6px;
    font-weight: bold; }
    .ss-main .ss-single-selected .ss-deselect.ss-hide {
      display: none; }
  .ss-main .ss-single-selected .ss-arrow {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 0 1 auto;
    margin: 0 6px 0 6px; }
    .ss-main .ss-single-selected .ss-arrow span {
      border: solid #666666;
      border-width: 0 2px 2px 0;
      display: inline-block;
      padding: 3px;
      transition: transform .2s, margin .2s; }
      .ss-main .ss-single-selected .ss-arrow span.arrow-up {
        transform: rotate(-135deg);
        margin: 10px 0 0 0; }
      .ss-main .ss-single-selected .ss-arrow span.arrow-down {
        transform: rotate(45deg);
        margin: -17px; }
.ss-main .ss-multi-selected {
  display: flex;
  flex-direction: row;
  cursor: pointer;
  min-height: 30px;
  width: 100%;
  padding: 0 0 0 3px;
  border: 1px solid #dcdee2;
  border-radius: 4px;
  background-color: #ffffff;
  outline: 0;
  box-sizing: border-box;
  transition: background-color .2s; }
  .ss-main .ss-multi-selected.ss-disabled {
    background-color: #dcdee2;
    cursor: not-allowed; }
    .ss-main .ss-multi-selected.ss-disabled .ss-values .ss-disabled {
      color: #666666; }
    .ss-main .ss-multi-selected.ss-disabled .ss-values .ss-value .ss-value-delete {
      cursor: not-allowed; }
  .ss-main .ss-multi-selected.ss-open-above {
    border-top-left-radius: 0px;
    border-top-right-radius: 0px; }
  .ss-main .ss-multi-selected.ss-open-below {
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px; }
  .ss-main .ss-multi-selected .ss-values {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    flex: 1 1 100%;
    width: calc(100% - 30px); }
    .ss-main .ss-multi-selected .ss-values .ss-disabled {
      display: flex;
      padding: 4px 5px;
      margin: 2px 0px;
      line-height: 1em;
      align-items: center;
      width: 100%;
      color: #dedede;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap; }
@keyframes scaleIn {
0% {
  transform: scale(0);
  opacity: 0; }
100% {
  transform: scale(1);
  opacity: 1; } }
@keyframes scaleOut {
0% {
  transform: scale(1);
  opacity: 1; }
100% {
  transform: scale(0);
  opacity: 0; } }
    .ss-main .ss-multi-selected .ss-values .ss-value {
      display: flex;
      user-select: none;
      align-items: center;
      font-size: 12px;
      padding: 3px 5px;
      margin: 3px 5px 3px 0px;
      color: #ffffff;
      background-color: #5897fb;
      border-radius: 4px;
      animation-name: scaleIn;
      animation-duration: .2s;
      animation-timing-function: ease-out;
      animation-fill-mode: both; }
      .ss-main .ss-multi-selected .ss-values .ss-value.ss-out {
        animation-name: scaleOut;
        animation-duration: .2s;
        animation-timing-function: ease-out; }
      .ss-main .ss-multi-selected .ss-values .ss-value .ss-value-delete {
        margin: 0 0 0 5px;
        cursor: pointer; }
  .ss-main .ss-multi-selected .ss-add {
    display: flex;
    flex: 0 1 3px;
    margin: 9px 12px 0 5px; }
    .ss-main .ss-multi-selected .ss-add .ss-plus {
      display: flex;
      justify-content: center;
      align-items: center;
      background: #666666;
      position: relative;
      height: 10px;
      width: 2px;
      transition: transform .2s; }
      .ss-main .ss-multi-selected .ss-add .ss-plus:after {
        background: #666666;
        content: "";
        position: absolute;
        height: 2px;
        width: 10px;
        left: -4px;
        top: 4px; }
      .ss-main .ss-multi-selected .ss-add .ss-plus.ss-cross {
        transform: rotate(45deg); }
.ss-main .ss-content {
  position: absolute;
  width: 100%;
  margin: -1px 0 0 0;
  box-sizing: border-box;
  border: solid 1px #dcdee2;
  z-index: 1010;
  background-color: #ffffff;
  transform-origin: center top;
  transition: transform .2s, opacity .2s;
  opacity: 0;
  transform: scaleY(0); }
  .ss-main .ss-content.ss-open {
    display: block;
    opacity: 1;
    border: 1px solid rgb(183, 181, 181);
    transform: scaleY(1); }
  .ss-main .ss-content .ss-search {
    display: flex;
    flex-direction: row;
    padding: 8px 8px 6px 8px; }
    .ss-main .ss-content .ss-search.ss-hide {
      height: 0px;
      opacity: 0;
      padding: 0px 0px 0px 0px;
      margin: 0px 0px 0px 0px; }
      .ss-main .ss-content .ss-search.ss-hide input {
        height: 0px;
        opacity: 0;
        padding: 0px 0px 0px 0px;
        margin: 0px 0px 0px 0px; }
    .ss-main .ss-content .ss-search input {
      display: inline-flex;
      font-size: inherit;
      line-height: inherit;
      flex: 1 1 auto;
      width: 100%;
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
      -webkit-appearance: textfield; }
      .ss-main .ss-content .ss-search input::placeholder {
        color: #8a8a8a;
        vertical-align: middle; }
      .ss-main .ss-content .ss-search input:focus {
        box-shadow: 0 0 5px #5897fb; }
    .ss-main .ss-content .ss-search .ss-addable {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      font-size: 22px;
      font-weight: bold;
      flex: 0 0 30px;
      height: 30px;
      margin: 0 0 0 8px;
      border: 1px solid #dcdee2;
      border-radius: 4px;
      box-sizing: border-box; }
  .ss-main .ss-content .ss-addable {
    padding-top: 0px; }
  .ss-main .ss-content .ss-list {
    max-height: 200px;
    overflow-x: hidden;
    overflow-y: auto;
    text-align: left; }
    .ss-main .ss-content .ss-list .ss-optgroup .ss-optgroup-label {
      padding: 6px 10px 6px 10px;
      font-weight: bold; }
    .ss-main .ss-content .ss-list .ss-optgroup .ss-option {
      padding: 6px 6px 6px 25px; }
    .ss-main .ss-content .ss-list .ss-optgroup-label-selectable {
      cursor: pointer; }
      .ss-main .ss-content .ss-list .ss-optgroup-label-selectable:hover {
        color: #ffffff;
        background-color: #5897fb; }
    .ss-main .ss-content .ss-list .ss-option {
      padding: 6px 10px 6px 10px;
      cursor: pointer;
      user-select: none; }
      .ss-main .ss-content .ss-list .ss-option * {
        display: inline-block; }
      .ss-main .ss-content .ss-list .ss-option:hover, .ss-main .ss-content .ss-list .ss-option.ss-highlighted {
        color: #ffffff;
        background-color:var(--app-default-color);
      }
      .ss-main .ss-content .ss-list .ss-option.ss-disabled {
        cursor: not-allowed;
        color: #dedede;
        background-color: #ffffff; }
      .ss-main .ss-content .ss-list .ss-option:not(.ss-disabled).ss-option-selected {
          background-color:var(--app-secondary-color);
          color: #fff; }
      .ss-main .ss-content .ss-list .ss-option.ss-hide {
        display: none; }
      .ss-main .ss-content .ss-list .ss-option .ss-search-highlight {
        background-color: #fffb8c; }

`;var dropdownSelectCss={DropDownSelectStyles:DropDownSelectStyles};class DropdownSelect extends DropdownSelectBase{static get styles(){return[DropDownSelectStyles,css`
        :host {
          display: block;
        }
      `]}constructor(){super();this.contentOpen=!1;this.selected=null}renderDefault(){if(this.renderMode===RENDER_M_SIDE_BY_SIDE){return html`
        RENDER_M_SIDE_BY_SIDE not supported
      `}else{return html`

    <div class="main-container">
      <div class="ss-main">
      
        <div id="d-down" class="ss-single-selected ${this.contentOpen?"ss-open-below":""}" @click="${this._onMultiSelectContainerClick}">
          <label for="name" class="label-name placeholder lbl"><span id="label" class="content-name">Select ${this.title}</span></label>
          <span class="placeholder" style="height: 16px">${this.getSelected(this.selected)}</span>
          <span class="ss-deselect ss-plus" @click="${this._onDeselectClick}">x</span>
          <!--arrow container-->
          <span class="ss-arrow">
                <!--arrow icons-->
               <span id="arrow" class="${this.contentOpen?"arrow-up":"arrow-down"}"></span>        
          </span>
        </div>
        
        <div class="ss-content ${this.contentOpen?"ss-open":""}">
              <!--container -->
              <div class="ss-search">
                  <!--input-->
                  <input 
                    type="search" 
                    placeholder="Enter Search" 
                    tabindex="0" 
                    aria-label="Enter Search"
                    @click=${this._onSearchInputClick}"  
                    @keyup=${this._onSearchKeyUp}" 
                    @focus=${this._onSearchFocus}">
            </div>
        
            <!--list-->
            <div class="ss-list">
            
            ${this.loading?html`
                 <div class="ss-option ss-disabled" >Searching options ... </div>
            `:html`            
                ${this.selectOptions(this.rows).length?html`
                    ${this.selectOptions(this.rows).map(option=>html`
                      <div class="ss-option ${option.selected?"ss-option-selected":""}" 
                            data-value="${option.value}" 
                            @click="${this._onOptionClick}">${option.label}</div>
                      `)}
                `:html`
                    <div class="ss-option ss-disabled" >No Results</div>
                `}
            `}
            </div>
    </div>
</div>
</div>

<p id="warning-text" style="color:#ff3860;">${this.e.name} required</p>

`}}static get properties(){return{icon:String,title:String,q:{type:String,value:""},contentOpen:{type:Boolean},options:{type:Array}}}getValue(){return this.selected}valid(){const warningText=this.shadowRoot.querySelector("#warning-text");warningText.style.display="none";const dropdown=this.shadowRoot.querySelector("#d-down"),arrow=this.shadowRoot.querySelector("#arrow"),label=this.shadowRoot.querySelector("#label");dropdown.classList.remove("is-danger");dropdown.classList.add("is-success");arrow.classList.remove("is-arrow-danger");arrow.classList.add("is-arrow-success");label.classList.remove("is-label-danger");label.classList.add("is-label-success");warningText.style.display="none"}invalid(){const warningText=this.shadowRoot.querySelector("#warning-text"),dropdown=this.shadowRoot.querySelector("#d-down"),arrow=this.shadowRoot.querySelector("#arrow"),label=this.shadowRoot.querySelector("#label");warningText.style.display="block";dropdown.classList.remove("is-success");dropdown.classList.add("is-danger");arrow.classList.remove("is-arrow-success");arrow.classList.add("is-arrow-danger");label.classList.remove("is-label-success");label.classList.add("is-label-danger")}getOption(value){console.log("VALUE",value);const o=this.rows.find(function(element){return element[0]==value});if(o){return{label:o[1],value:o[0],selected:this.selected==o.value}}}getSelections(){const ss=this.selections.map(s=>this.getOption(s));console.log(ss);return ss}getSelected(){const self=this;if(this.selected){const option=this.getOption(this.selected);this.loader.then(()=>{const label=self.shadowRoot.querySelector(".lbl");console.log(label);label.classList.add("active")});return option.label}}selectOptions(){const options=[];for(var i=0;i<this.rows.length;i++){const item=this.rows[i],option={value:item[0],label:item[1]};option.selected=this.selected==option.value;options.push(option)}return options}_onMultiSelectContainerClick(e){e.preventDefault();e.stopPropagation();this.contentOpen?this.close():this.open()}_onDeselectClick(e){e.stopPropagation();const item=e.currentTarget.dataset.value;var filteredAry=this.selections.filter(e=>e!=item);console.log(filteredAry);this.selections=filteredAry}_onSearchInputClick(evt){evt.stopPropagation()}_onSearchKeyUp(e){const searchValue=e.target.value;this.updateParams("q",searchValue)}_onSearchFocus(){this.open()}_onOptionClick(e){e.preventDefault();e.stopPropagation();const selected=e.currentTarget.dataset.value;console.log(selected);this.selected=selected;this.close()}open(){if(this.contentOpen){return}this.contentOpen=!0}close(){if(!this.contentOpen){return}this.contentOpen=!1}firstUpdated(){const self=this;this.loader.then(()=>{});document.addEventListener("click",function(e){if(!self.shadowRoot.contains(e.currentTarget)){self.close()}else{console.log(e.target);console.log(self.contains(e.target))}})}}customElements.define(DropdownSelect.is,DropdownSelect);export{dropdownSelect as $dropdownSelect,dropdownSelectCss as $dropdownSelectCss,DropdownSelectBase,DropDownSelectStyles};